import React from "react";
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import "../App.css"
const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();

  return (
    <div>
      <header className="bg-dark text-white text-center p-4 Cart-h ">            
      <h2 className="text-center mb-4">🛒 Your Cart</h2>
      </header>

      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <>
          <div className="row">
            {cartItems.map((item) => (
              <div key={item.id} className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm m-4 ">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "contain" }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.price}</p>

                    <Link to={`/product/${item.id}`} className="btn btn-outline-primary btn-sm mb-2">
                      View Full Product
                    </Link>

                    <br />

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Back to Shopping button */}
          <div className="text-center mt-4">
            <button className="btn btn-secondary" onClick={() => navigate("/")}>
              ← Back to Shopping
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
