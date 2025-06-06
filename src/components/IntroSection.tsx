import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const IntroSection: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Add a slight delay before showing content for better animation effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-full w-full bg-beige-50 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center h-full w-full px-4">
        <div className="flex flex-col items-center justify-center text-center max-w-xl">
          <motion.div 
            className="w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden border-2 border-beige-300 shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: isLoaded ? 1 : 0.8, opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <img 
              src="/images/tiktok-image.jpeg" 
              alt="Thomas Roberts" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl font-serif font-semibold text-dark-900 mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            therobertscasa
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-dark-700 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Content Creator & Brand Collaborator
          </motion.p>
          
          <motion.p
            className="text-dark-700 mb-8 max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            I create engaging social media content for top brands that connects with audiences and drives results.
          </motion.p>
          
         
        </div>
        
        <motion.div
          className="absolute bottom-12 text-dark-900 text-sm flex flex-col items-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ 
            opacity: isLoaded ? [0, 1, 0.5, 1] : 0, 
            y: isLoaded ? [10, 0, 5, 0] : 10 
          }}
          transition={{ 
            duration: 2, 
            delay: 1.5, 
            repeat: Infinity, 
            repeatDelay: 1
          }}
        >
          <p className="mb-2">Swipe down</p>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-xl"
          >
            ↓
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default IntroSection; 