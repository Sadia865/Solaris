import { motion } from 'framer-motion';
import { Check, Zap, Star, Crown } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Starter',
    icon: <Zap size={24} />,
    price: '99',
    period: 'month',
    description: 'Perfect for small installations',
    features: [
      'Up to 10 solar panels',
      'Basic AI tracking',
      'Monthly reports',
      'Email support',
      'Mobile app access',
      '99.1% efficiency'
    ],
    highlighted: false,
    color: 'purple-accent'
  },
  {
    name: 'Professional',
    icon: <Star size={24} />,
    price: '299',
    period: 'month',
    description: 'Most popular for businesses',
    features: [
      'Up to 100 solar panels',
      'Neural AI tracking',
      'Real-time analytics',
      'Priority support 24/7',
      'Advanced mobile features',
      '99.5% efficiency',
      'Quantum security',
      'Custom integrations'
    ],
    highlighted: true,
    color: 'purple-primary',
    badge: 'Most Popular'
  },
  {
    name: 'Enterprise',
    icon: <Crown size={24} />,
    price: 'Custom',
    period: '',
    description: 'For large-scale operations',
    features: [
      'Unlimited solar panels',
      'Advanced neural tracking',
      'Predictive analytics',
      'Dedicated account manager',
      'White-label solutions',
      '99.9% efficiency guarantee',
      'Military-grade security',
      'API access',
      'Custom development'
    ],
    highlighted: false,
    color: 'purple-secondary'
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative z-10 py-20 sm:py-32 px-4 sm:px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="text-purple-accent font-bold tracking-[0.3em] text-xs uppercase">
            Pricing Plans
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase mt-4">
            Choose Your <span className="text-purple-primary">Power</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto mt-6 text-lg">
            Flexible plans designed to scale with your energy needs
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: plan.highlighted ? 1.02 : 1.05 }}
              className={`relative group ${plan.highlighted ? 'md:-mt-4 md:mb-0' : ''}`}
            >
              {/* Popular Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div className="bg-purple-primary text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg shadow-purple-primary/50">
                    {plan.badge}
                  </div>
                </div>
              )}

              <div className={`relative p-8 rounded-3xl backdrop-blur-sm overflow-hidden h-full transition-all duration-500 ${
                plan.highlighted 
                  ? 'bg-purple-primary/10 border-2 border-purple-primary shadow-2xl shadow-purple-primary/20' 
                  : 'bg-white/5 border border-white/10 hover:border-purple-primary/50'
              }`}>
                
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${plan.color}/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className="relative z-10 mb-6">
                  <div className={`inline-flex p-4 rounded-2xl bg-${plan.color}/10 border border-${plan.color}/20 text-${plan.color}`}>
                    {plan.icon}
                  </div>
                </div>

                {/* Plan Name */}
                <div className="relative z-10 mb-4">
                  <h3 className="text-2xl font-black uppercase tracking-tight">
                    {plan.name}
                  </h3>
                  <p className="text-white/50 text-sm mt-2">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="relative z-10 mb-8">
                  {plan.price === 'Custom' ? (
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-black text-purple-primary">
                        Custom
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-baseline gap-2">
                      <span className="text-white/50 text-2xl font-bold">$</span>
                      <span className="text-5xl font-black text-white">
                        {plan.price}
                      </span>
                      <span className="text-white/50">/{plan.period}</span>
                    </div>
                  )}
                </div>

                {/* Features */}
                <ul className="relative z-10 space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check size={20} className={`text-${plan.color} flex-shrink-0 mt-0.5`} />
                      <span className="text-white/70 text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative z-10 w-full py-4 rounded-full font-bold uppercase text-sm tracking-wider transition-all ${
                    plan.highlighted
                      ? 'bg-purple-primary hover:bg-purple-secondary text-white shadow-lg shadow-purple-primary/30'
                      : 'bg-white/5 border border-white/10 hover:border-purple-primary hover:bg-purple-primary/10 text-white'
                  }`}
                >
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                </motion.button>

                {/* Corner Glow */}
                <div className={`absolute -bottom-10 -right-10 w-40 h-40 bg-${plan.color}/10 blur-3xl rounded-full`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16 flex flex-wrap justify-center items-center gap-8 text-white/40 text-sm"
        >
          <div className="flex items-center gap-2">
            <Check size={16} className="text-purple-primary" />
            <span>30-day money-back guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <Check size={16} className="text-purple-primary" />
            <span>No setup fees</span>
          </div>
          <div className="flex items-center gap-2">
            <Check size={16} className="text-purple-primary" />
            <span>Cancel anytime</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}