import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import Testimonials from './components/Testimonials';
import Brands from './components/Brands';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useInView } from 'react-intersection-observer';

function App() {
  useEffect(() => {
    document.title = 'therobertscasa | Content Creator & Brand Collaborator';
  }, []);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div className="min-h-screen bg-beige-50">
      <Navbar />
      <Hero />
      <Work />
      {/* <Testimonials /> */}
      <Brands />
      <div ref={ref}>
        <About />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;