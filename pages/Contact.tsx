
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, MessageCircle, Send } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formState, setFormState] = React.useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you ${formState.name}, we will get back to you shortly!`);
  };

  const contactMethods = [
    {
      icon: <Phone size={24} />,
      title: "Call Us",
      value: BUSINESS_INFO.phone,
      link: `tel:${BUSINESS_INFO.phone}`,
      desc: "Available Mon-Sat, 9AM-8PM"
    },
    {
      icon: <Mail size={24} />,
      title: "Email Us",
      value: BUSINESS_INFO.email,
      link: `mailto:${BUSINESS_INFO.email}`,
      desc: "Get a reply within 24 hours"
    },
    {
      icon: <MessageCircle size={24} />,
      title: "WhatsApp",
      value: "Chat with an Expert",
      link: `https://wa.me/${BUSINESS_INFO.whatsapp}`,
      desc: "Fastest way to get a quote"
    },
    {
      icon: <Instagram size={24} />,
      title: "Instagram",
      value: "@gayatri_furniture_bidada",
      link: BUSINESS_INFO.instagram,
      desc: "See our latest designs"
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 pb-24">
      {/* Header */}
      <div className="bg-stone-900 py-24 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif text-white mb-6"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-stone-400 max-w-2xl mx-auto"
          >
            Have questions about a specific piece or want a custom design? We're here to help you create your dream space.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Contact Details Cards */}
          <div className="lg:col-span-1 space-y-6">
            {contactMethods.map((method, i) => (
              <motion.a
                key={method.title}
                href={method.link}
                target={method.title !== 'Call Us' && method.title !== 'Email Us' ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center shrink-0 group-hover:bg-amber-800 group-hover:text-white transition-colors">
                  {method.icon}
                </div>
                <div>
                  <h3 className="font-bold text-stone-900">{method.title}</h3>
                  <p className="text-amber-800 font-medium text-sm mt-1">{method.value}</p>
                  <p className="text-stone-500 text-xs mt-1">{method.desc}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-stone-100"
          >
            <h2 className="text-3xl font-serif mb-8 text-stone-800">Send an Inquiry</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-stone-700">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Vatsal Rajgor"
                  className="w-full px-5 py-3.5 rounded-xl bg-stone-50 border-stone-200 focus:ring-2 focus:ring-amber-800 focus:bg-white outline-none transition-all"
                  value={formState.name}
                  onChange={e => setFormState({ ...formState, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-stone-700">Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 00000 00000"
                  className="w-full px-5 py-3.5 rounded-xl bg-stone-50 border-stone-200 focus:ring-2 focus:ring-amber-800 focus:bg-white outline-none transition-all"
                  value={formState.phone}
                  onChange={e => setFormState({ ...formState, phone: e.target.value })}
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-semibold text-stone-700">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  className="w-full px-5 py-3.5 rounded-xl bg-stone-50 border-stone-200 focus:ring-2 focus:ring-amber-800 focus:bg-white outline-none transition-all"
                  value={formState.email}
                  onChange={e => setFormState({ ...formState, email: e.target.value })}
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-semibold text-stone-700">Your Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us about the furniture you're interested in..."
                  className="w-full px-5 py-3.5 rounded-xl bg-stone-50 border-stone-200 focus:ring-2 focus:ring-amber-800 focus:bg-white outline-none transition-all resize-none"
                  value={formState.message}
                  onChange={e => setFormState({ ...formState, message: e.target.value })}
                />
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full md:w-auto bg-amber-800 text-white px-10 py-4 rounded-full font-bold hover:bg-amber-900 transition-all flex items-center justify-center gap-2 group"
                >
                  Send Inquiry
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-white p-4 rounded-3xl shadow-xl border border-stone-100 overflow-hidden h-[500px] relative">
          <div className="absolute top-8 left-8 z-10 bg-white p-6 rounded-2xl shadow-lg max-w-xs hidden md:block">
            <h3 className="font-serif text-xl mb-2">Our Showroom</h3>
            <p className="text-stone-500 text-sm leading-relaxed mb-4">
              {BUSINESS_INFO.address}
            </p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_INFO.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-800 font-bold text-sm flex items-center gap-1 hover:underline"
            >
              <MapPin size={16} />
              Open in Maps
            </a>
          </div>
          {/* Placeholder for map - in real world use Google Maps Iframe or SDK */}
          <div className="w-full h-full bg-stone-200 flex items-center justify-center">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.3805871305367!2d69.47129267508787!3d22.899329079260397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395131dcc049d93b%3A0x7484a3a9ccaac000!2sGayatri%20furniture!5e0!3m2!1sen!2sin!4v1767686099462!5m2!1sen!2sin"
              title="Location Map"
              className="w-full h-full grayscale contrast-125 opacity-70"
              allowfullscreen="" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </section>

      {/* SEO Footer Text */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center">
        <p className="text-stone-400 text-sm font-medium uppercase tracking-[0.2em]">
          Serving Bidada • Kutch • Mandvi • Mundra • Gujarat
        </p>
      </section>
    </div>
  );
};

export default Contact;
