import React, { createContext, useContext, useState } from "react";

// Create Context
const CartContext = createContext();

// Custom Hook
export const useCart = () => useContext(CartContext);

// Provider Component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add to Cart (Avoid duplicates)
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const exists = prevItems.find((item) => item.id === product.id);
      return exists ? prevItems : [...prevItems, product];
    });
  };

  // Remove from Cart
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
