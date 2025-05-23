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

  const handlePayment = () => {
    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }

    if (!doorNo.trim() || !city.trim() || !pincode.trim() || !phone.trim()) {
      alert("Please fill in all delivery details.");
      return;
    }

    if (paymentMethod === "UPI" && !upiId.trim()) {
      alert("Please enter your UPI ID.");
      return;
    }

    if (paymentMethod === "Card") {
      const { number, expiry, cvv } = cardDetails;
      if (!number || !expiry || !cvv) {
        alert("Please enter all card details.");
        return;
      }
    }

    // Save order in localStorage
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    const newOrder = {
      ...product,
      selectedSize,
      address: { doorNo, city, pincode, phone },
      paymentMethod,
      date: new Date().toISOString(),
    };
    orders.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(orders));

    // Redirect to Orders Page
    navigate("/account/orders");
  };

  const qrImage = `https://api.qrserver.com/v1/create-qr-code/?data=upi://pay?pa=7639019726@upi&pn=User&am=${product.price}&size=200x200`;

  return (
    <div className="container mt-5">
      <h2>Payment Page</h2>
      <div className="card p-4">
        <h4>{product.name}</h4>
        <p>Price: {product.price}</p>
        <p>Selected Size: {selectedSize}</p>

        <hr />
        <h5>🏠 Delivery Address</h5>
        <div className="mb-3">
          <label>Door No. / Street:</label>
          <input
            type="text"
            className="form-control mb-2"
            value={doorNo}
            onChange={(e) => setDoorNo(e.target.value)}
            placeholder="e.g., 12/34 Main Street"
          />
          <label>City:</label>
          <input
            type="text"
            className="form-control mb-2"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city"
          />
          <label>Pincode:</label>
          <input
            type="text"
            className="form-control mb-2"
            maxLength="6"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            placeholder="e.g., 641001"
          />
          <label>Phone Number:</label>
          <input
            type="text"
            className="form-control"
            maxLength="10"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="e.g., 9876543210"
          />
        </div>

        <hr />
        <p>💳 Choose a payment method:</p>
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

        {/* Card Inputs */}
        {paymentMethod === "Card" && (
          <div className="mb-3">
            <label>Card Number:</label>
            <input
              type="text"
              className="form-control mb-2"
              maxLength="16"
              placeholder="Enter 16-digit card number"
              value={cardDetails.number}
              onChange={(e) =>
                setCardDetails({ ...cardDetails, number: e.target.value })
              }
            />
            <label>Expiry Date:</label>
            <input
              type="month"
              className="form-control mb-2"
              value={cardDetails.expiry}
              onChange={(e) =>
                setCardDetails({ ...cardDetails, expiry: e.target.value })
              }
            />
            <label>CVV:</label>
            <input
              type="password"
              className="form-control"
              maxLength="3"
              placeholder="Enter CVV"
              value={cardDetails.cvv}
              onChange={(e) =>
                setCardDetails({ ...cardDetails, cvv: e.target.value })
              }
            />
          </div>
        )}

        {/* UPI Inputs */}
        {paymentMethod === "UPI" && (
          <>
            <div className="mb-3">
              <label>UPI ID:</label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g., yourname@upi"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label>Scan to Pay:</label>
              <br />
              <img src={qrImage} alt="UPI QR" />
              <p className="text-muted">Scan with any UPI app</p>
            </div>
          </>
        )}

        <button className="btn btn-success mt-3" onClick={handlePayment}>
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
