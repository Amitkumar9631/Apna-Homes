import React from 'react';
import { testimonialsData } from '../assets/assets';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section id="Testimonials" className="testimonials-section">
      <div className="testimonials-content-overlay">
        <h2 className="testimonials-title">Testimonials</h2>
        <div className="testimonials-grid">
          {testimonialsData.map((testimonial, idx) => (
            <div key={idx} className="testimonial-card">
              <img src={testimonial.image} alt={testimonial.alt} className="testimonial-img" />
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <p className="testimonial-role">{testimonial.title}</p>
              <div className="testimonial-rating">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="testimonial-star">★</span>
                ))}
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 