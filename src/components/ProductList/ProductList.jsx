import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductList.css';
import homeImg1 from '../../assets/img1.jpeg'
import homeImg2 from '../../assets/img2.jpeg'
import homeImg3 from '../../assets/img3.jpeg'
import homeImg4 from '../../assets/img4.jpeg'


const ProductList = () => {
  const products = [
    {
      id: 1,
      name: 'Designer Chair GT',
      originalPrice: 'Orignal Price ₹150',
      discountedPrice: 'Discounted Price ₹120',
      image: `${homeImg1}`,
    },
    {
      id: 2,
      name: 'The Ultimate Collection',
      originalPrice: 'Orignal Price ₹130',
      discountedPrice: 'Discounted Price ₹120',
      image: `${homeImg2}`,
    },
    {
      id: 3,
      name: 'The Ultimate Collection',
      originalPrice: 'Orignal Price ₹130',
      discountedPrice: 'Discounted Price ₹120',
      image: `${homeImg3}`,
    },
    {
      id: 4,
      name: 'The Ultimate Collection',
      originalPrice: 'Orignal Price ₹130',
      discountedPrice: 'Discounted Price ₹120',
      image: `${homeImg4}`,
    },
    {
      id: 5,
      name: 'The Ultimate Collection',
      originalPrice: 'Orignal Price ₹130',
      discountedPrice: 'Discounted Price ₹120',
      image: `${homeImg1}`,
    },
    {
      id: 6,
      name: 'The Ultimate Collection',
      originalPrice: 'Orignal Price ₹130',
      discountedPrice: 'Discounted Price ₹120',
      image: `${homeImg3}`,
    },
    
  ];

  return (
    <section className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default ProductList;
