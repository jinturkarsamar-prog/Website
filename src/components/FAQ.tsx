import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle, MessageCircle, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

interface FAQItem {
  question: string;
  answer: string;
  category: "Products" | "Distribution" | "Orders & Custom";
}

const faqs: FAQItem[] = [
  {
    category: "Products",
    question: "What types of notebooks and stationery does Samar manufacture?",
    answer:
      "We manufacture a comprehensive range of premium student stationery including long books, single line, two line, four line, square ruled (maths), drawing books, graph books, and rough notebooks in various sizes and page counts (e.g., 76, 120, 160, 192, and 240+ pages)."
  },
  {
    category: "Products",
    question: "What makes Samar notebook paper quality stand out?",
    answer:
      "We source premium high-GSM paper from certified mills, ensuring bright white pages with a silky-smooth surface. Our paper is specially engineered to prevent ink feathering and bleed-through, making it ideal for gel pens, ballpoint pens, and fountain pens alike."
  },
  {
    category: "Distribution",
    question: "How can I become an authorized Samar distributor or dealer?",
    answer:
      "We are actively expanding our distribution network across Maharashtra and neighboring regions. Established regional distributors can apply through our Network or Contact page. We offer competitive distributor margins, promotional support, and priority allocation during peak academic seasons."
  },
  {
    category: "Distribution",
    question: "Which regions and districts do you currently serve?",
    answer:
      "Our distribution network covers major districts across Maharashtra including Jalna, Chhatrapati Sambhajinagar, Beed, Parbhani, Hingoli, Latur, Nanded, Amravati, Akola, Wardha, Yavatmal, Nagpur, Buldhana, Washim, Ahilyanagar, and Dhule, with continuous expansion into new territories."
  },
  {
    category: "Orders & Custom",
    question: "Do you accept bulk orders for schools, colleges, and coaching institutes?",
    answer:
      "Yes! We regularly fulfill large-scale institutional orders for schools, educational institutions, coaching academies, and CSR programs, ensuring guaranteed delivery timelines before academic sessions begin."
  },
  {
    category: "Orders & Custom",
    question: "Can we get custom branded covers with our school or corporate logo?",
    answer:
      "Absolutely. We offer complete custom branding solutions including custom front and back cover designs, specialized index pages, custom ruling formats, and school logos for qualifying bulk quantities."
  },
  {
    category: "Orders & Custom",
    question: "What is your manufacturing capacity and turnaround time?",
    answer:
      "Our high-speed automated production facility in Jalna has a daily manufacturing capacity of 100,000+ notebooks. This high volume allows us to rapidly fulfill both regular distributor shipments and high-demand seasonal orders."
  },
  {
    category: "Orders & Custom",
    question: "How can I get the latest product catalog and wholesale pricing?",
    answer:
      "You can request our product catalog and wholesale rate card by submitting an inquiry via our Contact page, sending an email to linenwavejalna@gmail.com, or connecting with our sales desk directly via WhatsApp."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Products", "Distribution", "Orders & Custom"];

  const filteredFaqs =
    selectedCategory === "All"
      ? faqs
      : faqs.filter((faq) => faq.category === selectedCategory);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-20 lg:py-28 bg-bg-secondary/60 border-t border-border-primary/40 transition-colors duration-300 overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-primary/15 text-brand-primary-dark dark:text-brand-butter px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase mb-4 border border-brand-primary/20">
            <HelpCircle className="w-4 h-4" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-text-primary tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about Samar notebooks, paper quality, distribution partnerships, and bulk ordering.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setOpenIndex(null);
                  }}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-brand-primary text-text-primary shadow-sm scale-105"
                      : "bg-bg-card text-text-secondary hover:text-text-primary hover:bg-bg-primary border border-border-primary"
                  }`}
                >
                  {cat === "All" ? "All Questions" : cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-bg-card border-brand-primary/40 shadow-md ring-1 ring-brand-primary/20"
                    : "bg-bg-card/70 hover:bg-bg-card border-border-primary/60 hover:border-border-primary shadow-sm"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-5 sm:py-6 text-left flex items-start justify-between gap-4 cursor-pointer select-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-2 h-2 rounded-full bg-brand-primary" />
                    <span className="text-base sm:text-lg font-bold text-text-primary tracking-tight">
                      {faq.question}
                    </span>
                  </div>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "bg-brand-primary text-text-primary rotate-180"
                        : "bg-bg-secondary text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-text-secondary leading-relaxed border-t border-border-primary/20">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-3xl bg-brand-primary/10 border border-brand-primary/20 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="text-left">
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="w-5 h-5 text-brand-primary-dark dark:text-brand-butter" />
              <h3 className="text-lg font-bold text-text-primary">Still have questions?</h3>
            </div>
            <p className="text-sm text-text-secondary">
              Our sales and manufacturing team is ready to answer any custom order or distribution query.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              to="/contact"
              className="btn-primary text-xs sm:text-sm py-2.5 px-5 inline-flex items-center gap-2 shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Contact Our Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
