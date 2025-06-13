import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product, selectedSize } = location.state || {};

  const [paymentMethod, setPaymentMethod] = useState("");
  const [upiId, setUpiId] = useState("");
  const [cardDetails, setCardDetails] = useState({
    number: "",
    expiry: "",
    cvv: ""
  });

  const [doorNo, setDoorNo] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [phone, setPhone] = useState("");

  if (!product || !selectedSize) {
    navigate("/");
    return null;
  }

  const handlePayment = async () => {
    if (!doorNo || !city || !pincode || !phone) {
      alert("Please fill in all the address fields.");
      return;
    }

    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }

    if (paymentMethod === "UPI" && !upiId) {
      alert("Please enter your UPI ID.");
      return;
    }

    if (paymentMethod === "Card") {
      const { number, expiry, cvv } = cardDetails;
      if (!number || !expiry || !cvv) {
        alert("Please fill in all the card details.");
        return;
      }
    }

    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    const newOrder = {
      ...product,
      selectedSize,
      address: { doorNo, city, pincode, phone },
      paymentMethod,
      date: new Date().toISOString()
    };

    // Save to local storage
    orders.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(orders));

    // Save to MongoDB backend
    try {
      await fetch("https://fashion-backend-g6f0.onrender.com/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newOrder),
      });
    } catch (error) {
      console.error("Failed to save order to backend:", error);
    }

    alert("Payment successful! Redirecting to your orders...");
    navigate("/account/orders");
  };

  const qrImage = `https://api.qrserver.com/v1/create-qr-code/?data=upi://pay?pa=7639019726@upi&pn=User&am=${product.price}&size=200x200`;

  return (
    <div className="container mt-5">
      <h2 className="mb-4">💰 Payment Page</h2>
      <div className="card shadow p-4">
        <h4>{product.name}</h4>
        <p>Price: ₹{product.price}</p>
        <p>Selected Size: {selectedSize}</p>

        <hr />
        <h5 className="mb-3">🏠 Delivery Address</h5>
        <div className="mb-3">
          <label className="form-label">Door No. / Street:</label>
          <input
            type="text"
            className="form-control mb-2"
            value={doorNo}
            onChange={(e) => setDoorNo(e.target.value)}
          />

          <label className="form-label">City:</label>
          <input
            type="text"
            className="form-control mb-2"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <label className="form-label">Pincode:</label>
          <input
            type="text"
            className="form-control mb-2"
            maxLength="6"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
          />

          <label className="form-label">Phone Number:</label>
          <input
            type="text"
            className="form-control"
            maxLength="10"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <hr />
        <p className="mb-2">💳 Choose a payment method:</p>
        <select
          className="form-select mb-3"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="">-- Select Payment Method --</option>
          <option value="Card">Credit/Debit Card</option>
          <option value="UPI">UPI</option>
          <option value="COD">Cash on Delivery</option>
        </select>

        {paymentMethod === "Card" && (
          <div className="mb-3">
            <label className="form-label">Card Number:</label>
            <input
              type="text"
              className="form-control mb-2"
              maxLength="16"
              value={cardDetails.number}
              onChange={(e) =>
                setCardDetails({ ...cardDetails, number: e.target.value })
              }
            />

            <label className="form-label">Expiry Date:</label>
            <input
              type="month"
              className="form-control mb-2"
              value={cardDetails.expiry}
              onChange={(e) =>
                setCardDetails({ ...cardDetails, expiry: e.target.value })
              }
            />

            <label className="form-label">CVV:</label>
            <input
              type="password"
              className="form-control"
              maxLength="3"
              value={cardDetails.cvv}
              onChange={(e) =>
                setCardDetails({ ...cardDetails, cvv: e.target.value })
              }
            />
          </div>
        )}

        {paymentMethod === "UPI" && (
          <>
            <div className="mb-3">
              <label className="form-label">UPI ID:</label>
              <input
                type="text"
                className="form-control"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Scan to Pay:</label>
              <div>
                <img src={qrImage} alt="QR Code" />
                <p className="text-muted">Scan with any UPI app</p>
              </div>
            </div>
          </>
        )}

        <button className="btn btn-success mt-3 w-100" onClick={handlePayment}>
          💳 Pay Now
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
