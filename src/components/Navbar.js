import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('Home');
      if (!homeSection) return;
      const rect = homeSection.getBoundingClientRect();
      setShow(rect.bottom > 80 && rect.top <= 0);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!show) return null;

  return (
    <nav className="navbar">
      <div className="navbar-container navbar-flex">
        <a href="#Home" className="navbar-brand-text">Apna Homes</a>
        <ul className="navbar-links navbar-center">
          <li><a href="#Home" className="navbar-link">Home</a></li>
          <li><a href="#About" className="navbar-link">About Us</a></li>
          <li><a href="#Projects" className="navbar-link">Projects</a></li>
          <li><a href="#Testimonials" className="navbar-link">Testimonials</a></li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
