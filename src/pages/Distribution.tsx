import { motion } from "motion/react";
import { TrendingUp, Users, Handshake } from "lucide-react";
import { Link } from "react-router-dom";

export default function Distribution() {
  return (
    <div className="bg-bg-primary">
      {/* Hero Section */}
      <section className="relative bg-brand-primary min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/warehouse_boxes.png')] bg-cover bg-center bg-no-repeat opacity-20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-primary-dark/50 to-brand-primary/90" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-24 lg:py-32">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6"
          >
            Our Growing Network
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
          >
            We partner with dedicated distributors to ensure our premium student notebooks reach students in every corner of Maharashtra.
          </motion.p>
        </div>
      </section>

      {/* Network Overview */}
      <section className="py-20 lg:py-32 bg-bg-primary transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-text-primary mb-6 tracking-tight">National Reach, Local Impact</h2>
              <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
                <p>
                  Our distribution strategy is built on strong, localized partnerships. We understand that regional distributors know their markets best, which is why we focus on manufacturing excellence while empowering our partners to dominate their territories.
                </p>
                <p>
                  <strong className="text-text-primary">Areas Served:</strong> Jalna, Ch. Sambhajinagar, Beed, Parbhani, Hingoli, Latur, Nanded, Amravati, Akola, Wardha, Yavatmal, Nagpur, Buldhana, Washim, Ahilyanagar, and Dhule.
                </p>
                <p>
                  <strong className="text-text-primary">Future Goal:</strong> Full Maharashtra coverage.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, staggerChildren: 0.1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {[
                { label: 'Districts Served', value: '16' },
                { label: 'Active Distributors', value: '26' },
                { label: 'Active Retailers', value: '5000+' },
                { label: 'Units Shipped Annually', value: '10M+' }
              ].map((stat, idx) => (
                <motion.div 
                  key={stat.label}
                  whileHover={{ y: -5 }}
                  className="glass-panel p-6 rounded-3xl text-center border-white/50 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-brand-primary/5 group-hover:bg-brand-primary/10 transition-colors duration-300" />
                  <div className="relative z-10">
                    <div className="text-4xl font-extrabold bg-gradient-to-br from-brand-primary-dark to-brand-primary bg-clip-text text-transparent mb-2">{stat.value}</div>
                    <div className="text-xs font-bold text-text-secondary uppercase tracking-widest">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Growth & Partnership */}
      <section className="py-20 bg-bg-secondary border-y border-border-primary transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-text-primary mb-16 tracking-tight">Why Distributors Choose Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: TrendingUp,
                title: 'Healthy Margins',
                desc: 'Our efficient manufacturing process allows us to offer competitive wholesale pricing, ensuring excellent profit margins for our distribution partners while maintaining an attractive retail price.',
                color: 'from-brand-primary to-brand-primary-dark'
              },
              {
                icon: Handshake,
                title: 'Reliable Supply',
                desc: 'We understand the seasonal spikes in the stationery business. Our production capacity and inventory management guarantee consistent supply, especially during peak back-to-school seasons.',
                color: 'from-brand-accent to-amber-500'
              },
              {
                icon: Users,
                title: 'Marketing Support',
                desc: 'We provide our key distributors with promotional materials, product catalogs, and brand assets to help drive sales and establish market presence in their respective territories.',
                color: 'from-emerald-400 to-emerald-600'
              }
            ].map((feature, i) => (
              <motion.div 
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="glass-panel p-10 rounded-[2.5rem] flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-3xl flex items-center justify-center text-white mb-8 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                  <feature.icon className="w-10 h-10" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-4">{feature.title}</h3>
                <p className="text-text-secondary leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-primary text-center transition-colors duration-300 text-text-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Expand Your Portfolio with Samar</h2>
          <p className="text-xl opacity-80 mb-10 leading-relaxed">
            We are actively looking for established distributors in unrepresented territories. Join our network and grow with a brand that students trust.
          </p>
          <Link
            to="/contact"
            className="btn-primary"
          >
            Apply to Become a Distributor
          </Link>
        </div>
      </section>
    </div>
  );
}
