import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Bike = () => {
  const [mydata, setMydata] = useState([]);  // Holds the full bike data
  const [filteredData, setFilteredData] = useState([]);  // Holds filtered bike data
  const [searchQuery, setSearchQuery] = useState("");  // Holds the search query
  const navigate = useNavigate();

  // Fetch bike data from the server
  const loadData = () => {
    let url = "http://127.0.0.1:8000/bikes/";
    axios.get(url).then((res) => {
      setMydata(res.data);  // Store all bike data
      setFilteredData(res.data);  // Set initial filtered data to all bikes
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  // Handle changes in the search input field
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter bikes based on the search query
  const handleSearchSubmit = (event) => {
    event.preventDefault();

    if (searchQuery === "") {
      // If the search query is empty, reset to display all bikes
      setFilteredData(mydata);
    } else {
      // Filter bikes by name (case-insensitive)
      const filtered = mydata.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(filtered);  // Update filtered data
    }
  };

  // Map through the filtered bikes data to display them
  const productAns = filteredData.map((product, index) => (
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
  ));

  return (
    <>
      {/* Search Bar */}
      <div className="search-bar-container">
        <form className="search-bar" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search for bike...."
            className="search-input"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button type="submit" className="search-button">Search</button>
        </form>
      </div>

      {/* Display the filtered bike list */}
      <div className="shop-div">
        <div className="product-box">
          {productAns}
        </div>
      </div>
    </>
  );
};

export default Bike;
