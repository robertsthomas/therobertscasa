import React from 'react';
import { motion } from 'framer-motion';
import { brands } from '../data/brands';

interface BrandsSectionProps {
  onContactClick: () => void;
}

const BrandsSection: React.FC<BrandsSectionProps> = ({ onContactClick }) => {
  // Filter brands to only include the ones we have videos for
  const featuredBrands = brands.filter(brand => 
    ['Shark', 'Pampers', 'Palmolive', 'Dove', 'Charmin'].includes(brand.name)
  );
  
  // Add Oreo manually since it might not be in the brands data
  const oreo = {
    id: 'oreo',
    name: 'Oreo',
    logoUrl: 'https://logo.clearbit.com/oreo.com',
    industry: 'Food & Beverage'
  };
  
  // Create final list with Oreo included
  const displayBrands = [...featuredBrands];
  if (!featuredBrands.find(b => b.name === 'Oreo')) {
    displayBrands.push(oreo);
  }

  return (
    <div className="h-full w-full bg-beige-50 flex items-center justify-center">
      <div className="w-full max-w-4xl px-6 py-12">
        <motion.h2
          className="text-3xl font-serif font-semibold mb-8 text-center text-dark-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Brands I've Worked With
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-2xl mx-auto">
          {displayBrands.map((brand, index) => (
            <motion.div
              key={brand.id}
              className="bg-white p-4 rounded-lg flex flex-col items-center justify-center shadow-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.9)' }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="h-12 w-24 bg-white rounded-lg p-2 flex items-center justify-center mb-2 border border-beige-200">
                <img 
                  src={brand.logoUrl} 
                  alt={brand.name} 
                  className="max-h-full max-w-full object-contain" 
                  onError={(e) => {
                    // Fallback to text if image fails to load
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement?.classList.add('flex');
                    e.currentTarget.parentElement?.classList.add('items-center');
                    e.currentTarget.parentElement?.classList.add('justify-center');
                    const textNode = document.createElement('span');
                    textNode.textContent = brand.name;
                    textNode.className = 'text-xs font-bold text-dark-900';
                    e.currentTarget.parentElement?.appendChild(textNode);
                  }}
                />
              </div>
              <span className="text-dark-900 font-medium text-sm">{brand.name}</span>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="mt-12 text-dark-900 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="mb-4">Want to collaborate?</p>
          <motion.button
            onClick={onContactClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-beige-500 text-white font-bold py-2 px-6 rounded-full shadow-sm"
          >
            Contact Me
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default BrandsSection; 