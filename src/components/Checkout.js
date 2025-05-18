import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product, selectedSize } = location.state || {};

  useEffect(() => {
    if (product && selectedSize) {
      const newOrder = {
        ...product,
        size: selectedSize,
        orderId: Date.now(),
        orderDate: new Date().toLocaleString(),
      };

      const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
      existingOrders.push(newOrder);
      localStorage.setItem("orders", JSON.stringify(existingOrders));

      // Optional: clear cart, show success message, redirect to orders
      alert("Order placed successfully!");
      navigate("/orders");
    }
  }, [product, selectedSize, navigate]);

  return null; // Optional: or a loading animation
};

export default Checkout;
