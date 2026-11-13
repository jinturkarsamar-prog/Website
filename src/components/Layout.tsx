import { Outlet, Link, useLocation } from "react-router-dom";
import { BookOpen, Menu, X, MapPin, Phone, Mail, Instagram, Facebook, Twitter, Search } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import clsx from "clsx";
import FAQ from "./FAQ";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Manufacturing", path: "/manufacturing" },
  { name: "Network", path: "/distribution" },
  { name: "Contact", path: "/contact" },
];

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col font-sans text-text-primary bg-bg-primary selection:bg-brand-primary/30">
      {/* Top Bar */}
      <div className="bg-brand-primary text-text-primary py-2 text-xs hidden md:block border-b border-white/10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center opacity-90">
          <div className="flex items-center space-x-6">
            <span className="flex items-center"><Mail className="w-3 h-3 mr-2" /> linenwavejalna@gmail.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/contact" className="hover:text-text-primary transition-colors font-bold">Become a Distributor</Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-black/60 border-b border-border-light shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 md:h-28">
            <div className="flex items-center">
              <Link to="/" className="flex items-center group">
                <img 
                  src="/samar-logo.png" 
                  alt="Samar Logo" 
                  className="h-14 md:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={clsx(
                    "text-sm font-bold transition-all px-4 py-2 rounded-full border shadow-sm focus-visible:ring-offset-bg-card",
                    location.pathname === (link.path === "/" ? "/" : link.path) || (link.path !== "/" && location.pathname.startsWith(link.path))
                      ? "bg-brand-primary text-text-primary border-transparent shadow-md" 
                      : "text-text-secondary hover:text-brand-primary-dark hover:bg-bg-secondary border-border-primary/50"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden space-x-4">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-text-secondary hover:text-brand-primary p-2 focus-visible:ring-2 focus-visible:ring-brand-primary rounded-lg"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop with blur */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 top-[80px] bg-black/20 backdrop-blur-sm z-40 md:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden absolute top-full left-0 w-full backdrop-blur-xl bg-white/90 dark:bg-black/90 border-b border-border-light shadow-xl z-50"
              >
                <div className="px-4 pt-2 pb-6 space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={clsx(
                        "block px-4 py-3 rounded-2xl text-base font-bold border transition-all",
                        location.pathname === link.path
                          ? "bg-brand-primary text-text-primary border-transparent shadow-md"
                          : "text-text-secondary hover:bg-bg-secondary hover:text-text-primary border-border-primary/30 shadow-sm"
                      )}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 0.2, 
              ease: "linear" 
            }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <footer className="relative bg-[#0F172A] text-slate-300 py-16 border-t border-slate-800 overflow-hidden">
        {/* Decorative Background Blur */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-brand-primary/20 blur-[120px] rounded-full mix-blend-screen" />
          <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-brand-accent/10 blur-[120px] rounded-full mix-blend-screen" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
            <div className="space-y-4">
              <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
                Premium student notebooks manufactured with precision. Supplying students and partners across Maharashtra with reliable, high-quality stationery.
              </p>
              <div className="flex space-x-3 pt-1">
                <a 
                  href="https://www.instagram.com/samarsales?igsh=MXV1Y2tjNXpkM2wyMw==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-primary hover:text-slate-900 transition-all duration-300 text-slate-400 shadow-sm"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-primary hover:text-slate-900 transition-all duration-300 text-slate-400 shadow-sm"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="md:pl-8">
              <h3 className="font-bold text-white mb-4 tracking-wide uppercase text-sm">Partner With Us</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link to="/contact" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">Become a Distributor</Link></li>
                <li><Link to="/contact" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">Bulk Inquiry</Link></li>
                <li><Link to="/contact" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">Contact Sales</Link></li>
                <li><a href="#faq" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">FAQs</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4 tracking-wide uppercase text-sm">Contact</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-start group">
                  <MapPin className="w-5 h-5 mr-3 mt-0.5 text-brand-primary group-hover:text-brand-accent transition-colors shrink-0" aria-hidden="true" />
                  <span className="leading-relaxed">Line And Wave Industries Pvt. Ltd.<br />Plot No. C 20/2 old MIDC Jalna,<br />Maharashtra, India</span>
                </li>
                <li className="flex items-center group">
                  <Mail className="w-5 h-5 mr-3 text-brand-primary group-hover:text-brand-accent transition-colors shrink-0" aria-hidden="true" />
                  <a href="mailto:linenwavejalna@gmail.com" className="hover:text-white transition-colors duration-200">linenwavejalna@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-slate-800 text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} Samar Manufacturing. All rights reserved.</p>
            <div className="space-x-6">
              <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
