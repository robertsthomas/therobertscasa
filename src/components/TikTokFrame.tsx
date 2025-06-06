import React from 'react';
import { Heart, MessageCircle, Share2, Music } from 'lucide-react';
import { motion } from 'framer-motion';

interface TikTokFrameProps {
  children: React.ReactNode;
  username?: string;
  description?: string;
  songName?: string;
  likes?: number;
  comments?: number;
  shares?: number;
}

const TikTokFrame: React.FC<TikTokFrameProps> = ({
  children,
  username = '@therobertscasa',
  description = 'Check out my latest work! #contentcreator #brandcollabs',
  songName = 'Original Sound - therobertscasa',
  likes = 9243,
  comments = 234,
  shares = 134
}) => {
  return (
    <div className="relative h-full w-full bg-black flex items-center justify-center overflow-hidden">
      {/* Main content area */}
      <div className="relative h-full w-full">
        {children}
        
        {/* Overlay gradient for better text visibility */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/70 to-transparent"></div>
        
        {/* Bottom info section */}
        <div className="absolute bottom-14 left-4 max-w-[80%]">
          <h2 className="text-white font-bold text-lg">{username}</h2>
          <p className="text-white text-sm mt-1">{description}</p>
          <div className="flex items-center mt-2">
            <Music className="w-3 h-3 text-white mr-2" />
            <p className="text-white text-xs flex-1 truncate">{songName}</p>
          </div>
        </div>
        
        {/* Right side interaction buttons */}
        <div className="absolute right-4 bottom-20 flex flex-col gap-5">
          {/* Profile picture */}
          <div className="w-10 h-10 rounded-full bg-gray-300 self-center overflow-hidden border-2 border-white">
            <img src="/images/tiktok-image.jpeg" alt="Profile" className="w-full h-full object-cover" />
          </div>
          
          {/* Like button */}
          <motion.button 
            className="flex flex-col items-center"
            whileTap={{ scale: 1.2 }}
          >
            <Heart className="w-8 h-8 text-white" />
            <span className="text-white text-xs mt-1">{likes}</span>
          </motion.button>
          
          {/* Comment button */}
          <motion.button 
            className="flex flex-col items-center"
            whileTap={{ scale: 1.2 }}
          >
            <MessageCircle className="w-8 h-8 text-white" />
            <span className="text-white text-xs mt-1">{comments}</span>
          </motion.button>
          
          {/* Share button */}
          <motion.button 
            className="flex flex-col items-center"
            whileTap={{ scale: 1.2 }}
          >
            <Share2 className="w-8 h-8 text-white" />
            <span className="text-white text-xs mt-1">{shares}</span>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default TikTokFrame; 