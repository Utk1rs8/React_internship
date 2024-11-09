import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BuyNow = () => {
  const [input, setInput] = useState({});
  const [paymethod, setPaymethod] = useState("");
  const navigate = useNavigate();
  const cartData = useSelector((state) => state.mycart.cart);

  let proname;
  let brand;
  let price;
  let totalamount;
  const ans = cartData.map((key) => {
    proname = key.name;
    brand = key.brand;
    price = key.price;
    totalamount = key.price * key.qnty;
  });

  const paymentDone = () => {
    let url = "http://localhost:4000/consumers";
    let customerID = Date.now();
    axios
      .post(url, {
        customer_id: customerID,
        Name: input.name,
        City: input.city,
        Contact: input.conno,
        Address: input.address,
      })
      .then((res) => {
        alert("Customer saved!");
      });

    navigate("/paydone");
  };

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };

  return (
    <div className="buy-now-container">
      <div className="buy-now-form">
        <h1 className="buy-now-title">Your Shipping Address</h1>
        <div className="buy-now-input-group">
          <label htmlFor="name" className="input-label">
            Enter Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={input.name}
            className="input-field"
            onChange={handleInput}
          />
        </div>
        <div className="buy-now-input-group">
          <label htmlFor="city" className="input-label">
            Enter City:
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={input.city}
            className="input-field"
            onChange={handleInput}
          />
        </div>
        <div className="buy-now-input-group">
          <label htmlFor="conno" className="input-label">
            Enter Contact No:
          </label>
          <input
            type="text"
            id="conno"
            name="conno"
            value={input.conno}
            className="input-field"
            onChange={handleInput}
          />
        </div>
        <div className="buy-now-input-group">
          <label htmlFor="address" className="input-label">
            Enter Address:
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={input.address}
            className="input-field"
            onChange={handleInput}
          />
        </div>
      </div>
      <div className="buy-now-actions">
        <button className="payment-button" onClick={paymentDone}>
          Make Payment
        </button>
      </div>
    </div>
  );
};

export default BuyNow;
