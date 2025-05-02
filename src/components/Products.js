import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext"; // make sure this context exists

const products = [
  { id: 1, name: "T-Shirt", img: "https://img.freepik.com/premium-psd/flat-lay-realistic-t-shirt-mockup_185216-241.jpg", price: "₹299" },
  { id: 2, name: "Denim", img: "https://img.freepik.com/premium-photo/blue-jean-jacket-with-blue-shirt-front_1162228-7632.jpg", price: "₹699" },
  { id: 3, name: "Jacket", img: "https://cdn.pixabay.com/photo/2017/09/07/04/54/khaki-2723896_1280.jpg", price: "₹999" },
  { id: 4, name: "Shoe", img: "https://img.freepik.com/premium-photo/elegant-male-shoes-white-background_392895-575797.jpg", price: "₹499" },
  { id: 5, name: "Shirt", img: "https://img.freepik.com/premium-photo/top-view-plain-classic-gray-long-sleeve-shirt-isolated-white-background_437105-4038.jpg", price: "₹399" },
  { id: 6, name: "Hoodie", img: "https://www.harley-davidson.com/content/dam/h-d/images/product-images/merchandise/2024/96005-25vm/96005-25VM_F.jpg", price: "₹849" },
  { id: 7, name: "Saree", img: "https://img.freepik.com/premium-photo/zari-embroidered-red-silk-bridal-saree-indian-clothes_1342603-13343.jpg", price: "₹999" },
  { id: 8, name: "Sweater", img: "https://img.freepik.com/premium-photo/winter-colorfrul-sweater-hoodie_591055-1289.jpg", price: "₹599" },
  { id: 9, name: "Denim Jacket", img: "https://img.freepik.com/premium-photo/magnificent-denim-jacket-isolated-white-background_787273-27859.jpg", price: "₹1099" },
  { id: 10, name: "Shorts", img: "https://img.freepik.com/free-photo/casual-men-short-pants_1203-8186.jpg", price: "₹799" },
  { id: 11, name: "Tops", img: "https://img.freepik.com/premium-photo/showcasing-professional-clothing-with-style-sophistication-isolation-clean-background_1020495-189662.jpg", price: "₹649" },
  { id: 12, name: "Cotton Pant", img: "https://img.freepik.com/premium-photo/3d-mens-fashion-formal-male-pant-mockup-white-background_1174662-7494.jpg", price: "₹899" },
];

const Products = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart(); // from context

  const handleAddToCart = (product) => {
    addToCart(product);          // 1. Add product to cart
    navigate("/cart");           // 2. Redirect to Cart page
  };

  return (
    <div id="products">
      <header id="products-h" className="bg-dark text-white text-center p-5">
        <h1>Our Products</h1>
        <p>Your Destination for Affordable Fashion</p>
      </header>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-3 col-sm-6 mb-4">
            <div className="card h-100">
              <img
                src={product.img}
                alt={product.name}
                className="card-img-top product-img m-3 img-hover"
              />
              <div className="card-body text-center">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.price}</p>
                <div className="d-flex justify-content-between">
                  <button className="btn btn-grad">Buy Now</button>
                  <button
                    className="btn btn-add"
                    aria-label={`Add ${product.name} to Cart`}
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
