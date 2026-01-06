// Added React import to resolve the React namespace for the icon property in the Feature interface
import React from 'react';

export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
}

export interface NavLink {
  label: string;
  path: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}