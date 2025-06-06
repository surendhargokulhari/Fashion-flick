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
import ProductDetails from "./components/ProductDetails"; // Import ProductDetails component
import { CartProvider } from "./context/CartContext";
import PaymentPage from "./components/PaymentPage";
import Account from "./components/Account";
import Orders from "./components/Orders";


function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const productRef = useRef(null);

  return (
    <CartProvider >
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header
                  setSearchTerm={setSearchTerm}
                  scrollToProducts={() => {
                    productRef.current?.scrollIntoView({ behavior: "smooth" });
                  }}
                />
                <Welcome />
                <HomePage />
                <Products searchTerm={searchTerm} ref={productRef} />
                <AboutPage />
                <ContactPage />
              </>
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product-details" element={<ProductDetails />} /> {/* Add ProductDetails Route */}
          <Route path="/checkout" element={<PaymentPage />} /> 
          <Route path="/Account" element={<Account />} />
          <Route path="/account/orders" element={<Orders />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
