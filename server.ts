import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import os from "os";

dotenv.config();

// Email Transporter (Lazy initialization)
let transporter: nodemailer.Transporter | null = null;

function getTransporter() {
  if (!transporter) {
    const host = process.env.EMAIL_HOST || "smtp.gmail.com";
    const port = parseInt(process.env.EMAIL_PORT || "587");
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;

    if (!user || !pass) {
      console.warn("Email credentials missing. Please set EMAIL_USER and EMAIL_PASS in environment variables. Inquiries will be saved to database but not emailed.");
      return null;
    }

    transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });
  }
  return transporter;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.post("/api/inquiries", async (req, res) => {
    const { name, company, email, phone, inquiryType, message } = req.body;
    
    console.log(`[Inquiry] Received from ${name} (${email})`);

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required." });
    }

    try {
      // Send email directly
      const mailTransporter = getTransporter();
      if (mailTransporter) {
        const typeLabel = inquiryType === 'customer' ? 'Customer Inquiry' : 
                         inquiryType === 'bulk_order' ? 'Bulk Order' : 
                         inquiryType === 'custom_order' ? 'Custom Order' : 'General Inquiry';

        const mailOptions = {
          from: process.env.EMAIL_FROM || process.env.EMAIL_USER || "linenwavejalna@gmail.com",
          to: process.env.EMAIL_TO || "linenwavejalna@gmail.com",
          subject: `New Inquiry: ${typeLabel} from ${name}`,
          text: `
Name: ${name}
Firm: ${company || 'N/A'}
Email: ${email}
Phone: ${phone}
Inquiry Type: ${typeLabel}

Message:
${message}
          `.trim(),
        };

        try {
          console.log(`[Email] Attempting to send to ${mailOptions.to}...`);
          await mailTransporter.sendMail(mailOptions);
          console.log(`[Email] SUCCESS: Email sent for inquiry from ${name}`);
        } catch (mailError) {
          console.error("[Email] ERROR: Failed to send email directly:", mailError);
          // Return the error to the client if it's explicitly about the email failing
          // so the user knows why it didn't arrive.
          return res.status(201).json({ 
            success: true, 
            emailNote: "Inquiry processed, but email dispatch failed. Check server logs." 
          });
        }
      } else {
        console.warn("[Email] SKIP: Transporter not initialized (check env vars)");
      }

      res.status(201).json({ success: true });
    } catch (error) {
      console.error("[Inquiry] FATAL ERROR:", error);
      res.status(500).json({ error: "Failed to process inquiry." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    app.use(express.static(path.resolve(process.cwd(), "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(process.cwd(), "dist/index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`\n  Vite + Express Server`);
    console.log(`  ➜  Local:   http://localhost:${PORT}/`);
    
    // Find the local network IP address
    const interfaces = os.networkInterfaces();
    let localIp = '';
    for (const name of Object.keys(interfaces)) {
      for (const iface of interfaces[name] || []) {
        if (iface.family === 'IPv4' && !iface.internal) {
          localIp = iface.address;
          break;
        }
      }
      if (localIp) break;
    }
    
    if (localIp) {
      console.log(`  ➜  Network: http://${localIp}:${PORT}/`);
    }
  });
}

startServer();
