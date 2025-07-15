import React from 'react';
import { assets } from '../assets/assets';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-main">
        <div className="footer-col footer-brand">
          <div className="footer-logo-row">
            <img src={assets.logo} alt="Apna Homes Logo" className="footer-logo" />
            <span className="footer-brand-name">Apna Homes</span>
          </div>
          <p className="footer-desc">Apna Homes is a customer-centric real estate business dedicated to helping individuals and families find their perfect space. We offer a wide range of services, including property sales, rentals, and investment consulting. With a deep understanding of the market and a passion for delivering value, we ensure every client experiences a smooth and rewarding journey in real estate.
          </p>
        </div>
        <div className="footer-col footer-links">
          <h4 className="footer-heading">Company</h4>
          <ul>
            <li><a href="#Home">Home</a></li>
            <li><a href="#About">About us</a></li>
            <li><a href="#Contact">Contact us</a></li>
          </ul>
        </div>
        <div className="footer-col footer-newsletter">
          <h4 className="footer-heading">Subscribe to our newsletter</h4>
          <p className="footer-news-desc">The latest news, articles, and resources, sent to your inbox weekly.</p>
          <form className="footer-news-form" onSubmit={e => e.preventDefault()}>
            <input type="email" className="footer-news-input" placeholder="Enter your email" required />
            <button className="footer-news-btn">Subscribe</button>
          </form>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-copyright">
        Copyright 2024 © GreatStack. All Right Reserved.
      </div>
    </footer>
  );
};

export default Footer; 