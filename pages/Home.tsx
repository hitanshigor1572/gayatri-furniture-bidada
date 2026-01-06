
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Star, Clock, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import { PRODUCT_CATEGORIES, BUSINESS_INFO } from '../constants';

const features = [
  { title: "Premium Quality", icon: <Star className="text-amber-600" />, desc: "Highest grade materials for lasting durability." },
  { title: "Custom Designs", icon: <Heart className="text-amber-600" />, desc: "Tailored to your specific space and style needs." },
  { title: "Affordable Luxury", icon: <Clock className="text-amber-600" />, desc: "Premium comfort that fits your budget perfectly." },
  { title: "Trusted Store", icon: <CheckCircle2 className="text-amber-600" />, desc: "Proudly serving Bidada and Kutch for years." }
];

const Home: React.FC = () => {
  return (
    <div className="space-y-24 pb-24">
      <HeroSlider />

      {/* Featured Categories */}
      <section className="bg-stone-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif mb-4"
          >
            Explore Our Collections
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-stone-500 max-w-2xl mx-auto"
          >
            Discover a wide range of furniture categories designed to meet all your interior needs.
          </motion.p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-5 gap-6">
          {PRODUCT_CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link to="/products" className="group block bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all text-center border border-stone-100">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-stone-50 text-amber-800 mb-4 group-hover:bg-amber-800 group-hover:text-white transition-colors duration-500">
                  {cat.icon}
                </div>
                <h3 className="font-medium text-stone-800 group-hover:text-amber-800 transition-colors">{cat.name}</h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-white border border-stone-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center mb-6">
                {React.cloneElement(f.icon as React.ReactElement, { size: 24 })}
              </div>
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-900 rounded-[3rem] p-12 md:p-24 relative overflow-hidden text-center">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <img src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="texture" />
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">Ready to transform your home?</h2>
            <p className="text-stone-400 text-lg mb-12 max-w-2xl mx-auto italic font-light">
              Visit our showroom in Bidada to experience our collections in person.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/products" className="bg-amber-800 text-white px-10 py-5 rounded-full font-bold hover:bg-amber-900 transition-all flex items-center gap-2 group">
                View All Products
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link to="/contact" className="bg-white text-stone-900 px-10 py-5 rounded-full font-bold hover:bg-stone-200 transition-all">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
