import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingBag, X } from 'lucide-react';
import { CATALOG, ALL_PRODUCTS, generateProductsForFinalSubcategory } from '../constants';

const Products: React.FC = () => {
  const [activeMainCategory, setActiveMainCategory] = React.useState('All');
  const [activeSubCategory, setActiveSubCategory] = React.useState('All');
  const [search, setSearch] = React.useState('');
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  const mainCategories = ['All', ...Object.keys(CATALOG)];

  // Get subcategories based on active main category
  const subCategories = useMemo(() => {
    if (activeMainCategory === 'All') return [];
    return ['All', ...Object.keys(CATALOG[activeMainCategory as keyof typeof CATALOG] || {})];
  }, [activeMainCategory]);

  // Reset subcategory when main category changes
  React.useEffect(() => {
    setActiveSubCategory('All');
  }, [activeMainCategory]);

  // Determine what products to show
  const displayData = useMemo(() => {
    if (activeMainCategory === 'All') {
      // Show everything filtered by search
      return [{
        title: 'All Products',
        products: ALL_PRODUCTS.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
      }].filter(group => group.products.length > 0);
    }

    const mainCatData = CATALOG[activeMainCategory as keyof typeof CATALOG];
    let sectionsToShow = [];

    if (activeSubCategory === 'All') {
      // Show all final subcategories for the main category
      (Object.entries(mainCatData) as [string, string[]][]).forEach(([subCat, finalSubCats]) => {
        finalSubCats.forEach(finalSubCat => {
          sectionsToShow.push({
            title: finalSubCat,
            products: generateProductsForFinalSubcategory(activeMainCategory, subCat, finalSubCat)
          });
        });
      });
    } else {
      // Show only final subcategories for the selected subcategory
      const finalSubCats = (mainCatData[activeSubCategory as keyof typeof mainCatData] || []) as string[];
      finalSubCats.forEach((finalSubCat: string) => {
        sectionsToShow.push({
          title: finalSubCat,
          products: generateProductsForFinalSubcategory(activeMainCategory, activeSubCategory, finalSubCat)
        });
      });
    }

    // Filter by search if applied
    if (search) {
      sectionsToShow = sectionsToShow.map(section => ({
        ...section,
        products: section.products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
      })).filter(section => section.products.length > 0);
    }

    return sectionsToShow;
  }, [activeMainCategory, activeSubCategory, search]);

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
            {/* Main Categories */}
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar w-full md:w-auto">
              {mainCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveMainCategory(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${activeMainCategory === cat
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

          {/* Sub Categories (Pill-style) */}
          <AnimatePresence>
            {activeMainCategory !== 'All' && subCategories.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: 'auto', marginTop: 8 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                className="flex gap-2 overflow-x-auto pb-2 no-scrollbar border-t border-stone-100 pt-3"
              >
                {subCategories.map((sub) => (
                  <button
                    key={sub}
                    onClick={() => setActiveSubCategory(sub)}
                    className={`px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ease-in-out whitespace-nowrap border ${activeSubCategory === sub
                      ? 'bg-amber-800 text-white border-amber-800 shadow-sm'
                      : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-50'
                      }`}
                  >
                    {sub}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Product Display Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {displayData.length > 0 ? (
          displayData.map((section, idx) => (
            <div key={section.title} className="mb-16">
              {activeMainCategory !== 'All' && (
                <h3 className="text-2xl font-serif text-stone-800 mb-8 pb-2 border-b border-stone-200 inline-block">
                  {section.title}
                </h3>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {section.products.map((p, i) => (
                  <motion.div
                    key={p.id}
                    layout="position"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="group bg-white rounded-3xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer"
                    onClick={() => setSelectedImage(p.image)}
                  >
                    <div className="aspect-[4/5] relative overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="bg-white text-stone-900 hover:bg-stone-100 px-6 py-3 rounded-full font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                          <Search size={18} />
                          View Full Screen
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-24">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-stone-100 text-stone-300 mb-6">
              <Search size={48} />
            </div>
            <h3 className="text-2xl font-serif text-stone-800">No products found</h3>
            <p className="text-stone-500 mt-2">Try adjusting your filter or search keywords.</p>
            <button
              onClick={() => { setActiveMainCategory('All'); setSearch(''); }}
              className="mt-6 text-amber-800 font-bold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {/* Full Screen Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 sm:top-8 sm:right-8 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all z-10"
            >
              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              src={selectedImage}
              alt="Fullscreen product"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Products;
