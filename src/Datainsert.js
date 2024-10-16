import React, { useState } from 'react';
import axios from "axios";

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
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={input.name} onChange={handleInput} />
            </div>
            <div>
                <label>Bike Type:</label>
                <select name="biketype" value={input.biketype} onChange={handleInput}>
                    <option value="">Select a bike type</option>
                    <option value="touring">Touring</option>
                    <option value="naked">Naked</option>
                    <option value="sports">Sports</option>
                    <option value="adventure">Adventure</option>
                    <option value="cruiser">Cruiser</option>
                    <option value="caferacer">Cafe Racer</option>
                </select>
            </div>
            <div>
                <label>Price:</label>
                <input type="number" name="price" value={input.price} onChange={handleInput} />
            </div>
            <div>
                <label>Image:</label>
                <input type="file" name="image" onChange={handleInput} />
            </div>
            <div>
                <label>Engine Capacity:</label>
                <input type="text" name="engine_capacity" value={input.engine_capacity} onChange={handleInput} />
            </div>
            <div>
                <label>Mileage:</label>
                <input type="text" name="mileage" value={input.mileage} onChange={handleInput} />
            </div>
            <div>
                <label>Transmission:</label>
                <input type="text" name="transmission" value={input.transmission} onChange={handleInput} />
            </div>
            <div>
                <label>Weight:</label>
                <input type="text" name="weight" value={input.weight} onChange={handleInput} />
            </div>
            <div>
                <label>Fuel Tank:</label>
                <input type="text" name="fuel_tank" value={input.fuel_tank} onChange={handleInput} />
            </div>
            <div>
                <label>Power:</label>
                <input type="text" name="power" value={input.power} onChange={handleInput} />
            </div>
            <div>
                <label>Tourque:</label>
                <input type="text" name="tourque" value={input.tourque} onChange={handleInput} />
            </div>
            <button onClick={insertData}>Insert</button>
        </>
    );
};

export default Datainsert;