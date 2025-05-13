import React, { useState, useRef } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/Offer";
import Products from "./components/Products";
import AboutPage from "./components/About";
import ContactPage from "./components/Contact";
import Welcome from "./components/Welcome";
import Cart from "./components/Cart";
import { CartProvider } from "./context/CartContext";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const productRef = useRef(null);

  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header setSearchTerm={setSearchTerm} scrollToProducts={() => {
                  productRef.current?.scrollIntoView({ behavior: "smooth" });
                }} />
                <Welcome />
                <HomePage />
                <Products searchTerm={searchTerm} ref={productRef} />
                <AboutPage />
                <ContactPage />
              </>
            }
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
