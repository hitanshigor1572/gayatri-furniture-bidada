
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BUSINESS_INFO } from '../constants';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=2000",
    title: "Timeless Elegance",
    subtitle: "Modern sofas for your living room."
  },
  {
    image: "https://images.unsplash.com/photo-1505693419148-de397e52d92d?auto=format&fit=crop&q=80&w=2000",
    title: "Dreamy Comfort",
    subtitle: "Custom-made beds for a perfect sleep."
  },
  {
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000",
    title: "Organized Living",
    subtitle: "Spacious wardrobes designed for you."
  }
];

const HeroSlider: React.FC = () => {
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[600px] md:h-[800px] w-full overflow-hidden bg-stone-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-amber-400 font-medium tracking-[0.3em] uppercase text-sm mb-4"
        >
          {BUSINESS_INFO.tagline}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-8xl font-serif text-white mb-6"
        >
          {BUSINESS_INFO.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-xl text-stone-200 mb-12 max-w-2xl font-light italic"
        >
          "Where style and comfort meet."
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="px-10 py-4 bg-amber-800 text-white rounded-full font-medium hover:bg-amber-900 transition-all hover:scale-105 active:scale-95"
          >
            Call Now
          </a>
          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
            className="px-10 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-medium hover:bg-white/20 transition-all hover:scale-105 active:scale-95"
          >
            WhatsApp Us
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              current === i ? 'w-8 bg-amber-400' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
