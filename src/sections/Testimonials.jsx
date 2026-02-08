import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, GreenTech Solutions',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    rating: 5,
    text: 'Solaris IQ transformed our energy infrastructure. The AI-driven optimization increased our efficiency by 40% in just three months.',
  },
  {
    name: 'Michael Chen',
    role: 'Sustainability Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    rating: 5,
    text: 'The quantum security and real-time analytics are game-changers.'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Operations Manager',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    rating: 5,
    text: 'Outstanding support and cutting-edge technology. The neural tracking system alone paid for itself within weeks.',
  },
];

export default function Testimonials() {
  return (
    <section className="relative z-10 py-20 sm:py-32 px-4 sm:px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="text-purple-accent font-bold tracking-[0.3em] text-xs uppercase">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase mt-4">
            Trusted By <span className="text-purple-primary">Leaders</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              <div className="relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden h-full transition-all duration-500 hover:border-purple-primary/50 hover:shadow-2xl hover:shadow-purple-primary/10">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-purple-primary/20 group-hover:text-purple-primary/40 transition-colors">
                  <Quote size={48} />
                </div>

                {/* Purple Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Stars */}
                <div className="relative z-10 flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-purple-primary text-purple-primary" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="relative z-10 text-white/70 leading-relaxed mb-6 text-base">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="relative z-10 flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-purple-primary/30"
                  />
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-white/50">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}