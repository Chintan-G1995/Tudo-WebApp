import React from 'react';
import './HeroSection.css';
import img1 from '../../assets/hero1.jpeg'
import img2 from '../../assets/hero3.png'
import img3 from '../../assets/hero4.png'
import img4 from '../../assets/hero5.png'
import img5 from '../../assets/hero6.png'
import img6 from '../../assets/hero3.png'
import poster from '../../assets/poster.jpeg'

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <img src={poster} alt="" />
        <h1>Our Latest Products</h1>
        <button className="view-all-btn">View All</button>
      </div>
      <div className="hero-images">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="Product 1" />
        <img src={img6} alt="Product 2" />
      </div>
    </section>
  );
};

export default HeroSection;
