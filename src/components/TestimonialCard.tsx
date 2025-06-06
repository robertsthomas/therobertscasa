import React from 'react';
import { motion } from 'framer-motion';
import { Testimonial } from '../types';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-white p-6 md:p-8 rounded-lg shadow-md"
    >
      <Quote size={32} className="text-pastel-lavender mb-4" />
      <p className="text-dark-800 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
      <div className="flex items-center">
        <div>
          <h4 className="font-medium text-dark-900">{testimonial.author}</h4>
          <p className="text-sm text-dark-700">{testimonial.role}, {testimonial.company}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;