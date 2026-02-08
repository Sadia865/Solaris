import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';

const statsData = [
  { label: "Cell Efficiency", value: "24.8%", numericValue: 24.8, suffix: "%", color: "text-purple-primary" },
  { label: "Active Nodes", value: "1.2K+", numericValue: 1.2, suffix: "K+", color: "text-purple-accent" },
  { label: "Metric Tons CO₂", value: "42M", numericValue: 42, suffix: "M", color: "text-purple-primary" },
];

function AnimatedCounter({ value, suffix }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        const formatted = latest.toFixed(1);
        ref.current.textContent = formatted + suffix;
      }
    });
    return () => unsubscribe();
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function Stats() {
  return (
    <section id="impact" className="py-16 sm:py-32 px-4 sm:px-6 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-20"
        >
          <p className="text-purple-accent font-bold tracking-[0.3em] text-[10px] uppercase mb-3">
            Global Impact
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter uppercase">
            By The <span className="text-purple-primary">Numbers</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16">
          {statsData.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                delay: index * 0.2,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="flex flex-col gap-4 md:border-l md:border-purple-primary/20 md:pl-8 lg:pl-12 first:border-none relative group"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-primary/0 via-purple-primary/5 to-purple-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              
              <div className="relative z-10">
                {/* Label */}
                <span className="text-white/40 font-bold tracking-[0.25em] sm:tracking-[0.3em] text-[9px] sm:text-[10px] uppercase block mb-4">
                  {stat.label}
                </span>
                
                {/* Animated Value */}
                <h3 className={`text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter heading-serif ${stat.color} transition-all duration-300 group-hover:scale-105`}>
                  <AnimatedCounter value={stat.numericValue} suffix={stat.suffix} />
                </h3>
                
                {/* Decorative Line */}
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.4, duration: 0.6 }}
                  className="h-px bg-gradient-to-r from-purple-primary/50 to-transparent mt-6"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16 sm:mt-24"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(168, 85, 247, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-primary/10 border border-purple-primary/30 text-white text-xs sm:text-sm font-bold px-8 sm:px-10 py-3 sm:py-4 rounded-full uppercase hover:bg-purple-primary hover:border-purple-primary transition-all duration-300 backdrop-blur-xl"
          >
            View Full Analytics
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}