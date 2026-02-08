import { motion } from 'framer-motion';
import { Sparkles, Rocket, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: <Sparkles size={28} />,
    title: 'AI-Powered',
    description: 'Advanced machine learning algorithms optimize every aspect of energy capture and distribution.',
  },
  {
    icon: <Rocket size={28} />,
    title: 'Lightning Fast',
    description: 'Real-time processing and instant energy routing across our global network infrastructure.',
  },
  {
    icon: <Shield size={28} />,
    title: 'Secure & Safe',
    description: 'Military-grade encryption and quantum-resistant security protocols protect your data.',
  },
  {
    icon: <Zap size={28} />,
    title: 'Maximum Efficiency',
    description: '98.2% energy conversion rate with minimal photon loss and optimal power output.',
  },
];

export default function Features() {
  return (
    <section className="relative z-10 py-20 sm:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-24"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-purple-accent font-bold tracking-[0.3em] text-xs uppercase"
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase mt-4"
          >
            Cutting-Edge <span className="text-purple-primary">Technology</span>
          </motion.h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className="relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden h-full transition-all duration-500 hover:border-purple-primary/50 hover:shadow-2xl hover:shadow-purple-primary/10">
                {/* Purple Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="relative z-10 inline-flex p-4 rounded-2xl bg-purple-primary/10 border border-purple-primary/20 text-purple-accent mb-6"
                >
                  {feature.icon}
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold tracking-tight mb-3 uppercase">
                    {feature.title}
                  </h3>
                  <p className="text-white/50 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Corner Accent */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-purple-primary/10 blur-2xl rounded-full group-hover:scale-150 transition-transform duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}