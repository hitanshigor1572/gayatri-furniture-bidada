
// import React from 'react';
// import { Sofa, Bed, Layout, Armchair, Home, Briefcase, Frame, Table2, Layers, Grid2X2 } from 'lucide-react';

// export const BUSINESS_INFO = {
//   name: "Gayatri Furniture",
//   tagline: "Where Style & Comfort Meet",
//   location: "Bidada, Gujarat",
//   address: "opp. Sarvoday Hospital, Mandvi–Mundra Highway, Bidada, Gujarat – 370435",
//   phone: "+91 8799570033",
//   whatsapp: "918799570033",
//   email: "gayatrifurniturebidada@gmail.com",
//   instagram: "https://instagram.com/gayatri_furniture_bidada",
// };

// export const PRODUCT_CATEGORIES = [
//   { name: "Sofa", icon: <Sofa size={20} /> },
//   { name: "Bed", icon: <Bed size={20} /> },
//   { name: "Wardrobe", icon: <Layout size={20} /> },
//   { name: "Chair", icon: <Armchair size={20} /> },
//   { name: "Office Furniture", icon: <Briefcase size={20} /> },
//   { name: "Dining Table", icon: <Table2 size={20} /> },
//   { name: "CNC Mandir", icon: <Frame size={20} /> },
//   { name: "Home Decor", icon: <Home size={20} /> },
//   { name: "Bedroom Sets", icon: <Layers size={20} /> },
//   { name: "Furnishings", icon: <Grid2X2 size={20} /> },
// ];

// export const CATALOG = {
//   "Living Room": {
//     "Sofa": ["L Shape Sofa", "L Shape Long", "Sofa Cum Bed", "3+2 Seater"],
//     "Tipoi": ["Modern Tipoi", "Wooden Tipoi"],
//     "TV Units": ["PLB TV Unit", "Wall Mounted TV Unit"],
//     "Modern Chairs": ["Accent Chair", "Lounge Chair"],
//     "Curtains": ["Premium Curtains", "Simple Curtains"]
//   },
//   "Bedroom": {
//     "Beds": ["Wooden Beds", "Head Cushion Bed", "Full Cushion Bed"],
//     "Wardrobe": ["2 Door Wardrobe", "3 Door Wardrobe", "Sliding Wardrobe"]
//   },
//   "Dining": {
//     "Dining Tables": ["4 Seater", "6 Seater", "8 Seater"],
//     "Dining Chairs": ["Modern Dining Chair", "Wooden Dining Chair"]
//   },
//   "Office Furniture": {
//     "Office Chairs": ["Revolving Chair", "Executive Chair"],
//     "Office Tables": ["Manager Table", "Workstation Table"],
//     "Office Storage": ["Office Cabinet"],
//     "Reception": ["Reception Desk"]
//   },
//   "Mandir": {
//     "CNC Mandir": ["Wall CNC Mandir", "Floor CNC Mandir"],
//     "Wooden Mandir": ["Small Wooden Mandir", "Big Wooden Mandir"]
//   }
// };

// // Define the explicit images for L Shape Sofa based on the uploaded files
// const L_SHAPE_SOFA_IMAGES = [
//   "/images/products/l-shape-sofa/media__1772111516645.png",
//   "/images/products/l-shape-sofa/media__1772111516666.png",
//   "/images/products/l-shape-sofa/media__1772111516723.png",
//   "/images/products/l-shape-sofa/media__1772111516742.png",
//   "/images/products/l-shape-sofa/media__1772111532132.png",
//   "/images/products/l-shape-sofa/media__1772111593290.png",
//   "/images/products/l-shape-sofa/media__1772111593312.png",
//   "/images/products/l-shape-sofa/media__1772111593339.png",
//   "/images/products/l-shape-sofa/media__1772111593354.png",
//   "/images/products/l-shape-sofa/media__1772111593422.png",
//   "/images/products/l-shape-sofa/media__1772111605309.png",
//   "/images/products/l-shape-sofa/media__1772111605366.png"
// ];

// // Define explicitly the images for Sofa Cum Bed based on uploaded files
// const SOFA_CUM_BED_IMAGES = [
// "/images/products/sofa-cum-bed/image1.png",
// "/images/products/sofa-cum-bed/image2.png",
// "/images/products/sofa-cum-bed/image3.png",
// "/images/products/sofa-cum-bed/image4.png",
// "/images/products/sofa-cum-bed/image5.png",
// "/images/products/sofa-cum-bed/image6.png",
// "/images/products/sofa-cum-bed/image7.png",
// "/images/products/sofa-cum-bed/image8.png"
// ];


// export const generateProductsForFinalSubcategory = (mainCat: string, subCat: string, finalSubCat: string) => {
//   let itemLength = 8;
//   if (finalSubCat === "L Shape Sofa") itemLength = L_SHAPE_SOFA_IMAGES.length;
//   if (finalSubCat === "Sofa Cum Bed") itemLength = SOFA_CUM_BED_IMAGES.length;

//   return Array.from({ length: itemLength }).map((_, idx) => {

//     // Explicitly handle "L Shape Sofa" and "Sofa Cum Bed" real images
//     let imageUrl = `https://picsum.photos/seed/${finalSubCat.replace(/\s+/g, '')}${idx}/800/600`;

//     if (finalSubCat === "L Shape Sofa" && idx < L_SHAPE_SOFA_IMAGES.length) {
//       imageUrl = L_SHAPE_SOFA_IMAGES[idx];
//     } else if (finalSubCat === "Sofa Cum Bed" && idx < SOFA_CUM_BED_IMAGES.length) {
//       imageUrl = SOFA_CUM_BED_IMAGES[idx];
//     }

//     return {
//       id: `${mainCat.substring(0, 3)}-${subCat.substring(0, 3)}-${finalSubCat.replace(/\s+/g, '')}-${idx}`,
//       name: `${finalSubCat} Model ${idx + 1}`,
//       mainCategory: mainCat,
//       subCategory: subCat,
//       finalSubCategory: finalSubCat,
//       image: imageUrl,
//       description: `Premium ${finalSubCat.toLowerCase()} from our exclusive ${mainCat} collection. Designed for ultimate comfort and elegance.`
//     };
//   });
// };

// // Generate flattened ALL_PRODUCTS for legacy components (like Home.tsx if it uses it, though it doesn't currently)
// export const ALL_PRODUCTS = Object.entries(CATALOG).flatMap(([mainCat, subCats]) =>
//   Object.entries(subCats).flatMap(([subCat, finalSubCats]) =>
//     finalSubCats.flatMap(finalSubCat =>
//       generateProductsForFinalSubcategory(mainCat, subCat, finalSubCat)
//     )
//   )
// );

import React from "react";
import { Sofa, Bed, Layout, Armchair, Home, Briefcase, Frame, Table2, Layers, Grid2X2 } from "lucide-react";


// ============================
// BUSINESS INFO
// ============================

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


// ============================
// PRODUCT CATEGORIES (Sidebar / Navbar)
// ============================

export const PRODUCT_CATEGORIES = [
  { name: "Sofa", icon: <Sofa size={20} /> },
  { name: "Beds", icon: <Bed size={20} /> },
  { name: "Wardrobe", icon: <Layout size={20} /> },
  { name: "Dining", icon: <Table2 size={20} /> },
  { name: "Office Furniture", icon: <Briefcase size={20} /> },
  { name: "Mandir", icon: <Frame size={20} /> }
];


// ============================
// CATALOG STRUCTURE
// ============================

export const CATALOG: Record<string, any> = {
  "Living Room": {
    Sofa: ["L Shape Sofa", "Sofa Cum Bed", "3+2 Seater"],
    Tipoi: ["Tipoi"],
    "TV Units": ["TV Units"],
    "Modern Chairs": ["Modern Chairs"]
  },

  Bedroom: {
    Beds: ["Wooden Beds", "Head Cushion Bed", "Full Cushion Bed"],
    Wardrobe: ["Wardrobe"]
  },

  Dining: {
    Dining: ["Dining"]
  },

  "Office Furniture": {
    "Office Chairs": ["Office Chairs"],
    "Office Tables": ["Office Tables"]
  },

  Mandir: {
    Mandir: ["Mandir"]
  }
};


// ============================
// IMAGE ARRAYS
// (Replace image URLs yourself)
// ============================

// Living Room → Sofa

const L_SHAPE_SOFA_IMAGES = [
  "/images/products/l-shape-sofa/media__1772111516644.png",
  "/images/products/l-shape-sofa/media__1772111516645.png",
  "/images/products/l-shape-sofa/media__1772111516666.png",
  "/images/products/l-shape-sofa/media__1772111516723.png",
  "/images/products/l-shape-sofa/media__1772111516742.png",
  "/images/products/l-shape-sofa/media__1772111532132.png",
  "/images/products/l-shape-sofa/media__1772111593290.png",
  "/images/products/l-shape-sofa/media__1772111593312.png",
  "/images/products/l-shape-sofa/media__1772111593339.png",
  "/images/products/l-shape-sofa/media__1772111593354.png",
  "/images/products/l-shape-sofa/media__1772111593422.png",
  "/images/products/l-shape-sofa/media__1772111605366.png"
];

const SOFA_CUM_BED_IMAGES = [
  "/images/products/sofa-cum-bed/image1.png",
  "/images/products/sofa-cum-bed/image2.png",
  "/images/products/sofa-cum-bed/image3.png",
  "/images/products/sofa-cum-bed/image4.png",
  "/images/products/sofa-cum-bed/image5.png",
  "/images/products/sofa-cum-bed/image6.png",
  "/images/products/sofa-cum-bed/image7.png",
  "/images/products/sofa-cum-bed/image8.png"
];

const THREE_PLUS_TWO_SEATER_IMAGES = [
  "/images/products/3plus2/3plus2_1.png",
  "/images/products/3plus2/3plus2_2.png",
  "/images/products/3plus2/3plus2_3.png",
  "/images/products/3plus2/3plus2_4.png",
  "/images/products/3plus2/3plus2_5.png",
  "/images/products/3plus2/3plus2_6.png",
]
// Bedroom → Beds

const WOODEN_BEDS_IMAGES = [
  "/images/products/wooden-beds/wb1.png",
  "/images/products/wooden-beds/wb2.png",
  "/images/products/wooden-beds/wb3.png",
  "/images/products/wooden-beds/wb4.png",
  "/images/products/wooden-beds/wb5.png",
];

const HEAD_CUSHION_BED_IMAGES = [
  "/images/products/head-cushion-bed/hc1.png",
  "/images/products/head-cushion-bed/hc2.png",
  "/images/products/head-cushion-bed/hc3.png",
  "/images/products/head-cushion-bed/hc4.png",
  "/images/products/head-cushion-bed/hc5.png",
  "/images/products/head-cushion-bed/hc6.png"
];

const FULL_CUSHION_BED_IMAGES = [
  "/images/products/fullcushionbed/fc1.png",
  "/images/products/fullcushionbed/fc2.png",
  "/images/products/fullcushionbed/fc3.png",
  "/images/products/fullcushionbed/fc4.png",
  "/images/products/fullcushionbed/fc5.png"
];

const TIPOI_IMAGES = [
  "/images/products/Tipoi/T1.png",
  "/images/products/Tipoi/T2.png",
  "/images/products/Tipoi/T3.png",
  "/images/products/Tipoi/T4.png",
  "/images/products/Tipoi/T5.png",
];

const TV_UNITS_IMAGES = [
  "/images/products/TVUNITS/TV1.png",
  "/images/products/TVUNITS/TV2.png",
  "/images/products/TVUNITS/TV3.png",
];

const MODERN_CHAIRS_IMAGES = [
  "/images/products/modernchairs/M1.png",
  "/images/products/modernchairs/M2.png",
  "/images/products/modernchairs/M3.png",
  "/images/products/modernchairs/M4.png",
];
// Bedroom → Wardrobe (4 assumed)

const WARDROBE_IMAGES = [
  "/images/wardrobe/1.png",
  "/images/wardrobe/2.png",
  "/images/wardrobe/3.png",
  "/images/wardrobe/4.png"
];

// Dining (6)

const DINING_IMAGES = [
  "/images/products/Dining/D1.png",
  "/images/products/Dining/D2.png",
  "/images/products/Dining/D3.png",
  "/images/products/Dining/D4.png"
];

// Office Furniture

const OFFICE_CHAIRS_IMAGES = [
  "/images/products/officechairs/oc1.png",
  "/images/products/officechairs/oc2.png",
  "/images/products/officechairs/oc3.png",
  "/images/products/officechairs/oc4.png"
];

const OFFICE_TABLES_IMAGES = [
  "/images/products/officetable/oc1.png",
  "/images/products/officetable/oc2.png",
  "/images/products/officetable/oc3.png",
  "/images/products/officetable/oc4.png"
];


// Mandir (8)

const MANDIR_IMAGES = [
  "/images/products/Mandir/M1.png",
  "/images/products/Mandir/M2.png",
  "/images/products/Mandir/M3.png",
  "/images/products/Mandir/M4.png",
  "/images/products/Mandir/M5.png",
  "/images/products/Mandir/M6.png"
];


// ============================
// PRODUCT GENERATOR FUNCTION
// ============================

export const generateProductsForFinalSubcategory = (
  mainCat: string,
  subCat: string,
  finalSubCat: string
) => {

  let images: string[] = [];

  switch (finalSubCat) {
    case "L Shape Sofa":
      images = L_SHAPE_SOFA_IMAGES;
      break;
    case "Sofa Cum Bed":
      images = SOFA_CUM_BED_IMAGES;
      break;
    case "3+2 Seater":
      images = THREE_PLUS_TWO_SEATER_IMAGES;
      break;
    case "Tipoi":
      images = TIPOI_IMAGES;
      break;
    case "TV Units":
      images = TV_UNITS_IMAGES;
      break;
    case "Modern Chairs":
      images = MODERN_CHAIRS_IMAGES;
      break;
    case "Wooden Beds":
      images = WOODEN_BEDS_IMAGES;
      break;
    case "Head Cushion Bed":
      images = HEAD_CUSHION_BED_IMAGES;
      break;
    case "Full Cushion Bed":
      images = FULL_CUSHION_BED_IMAGES;
      break;
    case "Wardrobe":
      images = WARDROBE_IMAGES;
      break;
    case "Dining":
      images = DINING_IMAGES;
      break;
    case "Office Chairs":
      images = OFFICE_CHAIRS_IMAGES;
      break;
    case "Office Tables":
      images = OFFICE_TABLES_IMAGES;
      break;
    case "Mandir":
      images = MANDIR_IMAGES;
      break;
    default:
      images = [];
  }

  return images.map((imageUrl, idx) => ({
    id: `${mainCat.substring(0, 3)}-${subCat.substring(0, 3)}-${finalSubCat.replace(/\s+/g, "")}-${idx}`,
    name: `${finalSubCat} Model ${idx + 1}`,
    mainCategory: mainCat,
    subCategory: subCat,
    finalSubCategory: finalSubCat,
    image: imageUrl,
    description: `Premium ${finalSubCat.toLowerCase()} from our exclusive ${mainCat} collection. Designed for ultimate comfort and elegance.`
  }));
};


// ============================
// ALL PRODUCTS
// ============================

export const ALL_PRODUCTS = Object.entries(CATALOG).flatMap(
  ([mainCat, subCats]) =>
    (Object.entries(subCats) as [string, string[]][]).flatMap(([subCat, finalSubCats]) =>
      finalSubCats.flatMap((finalSubCat: string) =>
        generateProductsForFinalSubcategory(mainCat, subCat, finalSubCat)
      )
    )
);

