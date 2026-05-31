import React, { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, Send, Loader2, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    address: "",
    inquiryType: "customer",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isFormValid = 
    formData.name.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.message.trim() !== "" &&
    (formData.inquiryType === "customer" || 
      (formData.company.trim() !== "" && 
       formData.phone.trim() !== "" && 
       formData.address.trim() !== ""));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // 1. Send to server-side API
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send inquiry to server.");
      }

      const data = await response.json();
      
      if (data.success) {
        setSubmitStatus("success");
        if (data.emailNote) {
          console.warn(data.emailNote);
          // Show a subtle warning toast/text if needed
        }
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          address: "",
          inquiryType: "customer",
          message: ""
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-bg-primary min-h-screen py-12 lg:py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 tracking-tight">Contact & Inquiries</h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Have questions about our products, want to become a distributor, or need to place a bulk order? Our team is ready to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1 space-y-8"
          >
            <div className="bg-bg-card p-8 rounded-2xl shadow-sm border border-border-primary transition-colors duration-300">
              <h3 className="text-xl font-bold text-text-primary mb-6 border-b border-border-primary pb-4">Corporate Office & Factory</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary-dark dark:text-brand-butter mr-4 shrink-0">
                    <MapPin className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-text-primary mb-1">Address</h4>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      Line And Wave Industries Pvt. Ltd.<br />
                      Plot No. C 20/2 old MIDC Jalna,<br />
                      Maharashtra, India
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary-dark dark:text-brand-butter mr-4 shrink-0">
                    <Mail className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-text-primary mb-1">Email</h4>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      linenwavejalna@gmail.com
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-brand-primary text-text-primary p-8 rounded-2xl relative overflow-hidden transition-colors duration-300 shadow-sm">
              <div className="absolute inset-0 opacity-10">
                <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid-pattern-unified" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="currentColor" strokeWidth="2" fill="none" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid-pattern-unified)" />
                </svg>
              </div>
              <div className="relative z-10">
                <h3 className="text-lg font-bold mb-4">Partner Benefits</h3>
                <ul className="space-y-2 text-sm opacity-90">
                  <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 shrink-0" /> Competitive wholesale pricing</li>
                  <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 shrink-0" /> Priority seasonal allocation</li>
                  <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 shrink-0" /> Marketing & brand support</li>
                  <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 shrink-0" /> Custom branding & bulk orders</li>
                </ul>
              </div>
            </div>

            <div className="aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-lg border border-border-light relative group">
              <img 
                src="/warehouse_boxes.png" 
                alt="Samar Warehouse"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <div className="bg-bg-card p-8 md:p-12 rounded-2xl shadow-xl border border-border-primary h-full transition-colors duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <h2 className="text-2xl font-bold text-text-primary">Send a Message or Inquiry</h2>
                <div className="inline-flex items-center space-x-2 text-xs font-medium text-text-secondary bg-bg-secondary px-3 py-1.5 rounded-full border border-border-primary">
                  <Mail className="w-3.5 h-3.5 text-brand-primary-dark dark:text-brand-butter" />
                  <span>To: linenwavejalna@gmail.com</span>
                </div>
              </div>
              
              {submitStatus === "success" ? (
                <div className="bg-brand-primary/10 text-brand-primary-dark dark:text-brand-butter p-8 rounded-2xl border border-brand-primary/20 text-center h-full flex flex-col items-center justify-center">
                  <div className="w-20 h-20 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-brand-primary-dark dark:text-brand-butter" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Sent Successfully!</h3>
                  <p className="text-text-secondary max-w-md mx-auto mb-8 text-lg">
                    Thank you. A member of our team will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitStatus("idle")}
                    className="btn-secondary"
                  >
                    Send Another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border-primary bg-bg-secondary text-text-primary focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all outline-none"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border-primary bg-bg-secondary text-text-primary focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all outline-none"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="inquiryType" className="block text-sm font-medium text-text-secondary mb-2">Inquiry Type</label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border-primary bg-bg-secondary text-text-primary focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all outline-none"
                      >
                        <option value="customer">Customer Inquiry</option>
                        <option value="bulk_order">Bulk Order</option>
                        <option value="custom_order">Custom Order</option>
                      </select>
                    </div>
                    {formData.inquiryType !== 'customer' && (
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-text-secondary mb-2">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required={formData.inquiryType !== 'customer'}
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-border-primary bg-bg-secondary text-text-primary focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all outline-none"
                          placeholder="Your Phone Number"
                        />
                      </div>
                    )}
                  </div>

                  {formData.inquiryType !== 'customer' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-text-secondary mb-2">
                          Firm Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          required={formData.inquiryType !== 'customer'}
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-border-primary bg-bg-secondary text-text-primary focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all outline-none"
                          placeholder="Your Company/Firm Name"
                        />
                      </div>
                      <div>
                        <label htmlFor="address" className="block text-sm font-medium text-text-secondary mb-2">City/State</label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          required={formData.inquiryType !== 'customer'}
                          value={formData.address}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-border-primary bg-bg-secondary text-text-primary focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all outline-none"
                          placeholder="City, District"
                        />
                      </div>
                    </div>
                  )}

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">Message / Requirements</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border-primary bg-bg-secondary text-text-primary focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all outline-none resize-none"
                      placeholder="Type a message detailing your requirements here..."
                    />
                  </div>

                  {submitStatus === "error" && (
                    <div className="p-4 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-xl border border-red-200 dark:border-red-800 text-sm">
                      An error occurred while sending your message. Please try again later.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting || !isFormValid}
                    className="w-full btn-primary flex items-center justify-center disabled:!bg-gray-400 disabled:!text-white disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 focus-visible:ring-offset-bg-card transition-all"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-6 h-6 mr-2 animate-spin" aria-hidden="true" /> Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-6 h-6 mr-2" aria-hidden="true" /> Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
