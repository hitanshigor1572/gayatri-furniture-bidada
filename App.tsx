
import React from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Phone, Instagram, MessageCircle, MapPin, Mail } from 'lucide-react';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import { BUSINESS_INFO } from './constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold font-serif text-stone-800">Gaytri Furniture</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-amber-700 ${
                  location.pathname === link.path ? 'text-amber-800' : 'text-stone-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Contact CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="p-2 text-stone-600 hover:text-amber-800 transition-colors">
              <Phone size={20} />
            </a>
            <a href={BUSINESS_INFO.instagram} target="_blank" rel="noopener noreferrer" className="p-2 text-stone-600 hover:text-amber-800 transition-colors">
              <Instagram size={20} />
            </a>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-800 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-amber-900 transition-colors flex items-center gap-2"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-stone-800">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-stone-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-stone-700 hover:text-amber-800 hover:bg-stone-50 rounded-lg"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex items-center space-x-4 px-3">
                <a href={`tel:${BUSINESS_INFO.phone}`} className="flex items-center gap-2 text-stone-600">
                  <Phone size={20} />
                  <span>Call Now</span>
                </a>
                <a href={`https://wa.me/${BUSINESS_INFO.whatsapp}`} className="flex items-center gap-2 text-stone-600">
                  <MessageCircle size={20} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// Scroll viewport to top whenever the route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
};

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-serif text-white mb-4">Gaytri Furniture</h3>
            <p className="text-stone-400 mb-6 leading-relaxed">
              Serving Bidada & Kutch since years with premium quality furniture that combines style, comfort, and durability.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-amber-800 transition-colors">
                <Instagram size={20} />
              </a>
              <a href={`https://wa.me/${BUSINESS_INFO.whatsapp}`} className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-amber-800 transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Our Location</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-amber-500 shrink-0" size={20} />
                <span>{BUSINESS_INFO.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-amber-500 shrink-0" size={20} />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white transition-colors">{BUSINESS_INFO.phone}</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-amber-500 shrink-0" size={20} />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white transition-colors">{BUSINESS_INFO.email}</a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/" className="hover:text-amber-500 transition-colors">Home</Link>
              <Link to="/products" className="hover:text-amber-500 transition-colors">Products</Link>
              <Link to="/contact" className="hover:text-amber-500 transition-colors">Contact Us</Link>
              <a href="#" className="hover:text-amber-500 transition-colors">About Us</a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-800 text-center text-sm text-stone-500">
          <p>© {new Date().getFullYear()} Gaytri Furniture. All rights reserved. Best Furniture Shop in Kutch.</p>
        </div>
      </div>
    </footer>
  );
};

const FloatingWhatsApp = () => (
  <a
    href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-40 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center group"
  >
    <MessageCircle size={32} />
    <span className="absolute right-full mr-4 bg-white text-stone-800 px-4 py-2 rounded-lg text-sm font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden sm:block">
      Chat with us
    </span>
  </a>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <ScrollToTop />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </HashRouter>
  );
};

export default App;
