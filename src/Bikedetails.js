import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addtoCart } from "./cartSlice";

const BikeDetails = () => {
  const { id } = useParams();
  const dispatch= useDispatch();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/bikes/${id}/`).then((res) => {
      setProduct(res.data);
    });
  }, [id]);

  if (!product) return <div className="loading">Loading...</div>;

  return (
    <>
      <div className="bike-details">
        <div className="bike--image" id="bikeImage">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="bike-info" id="bikeInfo">
          <h1 className="bike-name">{product.name}</h1>
          <h2 className="bike-price">Price: ₹{product.price}</h2>
          <p className="bike-spec" id="bikeType">Bike Type: {product.biketype}</p>
          <p className="bike-spec" id="engineCapacity">Engine Capacity: {product.engine_capacity}</p>
          <p className="bike-spec" id="mileage">Mileage: {product.mileage}</p>
          <p className="bike-spec" id="transmission">Transmission: {product.transmission}</p>
          <p className="bike-spec" id="weight">Weight: {product.weight}</p>
          <p className="bike-spec" id="fuelTank">Fuel Tank: {product.fuel_tank}</p>
          <p className="bike-spec" id="power">Power: {product.power}</p>
          <p className="bike-spec" id="torque">Torque: {product.tourque}</p>
          <button 
            className="add-to-cart-button" 
            id="addToCartButton"
            onClick={() => { dispatch(addtoCart({ id: product.id, name: product.name, price: product.price, image: product.image })); }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default BikeDetails;
