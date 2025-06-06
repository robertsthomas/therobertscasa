import React, { useEffect, useRef } from 'react';
import VerticalScroll, { VerticalScrollHandle } from './components/VerticalScroll';
import IntroSection from './components/IntroSection';
import WorkSection from './components/WorkSection';
import BrandsSection from './components/BrandsSection';
import AboutContactSection from './components/AboutContactSection';
import workItems from './data/workItems';

function App() {
  useEffect(() => {
    document.title = 'therobertscasa | Content Creator & Brand Collaborator';
  }, []);

  const verticalScrollRef = useRef<VerticalScrollHandle>(null);

  const handleContactClick = () => {
    // Scroll to the contact section
    if (verticalScrollRef.current) {
      verticalScrollRef.current.scrollToSection('contact');
    }
  };

  // Combine intro, work items, and other sections
  const sections = [
    { id: 'intro', component: <IntroSection /> },
    ...workItems.map(item => ({
      id: item.id,
      component: <WorkSection workItem={item} />
    })),
    { id: 'brands', component: <BrandsSection onContactClick={handleContactClick} /> },
    { id: 'contact', component: <AboutContactSection onContactClick={handleContactClick} /> }
  ];

  return (
    <div className="fixed inset-0 overflow-hidden">
      <VerticalScroll 
        ref={verticalScrollRef}
        sections={sections} 
      />
    </div>
  );
}

export default App;