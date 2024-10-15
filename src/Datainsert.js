import React, { useState } from 'react';
import axios from "axios";

const Datainsert = () => {
    const [input, setInput] = useState({});
    const [imageFile, setImageFile] = useState(null); // New state for file

    const insertData = () => {
        let url = "http://127.0.0.1:8000/bikes/";
        console.log(input);

        // Create FormData object for handling files
        const formData = new FormData();
        formData.append('name', input.name);
        formData.append('price', input.price);
        formData.append('image', imageFile); // Image file handled separately
        formData.append('engine_capacity', input.engine_capacity);
        formData.append('mileage', input.mileage);
        formData.append('transmission', input.transmission);
        formData.append('weight', input.weight);
        formData.append('fuel_tank', input.fuel_tank);
        formData.append('power', input.power);
        formData.append('tourque', input.tourque); // Kept 'tourque' as per your original
        formData.append('biketype', input.biketype); // Changed back to 'tourque'

        axios.post(url, formData)
            .then((res) => {
                alert("Data inserted");
            })
            .catch((error) => {
                console.error("There was an error inserting data:", error);
            });
    }

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInput(values => ({ ...values, [name]: value }));
    }

    const handleFileInput = (e) => {
        setImageFile(e.target.files[0]); // Update the image file state
    }

    return (
        <>
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={input.name || ''} onChange={handleInput} />
            </div>
            <div>
                <label>Bike Type:</label>
            <select name="biketype" id="biketype">
                <option value="touring">Touring</option>
                <option value="naked">Naked</option>
                <option value="sports">Sports</option>
                <option value="adventure">Adventure</option>
                <option value="curiser">Curiser</option>
                <option value="caferacer">Cafe racer</option>
            </select>
            </div>
            <div>
                <label>Price:</label>
                <input type="number" name="price" value={input.price || ''} onChange={handleInput} />
            </div>
            <div>
                <label>Image:</label>
                <input type="file" name="image" onChange={handleFileInput} /> {/* File input */}
            </div>
            <div>
                <label>Engine Capacity:</label>
                <input type="text" name="engine_capacity" value={input.engine_capacity || ''} onChange={handleInput} />
            </div>
            <div>
                <label>Mileage:</label>
                <input type="text" name="mileage" value={input.mileage || ''} onChange={handleInput} />
            </div>
            <div>
                <label>Transmission:</label>
                <input type="text" name="transmission" value={input.transmission || ''} onChange={handleInput} />
            </div>
            <div>
                <label>Weight:</label>
                <input type="text" name="weight" value={input.weight || ''} onChange={handleInput} />
            </div>
            <div>
                <label>Fuel Tank:</label>
                <input type="text" name="fuel_tank" value={input.fuel_tank || ''} onChange={handleInput} />
            </div>
            <div>
                <label>Power:</label>
                <input type="text" name="power" value={input.power || ''} onChange={handleInput} />
            </div>
            <div>
                <label>Tourque:</label> {/* Changed label back to 'Tourque' */}
                <input type="text" name="tourque" value={input.tourque || ''} onChange={handleInput} />
            </div>
            <button onClick={insertData}>Insert</button>
        </>
    );
};

export default Datainsert;
