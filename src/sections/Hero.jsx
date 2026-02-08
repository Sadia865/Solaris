import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'intelligence.';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 150);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative z-10 pt-24 sm:pt-28 md:pt-32 pb-20 sm:pb-32 md:pb-40 px-4 sm:px-6 text-center">
      {/* Animated Status Badge */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 mb-8 sm:mb-12 rounded-full border border-purple-primary/30 bg-purple-primary/5 backdrop-blur-2xl"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-primary"></span>
        </span>
        <span className="text-[9px] sm:text-[10px] font-black tracking-[0.3em] sm:tracking-[0.4em] uppercase text-purple-accent">
          Global Network: Active
        </span>
      </motion.div>

      {/* Main Heading with Fade-in Animation - SMALLER SIZE */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black tracking-tighter mb-6 sm:mb-10 leading-[0.85] sm:leading-[0.75] uppercase">
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="inline-block"
          >
            Solar
          </motion.span>
          <br />
          <span className="heading-serif text-purple-primary lowercase block mt-2 sm:mt-4">
            {typedText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-1 h-16 sm:h-24 md:h-32 lg:h-40 bg-purple-primary ml-2 align-middle"
            />
          </span>
        </h1>
      </motion.div>

      {/* Description with Staggered Fade */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="text-white/40 max-w-3xl mx-auto text-base sm:text-xl md:text-2xl font-medium leading-relaxed px-4"
      >
        Next-generation energy infrastructure designed for{' '}
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="text-purple-accent font-bold"
        >
          absolute autonomy
        </motion.span>{' '}
        and data-driven efficiency.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 3.5 }}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12 sm:mt-16"
      >
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(168, 85, 247, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          className="bg-purple-primary hover:bg-purple-secondary text-white px-8 py-4 rounded-full font-bold uppercase text-sm tracking-wider transition-all shadow-lg shadow-purple-primary/20"
        >
          Get Started
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="border-2 border-purple-primary/30 hover:border-purple-primary text-white px-8 py-4 rounded-full font-bold uppercase text-sm tracking-wider transition-all backdrop-blur-sm"
        >
          Learn More
        </motion.button>
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-primary rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              opacity: 0,
            }}
            animate={{
              y: [null, Math.random() * -100],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
}