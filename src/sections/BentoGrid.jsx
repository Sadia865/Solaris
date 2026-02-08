import { motion } from 'framer-motion';
import { Cpu, Zap, Globe, ShieldCheck } from 'lucide-react';

const cards = [
  { 
    title: "Neural Tracking", 
    desc: "AI-driven panel tilt adjustment for 24/7 optimal energy capture.", 
    icon: <Cpu size={24} />, 
    size: "md:col-span-2",
    accent: "from-purple-primary/20"
  },
  { 
    title: "98.2% Yield", 
    desc: "Photon loss minimized through quantum optimization.", 
    icon: <Zap size={24} />, 
    size: "md:col-span-1",
    accent: "from-purple-accent/20"
  },
  { 
    title: "Global Grid", 
    desc: "Instant energy routing across continents.", 
    icon: <Globe size={24} />, 
    size: "md:col-span-1",
    accent: "from-purple-secondary/20"
  },
  { 
    title: "Quantum Security", 
    desc: "Military-grade encryption for complete grid infrastructure protection.", 
    icon: <ShieldCheck size={24} />, 
    size: "md:col-span-2",
    accent: "from-purple-glow/20"
  }
];

export default function BentoGrid() {
  return (
    <section id="technology" className="py-12 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.6, 
              delay: i * 0.1,
              ease: [0.22, 1, 0.36, 1]
            }}
            whileHover={{ y: -8 }}
            className={`${card.size} relative group overflow-hidden rounded-3xl sm:rounded-[2.5rem] border border-white/10 bg-[#0A0A0A] p-6 sm:p-10 transition-all duration-500 hover:border-purple-primary/50 hover:shadow-2xl hover:shadow-purple-primary/10 cursor-pointer`}
          >
            {/* Gradient Glow on Hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${card.accent} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
            
            {/* Content */}
            <div className="relative z-10">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-purple-accent mb-6 sm:mb-8 inline-block p-3 sm:p-4 rounded-2xl bg-purple-primary/10 border border-purple-primary/20 backdrop-blur-sm"
              >
                {card.icon}
              </motion.div>
              
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tighter mb-3 sm:mb-4 uppercase leading-tight">
                {card.title}
              </h3>
              
              <p className="text-white/40 text-base sm:text-lg leading-relaxed font-medium">
                {card.desc}
              </p>
            </div>

            {/* Corner Accent */}
            <div className="absolute -bottom-10 -right-10 w-24 h-24 sm:w-32 sm:h-32 bg-purple-primary/10 blur-3xl rounded-full group-hover:scale-150 transition-transform duration-700" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}