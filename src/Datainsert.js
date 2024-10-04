import React, { useState } from 'react';
import axios from "axios";
const Datainsert= () => {
    const [input, setInput]=useState({});
    const handleInput=(e)=>
    {
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values, [name]:value}));
    }
    const insertData=()=>
    {
        let url="http://127.0.0.1:8000/";
        console.log(input);
        axios.post(url,{name:input.name,price:input.price,image:input.image,engine_capacity:input.engine_capacity,mileage:input.mileage,transmission:input.transmission,weight:input.weight,fuel_tank:input.fuel_tank,power:input.power,tourque:input.tourque})
        .then((res)=>{
            alert("data inserted");
        })
    }

  return (
    <>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={input.name}
          onChange={handleInput}
          required
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={input.price}
          onChange={handleInput}
          required
        />
      </div>
      <div>
        <label>Image:</label>
        <input
          type="file"
          name="image"
          value={input.image}
          onChange={handleInput}
          required
        />
      </div>
      <div>
        <label>Engine Capacity:</label>
        <input
          type="text"
          name="engine_capacity"
          value={input.engine_capacity}
          onChange={handleInput}
          required
        />
      </div>
      <div>
        <label>Mileage:</label>
        <input
          type="text"
          name="mileage"
          value={input.mileage}
          onChange={handleInput}
          required
        />
      </div>
      <div>
        <label>Transmission:</label>
        <input
          type="text"
          name="transmission"
          value={input.transmission}
          onChange={handleInput}
          required
        />
      </div>
      <div>
        <label>Weight:</label>
        <input
          type="text"
          name="weight"
          value={input.weight}
          onChange={handleInput}
          required
        />
      </div>
      <div>
        <label>Fuel Tank:</label>
        <input
          type="text"
          name="fuel_tank"
          value={input.fuel_tank}
          onChange={handleInput}
          required
        />
      </div>
      <div>
        <label>Power:</label>
        <input
          type="text"
          name="power"
          value={input.power}
          onChange={handleInput}
          required
        />
      </div>
      <div>
        <label>Torque:</label>
        <input
          type="text"
          name="tourque"
          value={input.tourque}
          onChange={handleInput}
          required
        />
      </div>
      <button onClick={insertData}>Insert</button>
      </>
  );
};

export default Datainsert;