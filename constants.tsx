
import React from 'react';
import { Sofa, Bed, Layout, Armchair, Home, Briefcase, Frame, Table2, Layers, Grid2X2 } from 'lucide-react';

export const BUSINESS_INFO = {
  name: "Gayatri Furniture",
  tagline: "Where Style & Comfort Meet",
  location: "Bidada, Gujarat",
  address: "opp. Sarvoday Hospital, Mandvi–Mundra Highway, Bidada, Gujarat – 370435",
  phone: "+91 8799570033",
  whatsapp: "918799570033",
  email: "gayatrifurniturebidada@gmail.com",
  instagram: "https://instagram.com/gayatri_furniture_bidada",
};

export const PRODUCT_CATEGORIES = [
  { name: "Sofa", icon: <Sofa size={20} /> },
  { name: "Bed", icon: <Bed size={20} /> },
  { name: "Wardrobe", icon: <Layout size={20} /> },
  { name: "Chair", icon: <Armchair size={20} /> },
  { name: "Office Furniture", icon: <Briefcase size={20} /> },
  { name: "Dining Table", icon: <Table2 size={20} /> },
  { name: "CNC Mandir", icon: <Frame size={20} /> },
  { name: "Home Decor", icon: <Home size={20} /> },
  { name: "Bedroom Sets", icon: <Layers size={20} /> },
  { name: "Furnishings", icon: <Grid2X2 size={20} /> },
];

export const ALL_PRODUCTS = [
  "Sofa", "Sofa Cum Bed", "Full Cushion Bed", "Head Cushion Bed", 
  "Wooden Beds", "Wardrobe", "Mattresses", "Office Furniture", 
  "Revolving Chair", "Modern Chair", "CNC Mandir", "Dining Table", 
  "PLB Bedroom Set", "Tipoi", "Curtains", "Sofa Covers", "Bedsheet Set"
].map((name, index) => ({
  id: `prod-${index}`,
  name: name,
  category: name.includes("Bed") ? "Bed" : 
            name.includes("Sofa") ? "Sofa" : 
            name.includes("Chair") ? "Chair" : "Others",
  image: `https://picsum.photos/seed/${name.replace(/\s+/g, '')}/800/600`,
  description: "Exquisitely crafted furniture designed for both comfort and elegance. Perfect for modern Indian homes."
}));
