import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import Features from './sections/Features.jsx';
import BentoGrid from './sections/BentoGrid.jsx';
import Showreel from './sections/Showreel.jsx';
import Stats from './sections/Stats.jsx';
import Testimonials from './sections/Testimonials.jsx';
import Pricing from './sections/Pricing.jsx';
import CTA from './sections/CTA.jsx';
import Footer from './sections/Footer.jsx';

function App() {
  return (
    <main className="relative min-h-screen bg-[#050505] text-white overflow-x-hidden">
      {/* Background Layer with Purple Theme */}
      <div className="fixed inset-0 bg-grid-pattern z-0 opacity-40 pointer-events-none" />
      <div className="fixed top-[-10%] left-[-10%] w-[60%] h-[60%] bg-purple-primary/10 blur-[120px] rounded-full z-0 animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-secondary/10 blur-[120px] rounded-full z-0 animate-pulse" style={{ animationDuration: '6s' }} />
      
      <Navbar />
      <Hero />
      <Features />
      <BentoGrid />
      <Showreel />
      <Stats />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}

export default App;