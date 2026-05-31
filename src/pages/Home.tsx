import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Factory, Globe2, PackageSearch, ShieldCheck, Truck } from "lucide-react";

const philosophies = [
  {
    title: "Superior Paper Quality",
    desc: "Every Samar notebook features ultra-smooth, high-GSM paper engineered for various writing instruments. No bleed-through, just pure writing pleasure.",
    img: "/IMG_9025.jpeg",
  },
  {
    title: "Precision Craftsmanship",
    desc: "Crafted in Jalna with 6 years of expertise. We blend high-speed automation with rigorous quality checks for excellence at scale.",
    img: "/precision_craftsmanship.png",
  },
  {
    title: "Maharashtra's Trusted Choice",
    desc: "The go-to brand for thousands across Maharashtra. Providing affordable, premium-grade stationery to power every student's future.",
    img: "/maharashtra_trusted.png",
  }
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-brand-primary min-h-[90vh] flex items-center overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-brand-accent/30 blur-[100px] mix-blend-overlay"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-brand-primary-dark/20 blur-[120px] mix-blend-overlay"
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full lg:w-1/2 max-w-2xl"
          >
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/30 shadow-sm text-text-primary">
              <span className="flex h-2 w-2 rounded-full bg-brand-primary-dark" />
              <span className="text-sm font-semibold tracking-wide uppercase">Premium Quality Stationery</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1] text-text-primary">
              More Than Best. <br/><span className="text-white drop-shadow-sm">High-quality</span> notebooks.
            </h1>
            <p className="text-lg md:text-xl text-text-primary/90 max-w-xl leading-relaxed mb-8">
              We provide students and partners with high-quality notebooks. Reliable manufacturing, consistent supply, and exceptional value across Maharashtra.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary bg-white text-brand-primary-dark hover:bg-gray-50 text-center text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300">
                Partner With Us
              </Link>
              <Link to="/manufacturing" className="btn-secondary bg-transparent border-2 border-white/50 text-text-primary hover:bg-white/10 text-center text-lg px-8 py-4 transition-all duration-300">
                Explore Manufacturing
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/20 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="/notebook_stack.png" 
                alt="Premium Notebook Stack" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent mix-blend-overlay" />
            </div>
            {/* Floating badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 glass-panel p-6 rounded-2xl flex items-center gap-4 hidden md:flex"
            >
              <div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center text-white shadow-inner">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-text-secondary font-medium">Certified</p>
                <p className="text-lg font-bold text-text-primary leading-tight">ISO 9001:2015</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Brand Ethos Section - Bento Grid */}
      <section className="py-24 bg-bg-card border-b border-border-primary overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-text-primary mb-6 tracking-tight">Our Core Philosophies</h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              Built on a foundation of quality, craftsmanship, and trust, we aim to deliver the best value to students everywhere.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[350px]">
            {/* Bento Box 1 - Spans 2 columns on large screens */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="lg:col-span-2 relative overflow-hidden rounded-[2rem] border border-border-primary shadow-sm group bg-bg-secondary"
            >
              <img 
                src={philosophies[1].img} 
                alt={philosophies[1].title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <div className="inline-flex items-center space-x-2 text-brand-butter font-mono text-xs tracking-widest uppercase mb-4">
                  <span className="w-6 h-px bg-current opacity-50" />
                  <span>Philosophy 2</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">
                  {philosophies[1].title}
                </h3>
                <p className="text-white/80 leading-relaxed max-w-lg text-lg">
                  {philosophies[1].desc}
                </p>
              </div>
            </motion.div>

            {/* Bento Box 2 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="relative overflow-hidden rounded-[2rem] border border-border-primary shadow-sm group bg-brand-primary"
            >
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,white,transparent)]" />
              <div className="relative h-full p-8 flex flex-col justify-end text-text-primary">
                <div className="inline-flex items-center space-x-2 font-mono text-xs tracking-widest uppercase mb-4 opacity-80">
                  <span className="w-6 h-px bg-current opacity-50" />
                  <span>Philosophy 1</span>
                </div>
                <h3 className="text-3xl font-bold tracking-tight mb-3">
                  {philosophies[0].title}
                </h3>
                <p className="text-text-primary/80 leading-relaxed">
                  {philosophies[0].desc}
                </p>
              </div>
            </motion.div>

            {/* Bento Box 3 - Bottom Row */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="lg:col-span-3 relative overflow-hidden rounded-[2rem] border border-border-primary shadow-sm group h-[300px] bg-bg-secondary flex flex-col md:flex-row items-stretch"
            >
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-bg-card">
                <div className="inline-flex items-center space-x-2 text-brand-primary-dark font-mono text-xs tracking-widest uppercase mb-4">
                  <span className="w-6 h-px bg-current opacity-50" />
                  <span>Philosophy 3</span>
                </div>
                <h3 className="text-3xl font-bold text-text-primary tracking-tight mb-3">
                  {philosophies[2].title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {philosophies[2].desc}
                </p>
              </div>
              <div className="w-full md:w-1/2 relative h-full hidden md:block">
                <img 
                  src={philosophies[2].img} 
                  alt={philosophies[2].title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-bg-secondary border-y border-border-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-6 tracking-tight">Why Partner With Samar?</h2>
              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                We understand the demands of the stationery market. Our manufacturing process is optimized to deliver high-quality products at competitive price points, ensuring excellent value for students and strong margins for our partners.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: ShieldCheck, title: "Consistent Quality", desc: "Rigorous QC processes ensure every batch meets our high standards." },
                  { icon: PackageSearch, title: "Wide Variety", desc: "From standard ruling to specialized formats, we cover all student needs." },
                  { icon: Truck, title: "Reliable Supply Chain", desc: "Robust logistics network ensuring on-time delivery for orders." },
                  { icon: Globe2, title: "Growing Network", desc: "Join our expanding network of successful regional distributors across Maharashtra." },
                ].map((feature, i) => (
                  <div key={i} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary-dark dark:text-brand-butter">
                        <feature.icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-text-primary">{feature.title}</h4>
                      <p className="mt-1 text-text-secondary">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="aspect-square rounded-2xl overflow-hidden shadow-2xl border-border-light relative group"
              >
                <img 
                  src="/warehouse_boxes.png" 
                  alt="Warehouse Distribution"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="absolute -bottom-8 -left-8 glass-panel p-8 rounded-2xl max-w-xs hidden md:block"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-14 h-14 bg-brand-primary rounded-xl flex items-center justify-center text-white shadow-inner">
                    <Factory className="w-7 h-7" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold text-text-primary">100k+</div>
                    <div className="text-xs text-text-secondary font-bold uppercase tracking-wide">Daily Capacity</div>
                  </div>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">State-of-the-art machinery ensuring high-volume output without compromising quality.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-primary relative overflow-hidden text-text-primary">
        <div className="absolute inset-0 opacity-[0.04]">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots-pattern" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots-pattern)" />
          </svg>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Ready to Grow Your Distribution Business?</h2>
          <p className="text-xl mb-10 leading-relaxed font-medium">
            Partner with Samar for reliable supply, competitive margins, and products that students love.
          </p>
          <div className="flex justify-center">
            <Link
              to="/contact"
              className="btn-primary border-2 border-text-primary/20 hover:border-text-primary/40 transition-colors"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
