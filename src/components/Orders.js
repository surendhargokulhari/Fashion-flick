import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  // Load orders from localStorage
  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  const handleCancelOrder = async (index) => {
    const orderToCancel = orders[index];

    // Optimistically update local state and localStorage
    const updatedOrders = [...orders];
    updatedOrders.splice(index, 1);
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));

    // Delete from MongoDB if it has a _id
    if (orderToCancel._id) {
      try {
        const res = await fetch(`https://fashion-backend-yvih.onrender.com/api/orders/${orderToCancel._id}`, {
          method: "DELETE",
        });

        if (!res.ok) {
          throw new Error("Server error during deletion");
        }

        console.log("✅ Order deleted from MongoDB");
        alert("Order cancelled successfully!");
      } catch (error) {
        console.error("❌ Failed to delete from MongoDB:", error);
        alert("Failed to cancel order from server.");
      }
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Your Orders</h2>

      {orders.length === 0 ? (
        <>
          <p>No orders yet.</p>
          <button className="btn btn-primary" onClick={() => navigate("/")}>
            Back to Shopping
          </button>
        </>
      ) : (
        <>
          <div className="row">
            {orders.map((order, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card h-100">
                  <img
                    src={order.img}
                    alt={order.name}
                    className="card-img-top"
                    style={{ objectFit: "contain", height: "200px" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{order.name}</h5>
                    <p className="card-text">Price: ₹{order.price}</p>
                    <p className="card-text">Size: {order.selectedSize}</p>
                    <p className="card-text">
                      Ordered on:{" "}
                      {new Date(order.date).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                    <button
                      className="btn btn-danger mt-auto"
                      onClick={() => handleCancelOrder(index)}
                    >
                      Cancel Order
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="btn btn-primary" onClick={() => navigate("/")}>
            Back to Shopping
          </button>
        </>
      )}
    </div>
  );
};

export default Orders;
