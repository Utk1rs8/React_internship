import React, { useState } from 'react';
import axios from "axios";
import Bikedatadisplay from './Bikedatadisplay';

const Datainsert = () => {
    const [input, setInput] = useState({
        name: '',
        biketype: '',
        price: '',
        image: null,
        engine_capacity: '',
        mileage: '',
        transmission: '',
        weight: '',
        fuel_tank: '',
        power: '',
        tourque: ''
    });

    const insertData = () => {
        let url = "http://127.0.0.1:8000/bikes/";
        const formData = new FormData();
        formData.append('name', input.name);
        formData.append('biketype', input.biketype);
        formData.append('price', input.price);
        formData.append('image', input.image); // Make sure to handle image correctly
        formData.append('engine_capacity', input.engine_capacity);
        formData.append('mileage', input.mileage);
        formData.append('transmission', input.transmission);
        formData.append('weight', input.weight);
        formData.append('fuel_tank', input.fuel_tank);
        formData.append('power', input.power);
        formData.append('tourque', input.tourque);

        axios.post(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data' // Necessary for file uploads
            }
        })
        .then((res) => {
            alert("Data inserted");
        })
        .catch((error) => {
            console.error("There was an error inserting data:", error);
            alert("Error: " + error.response.data);
        });
    }

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.type === 'file' ? e.target.files[0] : e.target.value;
        setInput(values => ({ ...values, [name]: value }));
    }


    return (
        <>
            <div class="form-container">
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" value={input.name} onChange={handleInput} />
            </div>
            <div class="form-group">
                <label for="biketype">Bike Type:</label>
                <select id="biketype" name="biketype" value={input.biketype} onChange={handleInput}>
                <option value="">Select a bike type</option>
                <option value="touring">Touring</option>
                <option value="naked">Naked</option>
                <option value="sports">Sports</option>
                <option value="adventure">Adventure</option>
                <option value="cruiser">Cruiser</option>
                <option value="caferacer">Cafe Racer</option>
                </select>
            </div>
            <div class="form-group">
                <label for="price">Price:</label>
                <input type="number" id="price" name="price" value={input.price} onChange={handleInput} />
            </div>
            <div class="form-group">
                <label for="image">Image:</label>
                <input type="file" id="image" name="image" onChange={handleInput} />
            </div>
            <div class="form-group">
                <label for="engine_capacity">Engine Capacity:</label>
                <input type="text" id="engine_capacity" name="engine_capacity" value={input.engine_capacity} onChange={handleInput} />
            </div>
            <div class="form-group">
                <label for="mileage">Mileage:</label>
                <input type="text" id="mileage" name="mileage" value={input.mileage} onChange={handleInput} />
            </div>
            <div class="form-group">
                <label for="transmission">Transmission:</label>
                <input type="text" id="transmission" name="transmission" value={input.transmission} onChange={handleInput} />
            </div>
            <div class="form-group">
                <label for="weight">Weight:</label>
                <input type="text" id="weight" name="weight" value={input.weight} onChange={handleInput} />
            </div>
            <div class="form-group">
                <label for="fuel_tank">Fuel Tank:</label>
                <input type="text" id="fuel_tank" name="fuel_tank" value={input.fuel_tank} onChange={handleInput} />
            </div>
            <div class="form-group">
                <label for="power">Power:</label>
                <input type="text" id="power" name="power" value={input.power} onChange={handleInput} />
            </div>
            <div class="form-group">
                <label for="tourque">Torque:</label>
                <input type="text" id="tourque" name="tourque" value={input.tourque} onChange={handleInput} />
            </div>
            <button class="submit-button" onClick={insertData}>Insert</button>
            </div>


            <Bikedatadisplay/>

        </>
    );
};

export default Datainsert;