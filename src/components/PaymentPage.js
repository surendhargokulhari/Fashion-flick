import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product, selectedSize } = location.state || {};

  if (!product || !selectedSize) {
    navigate("/");
    return null;
  }

  return (
    <div className="container mt-5">
      <h2>Payment Page</h2>
      <div className="card p-4">
        <h4>{product.name}</h4>
        <p>Price: {product.price}</p>
        <p>Selected Size: {selectedSize}</p>
        <hr />
        <p>💳 Choose a payment method:</p>
        <ul>
          <li>Credit/Debit Card</li>
          <li>UPI</li>
          <li>Cash on Delivery</li>
        </ul>
        <button
          className="btn btn-success mt-3"
          onClick={() => {
            alert("Payment Successful!");
            navigate("/");
          }}
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
