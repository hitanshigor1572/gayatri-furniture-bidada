
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingBag } from 'lucide-react';
import { ALL_PRODUCTS } from '../constants';

const Products: React.FC = () => {
  const [filter, setFilter] = React.useState('All');
  const [search, setSearch] = React.useState('');

  const categories = ['All', 'Sofa', 'Bed', 'Chair', 'Others'];

  const filteredProducts = ALL_PRODUCTS.filter(p => {
    const matchesFilter = filter === 'All' || p.category === filter;
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-stone-50 pb-24">
      {/* Page Header */}
      <div className="bg-stone-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
           <img src="https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif mb-6"
          >
            Our Collections
          </motion.h1>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-stone-400 max-w-2xl mx-auto"
          >
            Explore our meticulously curated selection of furniture. From contemporary designs to classic pieces, find exactly what your home deserves.
          </motion.p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="sticky top-20 z-30 bg-white/90 backdrop-blur-md border-b border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row gap-6 justify-between items-center">
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  filter === cat 
                  ? 'bg-amber-800 text-white shadow-lg' 
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-2.5 rounded-full bg-stone-100 border-none focus:ring-2 focus:ring-amber-800 text-stone-700 text-sm"
            />
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="group bg-white rounded-3xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-white text-stone-900 px-6 py-3 rounded-full font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <ShoppingBag size={18} />
                      Inquire Now
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-amber-700 text-xs font-bold uppercase tracking-widest mb-2 block">{p.category}</span>
                  <h3 className="text-xl font-bold text-stone-800 mb-2 group-hover:text-amber-800 transition-colors">{p.name}</h3>
                  <p className="text-stone-500 text-sm line-clamp-2 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-24">
             <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-stone-100 text-stone-300 mb-6">
                <Search size={48} />
             </div>
             <h3 className="text-2xl font-serif text-stone-800">No products found</h3>
             <p className="text-stone-500 mt-2">Try adjusting your filter or search keywords.</p>
             <button 
                onClick={() => {setFilter('All'); setSearch('');}}
                className="mt-6 text-amber-800 font-bold hover:underline"
              >
                Clear all filters
              </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
