import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Video } from '../types';
import { TrendingUp } from 'lucide-react';

interface VideoCardProps {
  video: Video;
  index: number;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, index }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative aspect-video overflow-hidden">
        <video 
          ref={videoRef}
          src={video.videoUrl}
          className="w-full h-full object-cover object-[0%_30%]"
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-dark-900/20 transition-colors duration-300"></div>
      </div>
      
      <div className="p-5">
        <div className="mb-2">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-beige-100 text-beige-800 rounded-full">
            {video.category}
          </span>
        </div>
        <h3 className="text-lg font-semibold mb-2 text-dark-900">{video.title}</h3>
        <p className="text-sm text-dark-700 mb-3">For {video.brand}</p>
        
        <div className="flex items-center justify-between text-xs text-dark-700 mt-4 pt-4 border-t border-beige-100">
          <div className="flex items-center">
            <TrendingUp size={14} className="mr-1 text-beige-600" />
            <span>{video.engagement} engagement</span>
          </div>
          <span>{Intl.NumberFormat('en-US', { notation: 'compact' }).format(video.views || 0)} views</span>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoCard;