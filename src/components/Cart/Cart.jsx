import React from "react";
import "./Cart.css";

const Cart = ({ cartItems }) => {
  const totalAmount = cartItems.reduce(
    (total, item) => total + parseFloat(item.discountedPrice),
    0
  );

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <h4>{item.name}</h4>
                <p className="discounted-price">{item.discountedPrice}</p>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: {totalAmount.toFixed(2)}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
