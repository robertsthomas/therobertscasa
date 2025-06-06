import React from 'react';
import { motion } from 'framer-motion';
import { BookLock as TiktokLogo, Instagram, Youtube, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-beige-100/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-pastel-pink rounded-full opacity-30 -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-pastel-blue rounded-full opacity-30 -z-10"></div>
            <img 
              src="/images/tiktok-image.jpeg" 
              alt="About therobertscasa" 
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6 text-dark-900">About Me</h2>
            <p className="text-dark-700 mb-6 leading-relaxed">
              Hey there! I'm the creator behind @therobertscasa, where I blend creativity with strategy to create 
              content that resonates with audiences while achieving brand objectives.
            </p>
            <p className="text-dark-700 mb-6 leading-relaxed">
              My approach is authentic and data-driven. I believe that the most effective content feels genuine 
              while being strategically crafted to drive engagement and conversions.
            </p>
            <p className="text-dark-700 mb-8 leading-relaxed">
              With over 3 years of experience creating content for top brands across various industries, 
              I bring both creative vision and marketing expertise to every collaboration.
            </p>
            
            <div className="flex space-x-4">
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
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-8 bg-white rounded-lg shadow-md"
        >
          <h3 className="text-xl font-serif font-semibold mb-4 text-dark-900">My Content Creation Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border border-beige-200 rounded-lg">
              <div className="w-10 h-10 bg-pastel-pink/50 rounded-full flex items-center justify-center mb-4">
                <span className="font-medium">1</span>
              </div>
              <h4 className="font-medium mb-2 text-dark-900">Brand Discovery</h4>
              <p className="text-sm text-dark-700">
                I take time to understand your brand values, target audience, and campaign objectives.
              </p>
            </div>
            <div className="p-4 border border-beige-200 rounded-lg">
              <div className="w-10 h-10 bg-pastel-green/50 rounded-full flex items-center justify-center mb-4">
                <span className="font-medium">2</span>
              </div>
              <h4 className="font-medium mb-2 text-dark-900">Creative Strategy</h4>
              <p className="text-sm text-dark-700">
                Developing a content approach that aligns with current trends while showcasing your products authentically.
              </p>
            </div>
            <div className="p-4 border border-beige-200 rounded-lg">
              <div className="w-10 h-10 bg-pastel-blue/50 rounded-full flex items-center justify-center mb-4">
                <span className="font-medium">3</span>
              </div>
              <h4 className="font-medium mb-2 text-dark-900">Content & Results</h4>
              <p className="text-sm text-dark-700">
                Creating engaging videos that drive real engagement, followed by detailed performance analytics.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;