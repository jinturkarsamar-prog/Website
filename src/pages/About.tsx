import { motion } from "motion/react";
import { Target, Heart, Award, Users, Map } from "lucide-react";

export default function About() {
  return (
    <div className="bg-bg-primary">
      {/* Hero Section */}
      <section className="relative bg-[#0F172A] text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-brand-primary/10 blur-[100px] rounded-full mix-blend-screen" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20 text-white/90"
          >
            <span className="text-sm font-semibold tracking-wide uppercase">Since 2020</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-white"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            Founded with a simple belief — every student deserves premium quality notebooks at accessible prices.
          </motion.p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 lg:py-32 bg-bg-primary transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:pr-8"
            >
              <h2 className="text-4xl font-bold text-text-primary mb-8 tracking-tight">The Samar Journey</h2>
              <div className="space-y-8 text-lg text-text-secondary leading-relaxed relative before:absolute before:inset-y-0 before:left-[11px] before:w-0.5 before:bg-border-primary pl-8">
                <div className="relative">
                  <div className="absolute -left-[37px] top-2 w-6 h-6 rounded-full border-4 border-bg-primary bg-brand-primary shadow-sm" />
                  <h4 className="font-bold text-text-primary mb-2">The Beginning</h4>
                  <p>
                    What started as a small operation serving Jalna has grown into a trusted brand. From day one, our focus has been consistent quality, attractive designs, and strong value for money.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[37px] top-2 w-6 h-6 rounded-full border-4 border-bg-primary bg-brand-primary shadow-sm" />
                  <h4 className="font-bold text-text-primary mb-2">Growing Team</h4>
                  <p>
                    With a team of over 40 employees, we continue growing while staying committed to students in both cities and villages.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[37px] top-2 w-6 h-6 rounded-full border-4 border-bg-primary bg-brand-primary shadow-sm" />
                  <h4 className="font-bold text-text-primary mb-2">Statewide Expansion</h4>
                  <p>
                    Our journey began in Jalna and expanded across 15+ districts including Ch. Sambhajinagar, Nagpur, and Amravati. We are building toward a statewide presence across Maharashtra.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group"
            >
              <img 
                src="/notebook_stack.png" 
                alt="Samar Journey"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/40 to-transparent mix-blend-overlay" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-bg-secondary border-y border-border-primary relative overflow-hidden">
        {/* Background Decorative */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-primary/5 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            <motion.div 
              whileHover={{ y: -10 }}
              className="glass-panel p-10 md:p-14 rounded-[2rem] shadow-lg border-white/50"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-primary-dark rounded-2xl flex items-center justify-center text-white mb-8 shadow-md">
                <Target className="w-8 h-8" aria-hidden="true" />
              </div>
              <h3 className="text-3xl font-bold text-text-primary mb-6">Our Goal</h3>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                Our goal is to become a trusted national brand known for the perfect balance of price and quality. We aim to:
              </p>
              <ul className="space-y-4 text-text-secondary">
                {['Expand across Maharashtra and India', 'Add new categories: diaries, notepads, stationery', 'Begin exporting internationally', 'Maintain affordable pricing with improved quality'].map((item, i) => (
                  <li key={i} className="flex items-start text-lg">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-primary/20 text-brand-primary-dark flex items-center justify-center mr-3 mt-1">
                      <span className="w-2 h-2 rounded-full bg-current" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="glass-panel p-10 md:p-14 rounded-[2rem] shadow-lg border-white/50"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-brand-accent to-amber-500 rounded-2xl flex items-center justify-center text-white mb-8 shadow-md">
                <Users className="w-8 h-8" aria-hidden="true" />
              </div>
              <h3 className="text-3xl font-bold text-text-primary mb-6">Our Community</h3>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                We are more than manufacturers. We support education by making essential learning tools accessible across urban and rural regions.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                Through strong distributor relationships and consistent supply, we ensure availability across markets, ensuring every student has what they need to succeed.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
