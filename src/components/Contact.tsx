import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Calendar } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-beige-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-dark-900">Let's Collaborate</h2>
          <p className="text-dark-700 max-w-2xl mx-auto">
            Interested in working together? Reach out to discuss how we can create engaging content for your brand.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-6 text-dark-900">Send Me a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-dark-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-beige-200 rounded-md focus:outline-none focus:ring-2 focus:ring-beige-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-dark-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-beige-200 rounded-md focus:outline-none focus:ring-2 focus:ring-beige-500"
                  placeholder="johndoe@example.com"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-dark-700 mb-1">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-2 border border-beige-200 rounded-md focus:outline-none focus:ring-2 focus:ring-beige-500"
                  placeholder="Your Company"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-beige-200 rounded-md focus:outline-none focus:ring-2 focus:ring-beige-500"
                  placeholder="Tell me about your project or idea..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-3 bg-beige-600 text-white rounded-md font-medium hover:bg-beige-700 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white p-8 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-semibold mb-6 text-dark-900">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail size={20} className="text-beige-600 mt-1 mr-4" />
                  <div>
                    <p className="font-medium text-dark-900">Email</p>
                    <a href="mailto:contact@therobertscasa.com" className="text-dark-700 hover:text-beige-600 transition-colors duration-300">
                      therobertscasa@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MessageSquare size={20} className="text-beige-600 mt-1 mr-4" />
                  <div>
                    <p className="font-medium text-dark-900">Social Media</p>
                    <div className="text-dark-700">
                      <a 
                        href="https://www.tiktok.com/@therobertscasa" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-beige-600 transition-colors duration-300"
                      >
                        TikTok
                      </a>
                      <span className="mx-2">&middot;</span>
                      <a 
                        href="https://www.instagram.com/therobertscasa" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-beige-600 transition-colors duration-300"
                      >
                        Instagram
                      </a>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
            
            <div className="bg-beige-600 p-8 rounded-lg shadow-md text-white">
              <h3 className="text-xl font-semibold mb-4">Work With Me</h3>
              <p className="mb-6 opacity-90">
                Looking for authentic content that drives engagement and conversions? Let's create something amazing together.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <div className="w-5 h-5 mr-3 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-xs">✓</span>
                  </div>
                  <span>Brand-aligned creative strategy</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 mr-3 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-xs">✓</span>
                  </div>
                  <span>Authentic, engaging content</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 mr-3 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-xs">✓</span>
                  </div>
                  <span>Performance tracking and analytics</span>
                </li>
              </ul>
              <a
                href="#contact"
                className="block w-full px-4 py-3 bg-white text-beige-600 rounded-md font-medium text-center hover:bg-beige-50 transition-colors duration-300"
              >
                Start a Project
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;