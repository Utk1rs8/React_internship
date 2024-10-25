import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const BikeDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/bikes/${id}/`).then((res) => {
      setProduct(res.data);
    });
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <>
    <div>
      <img src={product.image} alt={product.name} width="500" />
    </div>
    <div>
      <h1>{product.name}</h1>
      <h1>Price: ₹{product.price}</h1>
      <h1>BikeType:{product.biketype}</h1>
      <h1>Engine Capacity:{product.engine_capacity}</h1>
      <h1>Mileage:{product.mileage}</h1>
      <h1>Transmission:{product.transmission}</h1>
      <h1>Weight:{product.weight}</h1>
      <h1>Fuel Tank:{product.fuel_tank}</h1>
      <h1>Power:{product.power}</h1>
      <h1>Torque:{product.tourque}</h1>
    </div>
    </>
  );
};

export default BikeDetails;
