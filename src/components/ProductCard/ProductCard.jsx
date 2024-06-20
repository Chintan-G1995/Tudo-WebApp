import React from "react";
import "./ProductCard.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, addToCart }) => {
  const navigate = useNavigate();

  const viewProduct = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="product-details">
        <h4>{product.name}</h4>
        <p className="original-price">{product.originalPrice}</p>
        <p className="discounted-price">{product.discountedPrice}</p>
        <button
          className="view-product-btn"
          onClick={() => viewProduct(product.id)}
        >
          Add To Registry
        </button>
      </div>
    </div>
  );
};
export default ProductCard;
