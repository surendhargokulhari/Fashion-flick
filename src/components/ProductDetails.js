import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};
  const [selectedSize, setSelectedSize] = useState("");

  if (!product) {
    navigate("/");
    return null;
  }

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push("🌟");
    }
    if (halfStar) {
      stars.push("⭐");
    }
    while (stars.length < 5) {
      stars.push("☆");
    }
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
    navigate("/checkout", { state: { product, selectedSize } });
  };

  return (
    <div className="product-details">
      {/* Logo */}
      <header className="bg-dark text-white text-center p-5 d-flex flex-column align-items-center">
        <h1 className="mt-3">{product.name}</h1>
      </header>

      <div className="container mt-5">
        <div className="row">
          {/* Product Image */}
          <div className="col-md-6">
            <img src={product.img} alt={product.name} className="img-fluid" />
          </div>

          {/* Product Info */}
          <div className="col-md-6">
            <h3>Price: {product.price}</h3>

            {/* Product Overview */}
            <p>
              <strong>Product Overview:</strong> This is a detailed description of
              the {product.name}. (Add the full description here.)
            </p>

            {/* Rating */}
            <div className="mt-3">
              <strong>Rating: </strong>
              <span style={{ fontSize: "24px" }}>
                {renderStars(product.rating || 0)}
              </span>
            </div>

            {/* Size Selection */}
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

            {/* Place Order */}
            <div className="mt-4">
              <button className="btn btn-grad" onClick={handlePlaceOrder}>
                Place Order
              </button>
            </div>

            {/* Additional Info */}
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
