import React from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "./ProductDetail.css";
import { useNavigate } from "react-router-dom";
import homeimg from "../../assets/img1.jpeg";

const ProductDetail = ({ addToCart }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const product = {
    id: id,
    name: "Designer Chair GT",
    description: "A detailed description of the Designer Chair GT.",
    originalPrice: "130",
    discountedPrice: "120",
    image: `${homeimg}`,
  };

  const handleAddToCart = () => {
    navigate(`/cart`);
    addToCart(product);
    toast.success(`Product Added Sucessfully`);
  };

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p className="original-price">{product.originalPrice}</p>
        <p className="discounted-price">{product.discountedPrice}</p>
        <button className="cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
