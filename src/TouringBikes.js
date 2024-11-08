import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
const TouringBikes=()=>{
    const [mydata, setMydata] = useState([]);
  const navigate = useNavigate();

  const loadData = () => {
    let url = "http://127.0.0.1:8000/bikes/";
    axios.get(url).then((res) => {
      setMydata(res.data);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  const productAns = mydata
    .filter((product) => product.biketype === "touring") // Filter only adventure bikes
    .map((product, index) => {
      return (
        <div key={index} className="shoe-box">
          <img
            src={product.image}
            alt={product.name}
            width="300"
            onClick={() => navigate(`/bikedetails/${product.id}`)}
            style={{ cursor: 'pointer' }}
          />
          <center>
            <h1 className="prod-nam">{product.name}</h1>
            <div className="prod-div">
              <h2 className="prod-pri2">₹{product.price}</h2>
            </div>
          </center>
        </div>
      );
    });

  return (
    <>
      <div className="search-bar-container">
        <form className="search-bar">
          <input
            type="text"
            placeholder="Search for bike...."
            className="search-input"
          />
          <button type="submit" className="search-button">Search</button>
        </form>
      </div>

      <div className="shop-div">
        <div className="product-box">
          {productAns}
        </div>
      </div>
    </>
    )
}
export default TouringBikes;