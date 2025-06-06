import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, SkipForward, ArrowUp } from 'lucide-react';
import workItems from '../data/workItems';

interface Section {
  id: string;
  component: React.ReactNode;
}

interface VerticalScrollProps {
  sections: Section[];
}

export interface VerticalScrollHandle {
  scrollToSection: (id: string) => void;
}

const VerticalScroll = forwardRef<VerticalScrollHandle, VerticalScrollProps>(
  ({ sections }, ref) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isScrolling, setIsScrolling] = useState(false);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    
    const nextSection = () => {
      if (currentIndex < sections.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    };

    const prevSection = () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    };

    const scrollToSection = (sectionId: string) => {
      const index = sections.findIndex(section => section.id === sectionId);
      if (index !== -1) {
        setCurrentIndex(index);
      }
    };

    // Expose the scrollToSection method to the parent component
    useImperativeHandle(ref, () => ({
      scrollToSection
    }));

    // Skip videos function (jump to brands section)
    const skipVideos = () => {
      const brandsIndex = sections.findIndex(section => section.id === 'brands');
      if (brandsIndex !== -1) {
        setCurrentIndex(brandsIndex);
      }
    };

    const handleWheel = (e: React.WheelEvent) => {
      if (isScrolling) return;
      
      setIsScrolling(true);
      if (e.deltaY > 0) {
        nextSection();
      } else {
        prevSection();
      }
      
      setTimeout(() => {
        setIsScrolling(false);
      }, 800); // Debounce scrolling
    };

    const handleTouchStart = (e: React.TouchEvent) => {
      setTouchStart(e.touches[0].clientY);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
      if (touchStart === null || isScrolling) return;
      
      const touchEnd = e.touches[0].clientY;
      const diff = touchStart - touchEnd;
      
      if (Math.abs(diff) > 50) { // Threshold to trigger scroll
        setIsScrolling(true);
        if (diff > 0) {
          nextSection();
        } else {
          prevSection();
        }
        setTouchStart(null);
        
        setTimeout(() => {
          setIsScrolling(false);
        }, 800);
      }
    };

    const handleTouchEnd = () => {
      setTouchStart(null);
    };

    // Handle keyboard navigation
    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (isScrolling) return;
        
        if (e.key === 'ArrowDown' || e.key === 'PageDown') {
          setIsScrolling(true);
          nextSection();
          setTimeout(() => setIsScrolling(false), 800);
        } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
          setIsScrolling(true);
          prevSection();
          setTimeout(() => setIsScrolling(false), 800);
        }
      };
      
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentIndex, isScrolling]);

    // Check if we're currently viewing a work item (video)
    const isViewingVideo = () => {
      const currentSection = sections[currentIndex];
      // Check if the current section ID matches any of the workItems IDs
      return currentSection && workItems.some(item => item.id === currentSection.id);
    };

    // Get the first video section index
    const getFirstVideoIndex = () => {
      return sections.findIndex(section => workItems.some(item => item.id === section.id));
    };

    // Get the number of videos left to watch
    const getVideosLeft = () => {
      if (!isViewingVideo()) return 0;
      
      const videoSections = sections.filter(section => 
        workItems.some(item => item.id === section.id)
      );
      const currentVideoIndex = videoSections.findIndex(section => section.id === sections[currentIndex].id);
      
      return videoSections.length - currentVideoIndex - 1;
    };

    return (
      <div 
        ref={containerRef}
        className="h-screen w-full overflow-hidden bg-black"
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <motion.div
          className="h-full w-full"
          animate={{ y: `-${currentIndex * 100}vh` }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
        >
          {sections.map((section, index) => (
            <div key={section.id} className="h-screen w-full snap-center" id={section.id}>
              {section.component}
            </div>
          ))}
        </motion.div>
        
        {/* Top buttons container */}
        <div className="absolute top-6 right-6 flex gap-2 z-20">
          {/* Back to Top button */}
          {currentIndex > 0 && (
            <motion.button
              className="bg-black/50 backdrop-blur-sm text-white px-3 py-1.5 rounded-full flex items-center space-x-1 border border-white/30"
              onClick={() => setCurrentIndex(0)}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(0,0,0,0.7)' }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <ArrowUp className="w-4 h-4 mr-1" />
              <span className="text-sm font-medium">Back to Top</span>
            </motion.button>
          )}
          
          {/* Skip Videos button */}
          {isViewingVideo() && (
            <motion.button
              className="bg-black/50 backdrop-blur-sm text-white px-3 py-1.5 rounded-full flex items-center space-x-1 border border-white/30"
              onClick={skipVideos}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(0,0,0,0.7)' }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <SkipForward className="w-4 h-4 mr-1" />
              <span className="text-sm font-medium">
                Skip Videos {getVideosLeft() > 0 ? `(${getVideosLeft()} left)` : ''}
              </span>
            </motion.button>
          )}
        </div>
        
        {/* Always show down caret, but make it inactive on last slide */}
        <motion.div 
          className={`absolute bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer z-20 ${currentIndex === sections.length - 1 ? 'opacity-30 pointer-events-none' : ''}`}
          initial={{ opacity: 0.7 }}
          animate={{ y: [0, 10, 0], opacity: currentIndex === sections.length - 1 ? [0.3, 0.5, 0.3] : [0.7, 1, 0.7] }}
          transition={{ repeat: Infinity, duration: 2 }}
          onClick={nextSection}
        >
          <ChevronDown className="w-8 h-8 text-white" />
        </motion.div>
      </div>
    );
  }
);

export default VerticalScroll; 