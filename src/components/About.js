import React from 'react';
import { assets } from '../assets/assets';
import './About.css';

const About = () => {
  return (
    <section id="About" className="about-section">
      <div className="about-img-container">
        <img src={assets.brand_img} alt="Apna Homes Brand" className="about-img" />
      </div>
      <div className="about-content">
        <h2 className="about-title">About Us</h2>
        <p className="about-desc">Apna Homes is dedicated to helping you find the perfect property. With years of experience and a passion for real estate, our team ensures a seamless and enjoyable experience for every client. We believe in quality, trust, and customer satisfaction.</p>
        <p>At Apna Homes, we believe in more than just transactions—we believe in building lasting relationships. Our mission is to simplify the real estate process while offering expert guidance and unmatched service. Whether you're a first-time buyer or a seasoned investor, we are here to help you navigate the market with confidence and ease.</p>
        <p className="about-mission">Our mission is to connect people with their dream homes and provide expert guidance every step of the way.</p>
      </div>
    </section>
  );
};

export default About; 