# Samar Notebook Manufacturing

A modern, high-performance website for Samar Notebook Manufacturing, featuring a sleek React (Vite) frontend with Tailwind CSS and an Express backend for processing contact inquiries.

## Prerequisites

- Node.js (v18 or higher recommended)
- npm

## Running Locally

1. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```
   *(Note: `--legacy-peer-deps` is required to resolve conflicts with `react-simple-maps` and `react@19`)*

2. Environment Setup (Optional for Contact Form):
   Create a `.env` file in the root directory based on `.env.example` if you wish to configure the SMTP email transport for the contact form:
   ```env
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_app_password
   ```
   *If these are not set, the contact form will still succeed but emails won't be sent.*

3. Start the Development Server:
   ```bash
   npm run dev
   ```

4. The server will start on `http://localhost:3000/`. You can view it from the browser. It will also print your network IP address which allows you to test the website on any mobile device connected to the same Wi-Fi network.

## Deployment

To deploy this website on platforms like **Render**, **Railway**, or **Heroku**:
1. Connect your GitHub repository to the deployment platform.
2. Build Command: `npm run build`
3. Start Command: `npm run dev` (which runs `tsx server.ts`) or compile `server.ts` to js and run it using `node`.
4. Ensure you set your Environment Variables (`EMAIL_USER`, `EMAIL_PASS`) on the deployment platform to enable email delivery.

*(Note: Since this app uses an Express backend for email sending, static hosts like GitHub Pages or Netlify will only host the frontend, causing the Contact Form to break).*
