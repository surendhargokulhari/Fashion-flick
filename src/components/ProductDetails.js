import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};
  const [selectedSize, setSelectedSize] = useState("");

  if (!product) {
    navigate("/"); // Redirect to home if no product info
    return null;
  }

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) stars.push("🌟");
    if (halfStar) stars.push("⭐");
    while (stars.length < 5) stars.push("☆");

    return stars.join(" ");
  };

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  const handlePlaceOrder = () => {
    if (!selectedSize) {
      alert("Please select a size before placing the order.");
      return;
    }

    navigate("/checkout", {
      state: { product, selectedSize },
    });
  };

  return (
    <div className="product-details">
      <header className="bg-dark text-white text-center p-5">
        <h1>{product.name}</h1>
      </header>

      <div className="container mt-5">
        <div className="row">
          {/* Product Image */}
          <div className="col-md-6">
            <img
              src={product.img}
              alt={product.name}
              className="img-fluid"
              style={{ maxHeight: "400px" }}
            />
          </div>

          {/* Product Info */}
          <div className="col-md-6">
            <h3>Price: {product.price}</h3>

            {/* Description */}
            <p>
              <strong>Overview:</strong> This is a detailed description of{" "}
              {product.name}. (You can customize this content.)
            </p>

            {/* Rating */}
            <div className="mt-3">
              <strong>Rating: </strong>
              <span style={{ fontSize: "24px" }}>
                {renderStars(product.rating || 0)}
              </span>
            </div>

            {/* Size Dropdown */}
            <div className="mt-3">
              <label htmlFor="size">Select Size:</label>
              <select
                id="size"
                value={selectedSize}
                onChange={handleSizeChange}
                className="form-select"
              >
                <option value="">--Select Size--</option>
                <option value="S">Small</option>
                <option value="M">Medium</option>
                <option value="L">Large</option>
                <option value="XL">X-Large</option>
              </select>
            </div>

            {/* Order Button */}
            <div className="mt-4">
              <button className="btn btn-grad" onClick={handlePlaceOrder}>
                Place Order
              </button>
            </div>

            {/* Extra Info */}
            <div className="mt-4">
              <p>🚚 <strong>Free Shipping</strong> on all orders</p>
              <p>🔄 <strong>7 Days Exchange and Return</strong> available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
