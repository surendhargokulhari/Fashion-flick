// Checkout.js
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Checkout = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { product, selectedSize } = state || {};

  useEffect(() => {
    if (!product || !selectedSize) {
      navigate("/");
      return;
    }

    const completePayment = () => {
      const newOrder = {
        ...product,
        size: selectedSize,
        date: new Date().toLocaleString(),
      };

      const orders = JSON.parse(localStorage.getItem("orders")) || [];
      orders.push(newOrder);
      localStorage.setItem("orders", JSON.stringify(orders));

      navigate("/account/orders");
    };

    const timer = setTimeout(completePayment, 2000);
    return () => clearTimeout(timer);
  }, [product, selectedSize, navigate]);

  return (
    <div className="container mt-5 text-center">
      <h2>Processing Payment...</h2>
      <p>Please wait while we complete your order.</p>
    </div>
  );
};

export default Checkout;
