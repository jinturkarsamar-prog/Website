import { motion } from "motion/react";
import { Settings, ShieldCheck, Zap, Layers, Leaf } from "lucide-react";

export default function Manufacturing() {
  return (
    <div className="bg-bg-primary">
      {/* Hero Section */}
      <section className="relative bg-brand-primary min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] bg-[conic-gradient(from_0deg_at_50%_50%,rgba(255,255,255,0.1)_0deg,transparent_60deg,transparent_300deg,rgba(255,255,255,0.1)_360deg)]"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-text-primary py-24 lg:py-32">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6"
          >
            Manufacturing Excellence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl md:text-2xl text-text-primary/90 max-w-3xl mx-auto leading-relaxed"
          >
            State-of-the-art facilities, rigorous quality control, and scalable production capacity to meet the demands of our growing network.
          </motion.p>
        </div>
      </section>

      {/* Production Process */}
      <section className="py-20 lg:py-32 bg-bg-primary transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text-primary mb-4 tracking-tight">The Production Process</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              From raw paper rolls to finished notebooks, our automated production line ensures consistency and efficiency at every step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-brand-primary/20 via-brand-primary to-brand-primary/20 -z-10 -translate-y-1/2 rounded-full" />

            {[
              {
                icon: Layers,
                title: "1. Paper Sourcing",
                desc: "We source premium GSM paper rolls from certified mills, ensuring brightness and proper ink absorption.",
                img: "/paper_sourcing.png"
              },
              {
                icon: Settings,
                title: "2. Ruling",
                desc: "Precision ruling machines ensure accurate and consistent line spacing.",
                img: "/ruling_machine.png"
              },
              {
                icon: Zap,
                title: "3. Cutting & Binding",
                desc: "Automated guillotines and binding machines ensure clean finishing and durability.",
                img: "/cutting_binding.png"
              },
              {
                icon: ShieldCheck,
                title: "4. Packing & Shipping",
                desc: "Systematic packaging ensures safe transport to distributors.",
                img: "/packing_shipping.png"
              }
            ].map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.6,
                  delay: i * 0.15,
                  ease: "easeOut"
                }}
                className="glass-panel rounded-[2rem] p-8 shadow-lg border-white/40 relative group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:bg-white/90 dark:hover:bg-black/80"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-brand-primary to-brand-primary-dark rounded-2xl flex items-center justify-center text-white mb-6 mx-auto relative z-10 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <step.icon className="w-10 h-10" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-4 text-center">{step.title}</h3>
                <p className="text-text-secondary text-center text-base leading-relaxed">{step.desc}</p>
                <div className="mt-8 aspect-video rounded-xl overflow-hidden bg-bg-secondary border border-border-primary flex items-center justify-center relative group-hover:shadow-md transition-shadow">
                  <img src={step.img} alt={step.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-brand-primary/10 mix-blend-overlay" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capacity & Variety */}
      <section className="py-24 bg-bg-secondary border-y border-border-primary transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 relative rounded-[2rem] overflow-hidden shadow-2xl aspect-square lg:aspect-auto lg:h-[600px] group"
            >
              <img 
                src="/manufacturing_line.png" 
                alt="Manufacturing Line"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent mix-blend-overlay" />
            </motion.div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-text-primary mb-6 tracking-tight">Production Capacity & Variety</h2>
              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                Our facility is equipped with advanced manufacturing technology, allowing us to maintain high output volumes without sacrificing the quality our brand is known for.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="glass-panel p-8 rounded-[2rem]"
                >
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl font-extrabold bg-gradient-to-br from-brand-primary-dark to-brand-primary bg-clip-text text-transparent mb-3"
                  >
                    100k+
                  </motion.div>
                  <div className="text-sm font-bold text-text-secondary uppercase tracking-widest">Daily Notebooks</div>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="glass-panel p-8 rounded-[2rem]"
                >
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl font-extrabold bg-gradient-to-br from-brand-accent-dark to-amber-500 bg-clip-text text-transparent mb-3"
                  >
                    12+
                  </motion.div>
                  <div className="text-sm font-bold text-text-secondary uppercase tracking-widest">Product Categories</div>
                </motion.div>
              </div>
              
              <h3 className="text-xl font-bold text-text-primary mb-4">Wide Range of Products</h3>
              <p className="text-text-secondary leading-relaxed mb-8">
                We manufacture a wide range of notebooks, practical books, graph books, drawing books, duplicate books, and answer sheets to meet all student needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eco-Friendly Commitment */}
      <section className="py-20 lg:py-32 bg-bg-primary transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center text-emerald-700 dark:text-emerald-400 mx-auto mb-8">
            <Leaf className="w-10 h-10" aria-hidden="true" />
          </div>
          <h2 className="text-3xl font-bold text-text-primary mb-6 tracking-tight">Eco-Friendly Commitment</h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            We are committed to sustainable manufacturing. We optimize paper usage and reduce waste during production, emphasizing responsible sourcing of all our raw materials to minimize our environmental footprint.
          </p>
        </div>
      </section>
    </div>
  );
}
