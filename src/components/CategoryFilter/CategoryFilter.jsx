import React from 'react';
import './CategoryFilter.css';

const CategoryFilter = () => {
  return (
    <aside className="category-filter">
      <h3>Categories</h3>
      <ul>
        <li>Tables</li>
        <li>Lamps</li>
        <li>Chairs</li>
        <li>Sofas</li>
      </ul>
      <h3>Filter By</h3>
      <ul className="color-filter">
        <li className="color red"></li>
        <li className="color blue"></li>
        <li className="color green"></li>
        <li className="color yellow"></li>
        <li className="color purple"></li>
      </ul>
      <h3>Price Range</h3>
      <input type="range" min="50" max="6000" />
    </aside>
  );
};

export default CategoryFilter;
