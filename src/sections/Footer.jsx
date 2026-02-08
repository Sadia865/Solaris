import { motion } from 'framer-motion';
import { Sun, Mail, MapPin, Phone, Twitter, Linkedin, Github, Instagram, Send } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert('Newsletter signup: ' + email);
    setEmail('');
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent from ${formData.name}!`);
    setFormData({ name: '', email: '', message: '' });
  };

  const footerLinks = {
    Product: ['Features', 'Pricing', 'Analytics', 'Reports'],
    Company: ['About Us', 'Careers', 'Press', 'Partners'],
    Resources: ['Blog', 'Documentation', 'Support', 'API'],
    Legal: ['Privacy', 'Terms', 'Security', 'Cookies']
  };

  const socialLinks = [
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
    { icon: <Github size={20} />, href: '#', label: 'GitHub' },
    { icon: <Instagram size={20} />, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="relative z-10 bg-[#0A0A0A] border-t border-purple-primary/10">
      
      {/* Beautiful Contact Section */}
      <div className="relative overflow-hidden border-b border-white/5">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-primary/10 via-transparent to-purple-secondary/10" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-primary/5 blur-[100px] rounded-full" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
            
            {/* Left Side - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-purple-accent font-bold tracking-[0.3em] text-xs uppercase">
                Get in Touch
              </span>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter uppercase mt-3 mb-4 leading-tight">
                Let's Talk <br />
                <span className="text-purple-primary">Solar Power</span>
              </h3>
              <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-8">
                Have a question about our solutions? Want to discuss a custom project? Our team is here to help you harness the power of intelligent solar energy.
              </p>

              {/* Contact Cards */}
              <div className="space-y-3">
                <motion.a
                  href="mailto:hello@solarisiq.com"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-primary/50 hover:bg-purple-primary/5 transition-all group"
                >
                  <div className="w-11 h-11 rounded-lg bg-purple-primary/10 border border-purple-primary/20 flex items-center justify-center group-hover:bg-purple-primary/20 transition-all flex-shrink-0">
                    <Mail size={18} className="text-purple-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/50 uppercase tracking-wider font-bold">Email Us</p>
                    <p className="text-white font-medium text-sm">hello@solarisiq.com</p>
                  </div>
                </motion.a>

                <motion.a
                  href="tel:+1234567890"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-primary/50 hover:bg-purple-primary/5 transition-all group"
                >
                  <div className="w-11 h-11 rounded-lg bg-purple-primary/10 border border-purple-primary/20 flex items-center justify-center group-hover:bg-purple-primary/20 transition-all flex-shrink-0">
                    <Phone size={18} className="text-purple-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/50 uppercase tracking-wider font-bold">Call Us</p>
                    <p className="text-white font-medium text-sm">+1 (234) 567-890</p>
                  </div>
                </motion.a>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-primary/50 hover:bg-purple-primary/5 transition-all group"
                >
                  <div className="w-11 h-11 rounded-lg bg-purple-primary/10 border border-purple-primary/20 flex items-center justify-center group-hover:bg-purple-primary/20 transition-all flex-shrink-0">
                    <MapPin size={18} className="text-purple-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/50 uppercase tracking-wider font-bold">Visit Us</p>
                    <p className="text-white font-medium text-sm">123 Solar Street<br />Tech Valley, CA 94000</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="sticky top-24">
                <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-purple-primary/20 backdrop-blur-xl shadow-2xl shadow-purple-primary/10">
                  <h4 className="text-xl sm:text-2xl font-black tracking-tighter uppercase mb-4">
                    Send a <span className="text-purple-primary">Message</span>
                  </h4>
                  
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div>
                      <label className="block text-[10px] text-white/50 uppercase tracking-wider font-bold mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                        className="w-full px-4 py-3 text-sm rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-purple-primary focus:bg-white/10 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] text-white/50 uppercase tracking-wider font-bold mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                        className="w-full px-4 py-3 text-sm rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-purple-primary focus:bg-white/10 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] text-white/50 uppercase tracking-wider font-bold mb-2">
                        Your Message
                      </label>
                      <textarea
                        placeholder="Tell us about your project..."
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        required
                        rows={4}
                        className="w-full px-4 py-3 text-sm rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-purple-primary focus:bg-white/10 transition-all resize-none"
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-purple-primary hover:bg-purple-secondary rounded-xl font-bold uppercase text-xs tracking-wider transition-all shadow-lg shadow-purple-primary/30 group"
                    >
                      <span>Send Message</span>
                      <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h3 className="text-3xl sm:text-4xl font-black tracking-tighter uppercase mb-4">
              Stay <span className="text-purple-primary">Connected</span>
            </h3>
            <p className="text-white/50 mb-8">
              Get the latest updates on solar innovation and exclusive offers
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-purple-primary transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-8 py-4 bg-purple-primary hover:bg-purple-secondary rounded-full font-bold uppercase text-sm tracking-wider transition-all shadow-lg shadow-purple-primary/20"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="col-span-2">
            <a href="/" className="flex items-center gap-2 mb-6">
              <Sun className="text-purple-primary w-8 h-8" />
              <span className="text-2xl font-black tracking-tighter uppercase">
                Solaris
              </span>
            </a>
            <p className="text-white/50 mb-6 leading-relaxed max-w-sm">
              Next-generation energy infrastructure designed for absolute autonomy and data-driven efficiency.
            </p>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-4 text-purple-accent">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/50 hover:text-purple-primary transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5">
          <p className="text-white/30 text-xs sm:text-sm tracking-wider">
            © 2026 Solaris IQ. All rights reserved.
          </p>
          
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-purple-primary hover:bg-purple-primary/10 flex items-center justify-center text-white/50 hover:text-purple-primary transition-all"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}