import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="Home" className="home-section home-bg">
      <div className="home-content">
        <h1 className="home-title">Welcome to Apna Homes</h1>
        <p className="home-desc">Find your dream home with Apna Homes. Explore the best properties and make your next move with confidence.</p>
        <div className="home-btn-group">
          <a href="#Projects" className="home-btn">View Projects</a>
          <a href="#Contact" className="home-btn home-btn-outline">Contact Us</a>
        </div>
      </div>
    </section>
  );
};

export default Home; 