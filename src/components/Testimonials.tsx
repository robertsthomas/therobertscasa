import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../data/testimonials';
import TestimonialCard from './TestimonialCard';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-beige-100/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-dark-900">What Brands Say</h2>
          <p className="text-dark-700 max-w-2xl mx-auto">
            Feedback from the brands I've had the pleasure to collaborate with.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;