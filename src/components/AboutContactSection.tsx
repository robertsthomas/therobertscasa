import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Mail } from 'lucide-react';

interface AboutContactSectionProps {
  onContactClick: () => void;
}

const AboutContactSection: React.FC<AboutContactSectionProps> = ({ onContactClick }) => {
  const socialLinks = [
    { icon: Instagram, label: 'Instagram', url: 'https://instagram.com/therobertscasa' },
    { 
      icon: () => (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          width="24" 
          height="24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
        </svg>
      ), 
      label: 'TikTok', 
      url: 'https://tiktok.com/@therobertscasa' 
    },
    { icon: Mail, label: 'Email', url: 'mailto:therobertscasa@gmail.com' }
  ];

  return (
    <div className="h-full w-full bg-beige-50 flex items-center justify-center">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <motion.div 
          className="bg-white rounded-2xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2
            className="text-3xl font-serif font-semibold text-dark-900 mb-4 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Let's Connect
          </motion.h2>
          
          <motion.p
            className="text-dark-700 mb-8 text-center max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            I'm always looking for exciting collaborations with brands that align with my values. 
            Feel free to reach out for partnerships, content creation, or any inquiries.
          </motion.p>
          
          <div className="grid grid-cols-3 gap-4 mb-8 max-w-md mx-auto">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center py-4 px-2 rounded-lg text-dark-900 hover:bg-beige-100 transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-beige-600 h-6 flex items-center justify-center">
                    <Icon />
                  </div>
                  <span className="text-sm font-medium mt-2">{link.label}</span>
                </motion.a>
              );
            })}
          </div>
          
            </motion.div>
      </div>
    </div>
  );
};

export default AboutContactSection; 