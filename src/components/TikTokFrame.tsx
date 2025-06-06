import React, { useState, useEffect } from 'react';
import { Heart, MessageCircle, Share2, Music, Check, Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface TikTokFrameProps {
  children: React.ReactNode;
  username?: string;
  description?: string;
  songName?: string;
  likes?: number;
  comments?: number;
  shares?: number;
  videoId?: string;
  isMuted?: boolean;
  onMuteToggle?: () => void;
}

const TikTokFrame: React.FC<TikTokFrameProps> = ({
  children,
  username = '@therobertscasa',
  description = 'Check out my latest work! #contentcreator #brandcollabs',
  songName = 'Original Sound - therobertscasa',
  likes = 9243,
  comments = 234,
  shares = 134,
  videoId = 'default',
  isMuted = true,
  onMuteToggle
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [shareCount, setShareCount] = useState(shares);
  const [showToast, setShowToast] = useState(false);
  
  // Load like state from localStorage when component mounts
  useEffect(() => {
    try {
      const storedLikes = localStorage.getItem('likedVideos');
      if (storedLikes) {
        const likedVideos = JSON.parse(storedLikes);
        if (likedVideos[videoId]) {
          setIsLiked(true);
        }
      }
    } catch (error) {
      console.error("Error loading liked state:", error);
    }
  }, [videoId]);
  
  // Toggle like function
  const toggleLike = () => {
    try {
      const newLikedState = !isLiked;
      setIsLiked(newLikedState);
      
      // Update like count
      if (newLikedState) {
        setLikeCount(prev => prev + 1);
      } else {
        setLikeCount(prev => prev - 1);
      }
      
      // Save to localStorage
      const storedLikes = localStorage.getItem('likedVideos');
      let likedVideos = storedLikes ? JSON.parse(storedLikes) : {};
      
      if (newLikedState) {
        likedVideos[videoId] = true;
      } else {
        delete likedVideos[videoId];
      }
      
      localStorage.setItem('likedVideos', JSON.stringify(likedVideos));
    } catch (error) {
      console.error("Error toggling like:", error);
    }
  };
  
  // Handle share button click
  const handleShare = () => {
    navigator.clipboard.writeText('https://tiktok.com/@therobertscasa')
      .then(() => {
        setShowToast(true);
        setShareCount(prev => prev + 1);
        
        setTimeout(() => {
          setShowToast(false);
        }, 2000);
      })
      .catch(err => {
        console.error('Failed to copy link: ', err);
      });
  };

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
            type="button"
            className="flex flex-col items-center cursor-pointer z-50"
            onClick={(e) => {
              e.stopPropagation();
              toggleLike();
            }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{
                scale: isLiked ? [1, 1.2, 1] : 1,
                color: isLiked ? "#ef4444" : "#ffffff"
              }}
              transition={{ duration: 0.3 }}
            >
              <Heart className="w-8 h-8" fill={isLiked ? "currentColor" : "none"} />
            </motion.div>
            <span className="text-white text-xs mt-1">{likeCount}</span>
          </motion.button>
          
          {/* Comment button */}
          <button 
            className="flex flex-col items-center"
          >
            <MessageCircle className="w-8 h-8 text-white" />
            <span className="text-white text-xs mt-1">{comments}</span>
          </button>
          
          {/* Share button */}
          <button 
            className="flex flex-col items-center"
            onClick={handleShare}
          >
            <Share2 className="w-8 h-8 text-white" />
            <span className="text-white text-xs mt-1">{shareCount}</span>
          </button>

          {/* Mute button */}
          <motion.button 
            className="flex flex-col items-center"
            onClick={(e) => {
              e.stopPropagation();
              onMuteToggle?.();
            }}
            whileTap={{ scale: 0.9 }}
          >
            {isMuted ? (
              <VolumeX className="w-8 h-8 text-white" />
            ) : (
              <Volume2 className="w-8 h-8 text-white" />
            )}
            <span className="text-white text-xs mt-1">Sound</span>
          </motion.button>
        </div>
        
        {/* Toast notification */}
        <AnimatePresence>
          {showToast && (
            <motion.div 
              className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full py-2 px-4 shadow-lg flex items-center gap-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Check className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium">Link copied!</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TikTokFrame; 