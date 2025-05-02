import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/Offer"; // Home page component
import Products from "./components/Products"; // Products page component
import AboutPage from "./components/About"; // About page component
import ContactPage from "./components/Contact"; // Contact page component
import Welcome from "./components/Welcome"; // Welcome page component
import Cart from "./components/Cart"; // Cart page component
import { CartProvider } from "./context/CartContext"; // Cart Context provider

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          {/* Routes with Header */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <Welcome />
                <HomePage />
                <Products />
                <AboutPage />
                <ContactPage />
               
              </>
            }
          />
          <Route path="/cart" element={<Cart />} /> {/* No Header in Cart */}
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
