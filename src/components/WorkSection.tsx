import React from 'react';
import TikTokFrame from './TikTokFrame';
import { motion } from 'framer-motion';

interface WorkItemProps {
  title: string;
  description: string;
  videoSrc: string;
  likes: number;
  comments: number;
  shares: number;
}

const WorkSection: React.FC<{ workItem: WorkItemProps }> = ({ workItem }) => {
  const { title, description, videoSrc, likes, comments, shares } = workItem;
  
  return (
    <TikTokFrame
      username="@therobertscasa"
      description={`${title} - ${description} #portfolio #contentcreator`}
      likes={likes}
      comments={comments}
      shares={shares}
    >
      <div className="h-full w-full relative">
        {/* Video content */}
        <div className="absolute inset-0 z-0">
          <video 
            className="h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            src={videoSrc}
          />
        </div>
        
        {/* Overlay with project info (appears when tapped) */}
        <motion.div 
          className="absolute inset-0 z-10 bg-black/70 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-center p-6 max-w-md">
            <h2 className="text-2xl font-bold text-white mb-3">{title}</h2>
            <p className="text-white/90 mb-4">{description}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black font-medium py-2 px-6 rounded-full"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </TikTokFrame>
  );
};

export default WorkSection; 