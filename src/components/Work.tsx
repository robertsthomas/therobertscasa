import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { videos } from '../data/videos';
import VideoCard from './VideoCard';
import { VideoCategory } from '../types';

const allCategories: { value: VideoCategory | 'all'; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'home', label: 'Home & Cleaning' },
  { value: 'food', label: 'Food & Beverage' },
  { value: 'tech', label: 'Tech' }
];

const Work: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<VideoCategory | 'all'>('all');
  
  const filteredVideos = activeCategory === 'all' 
    ? videos 
    : videos.filter(video => video.category === activeCategory);

  const categories = useMemo(() => {
    // Always include 'All' category
    const availableCategories = allCategories.filter(category => 
      category.value === 'all' || videos.some(video => video.category === category.value)
    );
    return availableCategories;
  }, []);

  return (
    <section id="work" className="py-20 bg-beige-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-dark-900">Featured Work</h2>
          <p className="text-dark-700 max-w-2xl mx-auto">
            A selection of my best collaborations with top brands across different categories.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-10 overflow-x-auto py-2"
        >
          <div className="flex space-x-2">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setActiveCategory(category.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 whitespace-nowrap ${
                  activeCategory === category.value
                    ? 'bg-beige-600 text-white'
                    : 'bg-beige-100 text-dark-800 hover:bg-beige-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredVideos.map((video, index) => (
            <VideoCard key={video.id} video={video} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;