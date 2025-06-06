import React, { useState, useRef, useEffect } from 'react';
import TikTokFrame from './TikTokFrame';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

interface WorkItemProps {
  id: string;
  title: string;
  description: string;
  videoSrc: string;
  likes: number;
  comments: number;
  shares: number;
}

const WorkSection: React.FC<{ workItem: WorkItemProps }> = ({ workItem }) => {
  const { id, title, description, videoSrc, likes, comments, shares } = workItem;
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Ensure video plays when component is mounted
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      videoRef.current.play().catch(error => {
        console.error("Error playing video:", error);
        // If autoplay fails, try again with muted (browsers allow muted autoplay)
        if (!isMuted) {
          setIsMuted(true);
          videoRef.current!.muted = true;
          videoRef.current!.play().catch(e => 
            console.error("Failed to play even with muted:", e)
          );
        }
      });
    }
  }, [videoSrc, isMuted]);
  
  const toggleMute = () => {
    if (videoRef.current) {
      const newMutedState = !isMuted;
      setIsMuted(newMutedState);
      videoRef.current.muted = newMutedState;
    }
  };
  
  return (
    <TikTokFrame
      username="@therobertscasa"
      description={`${title} - ${description} #portfolio #contentcreator`}
      likes={likes}
      comments={comments}
      shares={shares}
      videoId={id}
      isMuted={isMuted}
      onMuteToggle={toggleMute}
    >
      <div className="h-full w-full relative">
        {/* Video content */}
        <div className="absolute inset-0 z-0">
          <video 
            ref={videoRef}
            className="h-full w-full object-cover"
            autoPlay
            loop
            playsInline
            src={videoSrc}
            controls={false}
            muted={isMuted}
            preload="auto"
          />
        </div>
        
        {/* Overlay with project info (appears when tapped) */}
        <motion.div 
          className="absolute inset-0 z-10 bg-black/70 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-center p-6 max-w-md pointer-events-auto">
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