import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BuyNow = () => {
  const [input, setInput] = useState({
    name: "",
    city: "",
    conno: "",
    address: "",
  });
  const [paymethod, setPaymethod] = useState("credit-card");
  const [totalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate();
  const cartData = useSelector((state) => state.mycart.cart);

  // Calculate total amount
  useEffect(() => {
    const total = cartData.reduce((acc, item) => acc + item.price * item.qnty, 0);
    setTotalAmount(total);
  }, [cartData]);

  // Handles form input changes
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((values) => ({ ...values, [name]: value }));
  };

  // Handles payment method selection
  const handlePaymentMethodChange = (e) => {
    setPaymethod(e.target.value);
  };

  // Form submission and order saving
  const paymentDone = async () => {
    if (!input.name || !input.city || !input.conno || !input.address) {
      alert("Please fill in all the fields");
      return;
    }
    
    const url = "http://localhost:4000/consumers";
    const customerID = Date.now();

    try {
      await axios.post(url, {
        customer_id: customerID,
        Name: input.name,
        City: input.city,
        Contact: input.conno,
        Address: input.address,
        Paymethod: paymethod,
        TotalAmount: totalAmount,
      });
      alert("Order placed successfully!");
      navigate("/paydone");
    } catch (error) {
      console.error("Error placing order:", error);
      alert("There was an error processing your order. Please try again.");
    }
  };

  return (
    <div className="buy-now-container">
      <h1 className="buy-now-title">Checkout</h1>

      <div className="buy-now-section">
        <h2>Shipping Address</h2>
        <div className="buy-now-input-group">
          <label htmlFor="name" className="input-label">Enter Name:</label>
          <input type="text" id="name" name="name" value={input.name} className="input-field" onChange={handleInput} />
        </div>
        <div className="buy-now-input-group">
          <label htmlFor="city" className="input-label">Enter City:</label>
          <input type="text" id="city" name="city" value={input.city} className="input-field" onChange={handleInput} />
        </div>
        <div className="buy-now-input-group">
          <label htmlFor="conno" className="input-label">Enter Contact No:</label>
          <input type="text" id="conno" name="conno" value={input.conno} className="input-field" onChange={handleInput} />
        </div>
        <div className="buy-now-input-group">
          <label htmlFor="address" className="input-label">Enter Address:</label>
          <input type="text" id="address" name="address" value={input.address} className="input-field" onChange={handleInput} />
        </div>
      </div>

      <div className="buy-now-section">
        <h2>Order Summary</h2>
        <ul className="order-summary-list">
          {cartData.map((item, index) => (
            <li key={index} className="order-summary-item">
              {item.name} - ₹{item.price}
            </li>
          ))}
        </ul>
        <p className="order-summary-total">Total Amount: ₹{totalAmount.toFixed(2)}</p>
      </div>
      <div className="buy-now-actions">
        <button className="payment-button" onClick={paymentDone}>Confirm and Pay</button>
      </div>
    </div>
  );
};

export default BuyNow;
