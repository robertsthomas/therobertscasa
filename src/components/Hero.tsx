import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookLock as TiktokLogo, Instagram, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-pastel-pink/20 to-beige-100/30 -z-10"></div>
      <div 
        className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6205818/pexels-photo-6205818.jpeg?auto=compress&cs=tinysrgb&w=1920')] 
        bg-cover bg-center opacity-10 -z-20"
      ></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative inline-flex items-center px-4 py-2 rounded-full bg-beige-200/70 text-dark-900 mb-6 hover:bg-beige-300/70 transition-colors duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
              <motion.span
                animate={{ opacity: isHovered ? 0 : 1 }}
                transition={{ duration: 0.2 }}
                className="text-sm font-medium"
              >
                @therobertscasa
              </motion.span>
              <motion.div 
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <a 
                  href="https://www.tiktok.com/@therobertscasa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full w-10 h-10 flex items-center justify-center hover:opacity-80 transition-opacity duration-300 cursor-pointer"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 48 48"
                    fill="currentColor"
                    className="text-dark-900"
                  >
                    <path d="M38.4 21.68V16c-2.66 0-4.69-.71-6-2.09a8.9 8.9 0 0 1-2.13-5.64v-.41l-5.37-.13V30.8a5 5 0 1 1-3.24-5.61v-5.5a10.64 10.64 0 0 0-1.7-.14 10.36 10.36 0 1 0 10.36 10.36 10.56 10.56 0 0 0-.08-1.27v-9.15a14.48 14.48 0 0 0 8.16 2.19Z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/therobertscasa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full w-10 h-10 flex items-center justify-center hover:opacity-80 transition-opacity duration-300 cursor-pointer"
                >
                  <Instagram size={20} className="text-dark-900" />
                </a>
              </motion.div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-semibold leading-tight md:leading-tight lg:leading-tight mb-6 max-w-4xl"
          >
            Creating authentic content for brands that <span className="text-beige-600">connects</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-dark-700 mb-10 max-w-2xl leading-relaxed"
          >
            I help brands tell their stories through engaging TikTok content that resonates with audiences and drives real results.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#work"
              className="px-8 py-3 bg-beige-600 text-white rounded-md font-medium hover:bg-beige-700 transition-colors duration-300"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-transparent border border-beige-300 text-dark-900 rounded-md font-medium hover:bg-beige-100 transition-colors duration-300"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#work" className="text-dark-700 hover:text-dark-900 transition-colors duration-300">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;