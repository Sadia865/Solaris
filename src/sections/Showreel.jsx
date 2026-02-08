import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useState } from 'react';

const REEL_URL = "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2070";

export default function Showreel() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="analytics" className="py-12 sm:py-24 px-4 sm:px-6 relative z-10">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="max-w-7xl mx-auto aspect-video rounded-3xl sm:rounded-[3rem] overflow-hidden border border-purple-primary/30 bg-white/5 relative group cursor-pointer shadow-2xl shadow-purple-primary/10"
      >
        {/* Background Image */}
        <motion.img 
          src={REEL_URL} 
          alt="Solar Infrastructure Showreel" 
          loading="lazy"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-primary/10 via-transparent to-purple-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative"
          >
            {/* Pulsing Ring */}
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-full bg-purple-primary"
            />
            
            {/* Main Button */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-purple-primary flex items-center justify-center shadow-[0_0_50px_rgba(168,85,247,0.4)] backdrop-blur-sm relative z-10 group-hover:bg-purple-secondary transition-colors">
              <Play fill="white" className="text-white ml-1 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            </div>
          </motion.div>
        </div>

        {/* Text Overlay */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="absolute bottom-6 sm:bottom-12 left-6 sm:left-12 right-6"
        >
          <p className="text-purple-accent font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[9px] sm:text-[10px] mb-1 sm:mb-2">
            Technical Overview
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter uppercase leading-none">
            The Future <br className="hidden sm:block" /> 
            <span className="sm:inline"> </span>of <span className="text-purple-primary">Autonomy</span>.
          </h2>
        </motion.div>

        {/* Top Right Stats Badge */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="absolute top-6 sm:top-12 right-6 sm:right-12 backdrop-blur-xl bg-purple-primary/10 border border-purple-primary/30 rounded-2xl sm:rounded-3xl px-4 sm:px-6 py-3 sm:py-4"
        >
          <p className="text-[9px] sm:text-[10px] text-purple-accent/70 font-bold tracking-[0.2em] uppercase mb-1">Duration</p>
          <p className="text-lg sm:text-2xl font-black text-purple-accent">2:47</p>
        </motion.div>

        {/* Bottom Shine Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.div>
    </section>
  );
}