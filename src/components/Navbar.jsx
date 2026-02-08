import { motion } from 'framer-motion';
import { Sun, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Clean, professional navigation links
  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Features', href: '#features' },
    { label: 'Technology', href: '#technology' },
    { label: 'Analytics', href: '#analytics' },
    { label: 'Impact', href: '#impact' },
    { label: 'Pricing', href: '#pricing' },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 w-full z-[100] px-4 sm:px-6 py-4 sm:py-8 pointer-events-none"
      >
        <div className="max-w-7xl mx-auto backdrop-blur-xl bg-white/5 border border-purple-primary/20 rounded-full px-4 sm:px-8 py-3 sm:py-4 flex justify-between items-center pointer-events-auto shadow-2xl shadow-purple-primary/10">
          
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 font-black tracking-tighter text-lg sm:text-xl uppercase transition-transform hover:scale-105">
            <Sun className="text-purple-primary w-5 h-5 sm:w-6 sm:h-6" />
            <span className="hidden xs:inline bg-gradient-to-r from-white to-purple-accent bg-clip-text text-transparent">Solaris</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 lg:gap-10 text-[10px] uppercase tracking-[0.3em] font-bold text-white/50">
            {navLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href} 
                className="hover:text-purple-accent transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-purple-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <button className="hidden sm:block bg-purple-primary text-white text-[10px] font-black px-4 sm:px-6 py-2 sm:py-2.5 rounded-full uppercase hover:bg-purple-secondary transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-purple-primary/20">
            Get Started
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 hover:text-purple-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: isMenuOpen ? 1 : 0,
          y: isMenuOpen ? 0 : -20,
          pointerEvents: isMenuOpen ? 'auto' : 'none'
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-20 sm:top-24 left-4 right-4 z-[99] md:hidden"
      >
        <div className="backdrop-blur-xl bg-[#0A0A0A]/95 border border-purple-primary/20 rounded-3xl p-6 shadow-2xl shadow-purple-primary/20">
          <div className="flex flex-col gap-3 sm:gap-4">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
                transition={{ delay: index * 0.05 }}
                className="text-white/70 hover:text-purple-accent font-bold tracking-[0.2em] uppercase text-sm py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
              transition={{ delay: 0.3 }}
              className="bg-purple-primary text-white text-xs font-black px-6 py-3 rounded-full uppercase hover:bg-purple-secondary transition-all mt-2"
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </motion.div>
    </>
  );
}