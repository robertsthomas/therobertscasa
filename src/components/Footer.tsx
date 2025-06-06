import React from 'react';
import { BookLock as TiktokLogo, Instagram, Youtube, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-beige-200/70 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-xl font-serif font-semibold text-dark-900">
              therobertscasa
            </a>
            <p className="text-dark-700 mt-2 max-w-xs">
              Creating authentic content for brands that connects with audiences.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://www.tiktok.com/@therobertscasa" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-dark-900 text-white rounded-full hover:bg-beige-600 transition-colors duration-300"
              >
                <TiktokLogo size={18} />
              </a>
              <a 
                href="#" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-dark-900 text-white rounded-full hover:bg-beige-600 transition-colors duration-300"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-dark-900 text-white rounded-full hover:bg-beige-600 transition-colors duration-300"
              >
                <Youtube size={18} />
              </a>
              <a 
                href="mailto:contact@therobertscasa.com" 
                className="flex items-center justify-center w-10 h-10 bg-dark-900 text-white rounded-full hover:bg-beige-600 transition-colors duration-300"
              >
                <Mail size={18} />
              </a>
            </div>
            <a 
              href="#contact" 
              className="text-dark-900 font-medium hover:text-beige-600 transition-colors duration-300"
            >
              Let's Work Together
            </a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-beige-300/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-dark-700 text-sm mb-4 md:mb-0">
            © {currentYear} therobertscasa. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-dark-700 text-sm hover:text-beige-600 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-dark-700 text-sm hover:text-beige-600 transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;