import React from 'react';
import { motion } from 'framer-motion';
import { brands } from '../data/brands';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const Brands: React.FC = () => {
  return (
    <section id="brands" className="py-16 bg-beige-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-dark-900">Brands I've Worked With</h2>
        </motion.div>
        
        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-beige-50 to-transparent z-10 flex items-center">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="ml-4"
            >
              <ChevronLeft className="w-6 h-6 text-beige-600" />
            </motion.div>
          </div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-beige-50 to-transparent z-10 flex items-center justify-end">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="mr-4"
            >
              <ChevronRight className="w-6 h-6 text-beige-600" />
            </motion.div>
          </div>
          
          <div 
            className="overflow-x-auto overflow-y-hidden scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex items-center space-x-12 py-8 px-4 min-w-max">
              {[...brands, ...brands].map((brand, index) => (
                <motion.div
                  key={`${brand.id}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  className="flex-shrink-0 group"
                >
                  <div className="relative flex flex-col items-center">
                    <div className="w-24 h-24 bg-white rounded-lg p-4 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-200">
                      <img 
                        src={brand.logoUrl} 
                        alt={brand.name}
                        className="max-w-full max-h-full object-contain filter saturate-0 opacity-75 group-hover:saturate-100 group-hover:opacity-100 transition-all duration-200"
                      />
                    </div>
                    <div className="absolute -bottom-6 opacity-0 group-hover:opacity-100 transition-all duration-200 text-center">
                      <span className="text-sm font-medium text-dark-900">{brand.name}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;