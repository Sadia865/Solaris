import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative z-10 py-20 sm:py-32 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[3rem] p-12 sm:p-16 text-center"
        >
          {/* Purple Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-primary/20 via-purple-secondary/10 to-transparent" />
          <div className="absolute inset-0 backdrop-blur-xl bg-white/5 border border-purple-primary/30" />
          
          {/* Animated Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-purple-primary/30 rounded-full"
                initial={{
                  x: Math.random() * 100 + '%',
                  y: Math.random() * 100 + '%',
                }}
                animate={{
                  y: [null, Math.random() * -50 - 20],
                  opacity: [0.3, 0, 0.3],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Content */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-primary/10 border border-purple-primary/30 mb-6"
            >
              <Sparkles size={16} className="text-purple-accent" />
              <span className="text-xs font-bold tracking-wider uppercase text-purple-accent">
                Limited Time Offer
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase mb-6"
            >
              Ready to <span className="text-purple-primary">Transform</span><br />
              Your Energy Future?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto mb-10"
            >
              Join thousands of companies already using Solaris IQ to optimize their renewable energy infrastructure.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-purple-primary hover:bg-purple-secondary text-white px-10 py-5 rounded-full font-bold uppercase text-sm tracking-wider transition-all shadow-lg shadow-purple-primary/30 hover:shadow-purple-primary/50 flex items-center gap-3"
              >
                Start Free Trial
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-purple-primary/50 hover:border-purple-primary text-white px-10 py-5 rounded-full font-bold uppercase text-sm tracking-wider transition-all backdrop-blur-sm hover:bg-purple-primary/10"
              >
                Schedule Demo
              </motion.button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/40 text-sm"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-primary rounded-full" />
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-primary rounded-full" />
                <span>14-Day Free Trial</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-primary rounded-full" />
                <span>Cancel Anytime</span>
              </div>
            </motion.div>
          </div>

          {/* Corner Glow Effects */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-primary/20 blur-3xl rounded-full" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-secondary/20 blur-3xl rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}