import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataUpdate = ({ bike, onClose }) => {
    const [input, setInput] = useState({
        name: bike.name,
        biketype: bike.biketype,
        price: bike.price,
        image: null,
        engine_capacity: bike.engine_capacity,
        mileage: bike.mileage,
        transmission: bike.transmission,
        weight: bike.weight,
        fuel_tank: bike.fuel_tank,
        power: bike.power,
        tourque: bike.tourque,
    });

    const handleInput = (e) => {
        const { name, value } = e.target;
        setInput((prevInput) => ({
            ...prevInput,
            [name]: value,
        }));
    };

    const handleFileInput = (e) => {
        setInput((prevInput) => ({
            ...prevInput,
            image: e.target.files[0],
        }));
    };

    const updateData = async () => {
        const formData = new FormData();
        formData.append('name', input.name);
        formData.append('biketype', input.biketype);
        formData.append('price', input.price);
        if (input.image) {
            formData.append('image', input.image); // Only append if there's a new file
        }
        formData.append('engine_capacity', input.engine_capacity);
        formData.append('mileage', input.mileage);
        formData.append('transmission', input.transmission);
        formData.append('weight', input.weight);
        formData.append('fuel_tank', input.fuel_tank);
        formData.append('power', input.power);
        formData.append('tourque', input.tourque);

        try {
            await axios.put(`http://127.0.0.1:8000/bikes/${bike.id}/`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            alert('Data updated successfully');
            onClose(); // Close the update form after successful update
        } catch (error) {
            console.error("Error updating data:", error);
        }
    };

    useEffect(() => {
        setInput(bike); // Reset input when bike changes
    }, [bike]);

    return (
        <div className="update-container">
            <h2>Update Bike</h2>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={input.name} onChange={handleInput} />
            </div>
            <div className="form-group">
                <label htmlFor="biketype">Bike Type:</label>
                <select id="biketype" name="biketype" value={input.biketype} onChange={handleInput}>
                    <option value="touring">Touring</option>
                    <option value="naked">Naked</option>
                    <option value="sports">Sports</option>
                    <option value="adventure">Adventure</option>
                    <option value="cruiser">Cruiser</option>
                    <option value="caferacer">Cafe Racer</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="price">Price:</label>
                <input type="number" id="price" name="price" value={input.price} onChange={handleInput} />
            </div>
            <div className="form-group">
                <label htmlFor="image">Image:</label>
                <input type="file" id="image" name="image" onChange={handleFileInput} />
            </div>
            <div className="form-group">
                <label htmlFor="engine_capacity">Engine Capacity:</label>
                <input type="text" id="engine_capacity" name="engine_capacity" value={input.engine_capacity} onChange={handleInput} />
            </div>
            <div className="form-group">
                <label htmlFor="mileage">Mileage:</label>
                <input type="text" id="mileage" name="mileage" value={input.mileage} onChange={handleInput} />
            </div>
            <div className="form-group">
                <label htmlFor="transmission">Transmission:</label>
                <input type="text" id="transmission" name="transmission" value={input.transmission} onChange={handleInput} />
            </div>
            <div className="form-group">
                <label htmlFor="weight">Weight:</label>
                <input type="text" id="weight" name="weight" value={input.weight} onChange={handleInput} />
            </div>
            <div className="form-group">
                <label htmlFor="fuel_tank">Fuel Tank:</label>
                <input type="text" id="fuel_tank" name="fuel_tank" value={input.fuel_tank} onChange={handleInput} />
            </div>
            <div className="form-group">
                <label htmlFor="power">Power:</label>
                <input type="text" id="power" name="power" value={input.power} onChange={handleInput} />
            </div>
            <div className="form-group">
                <label htmlFor="tourque">Torque:</label>
                <input type="text" id="tourque" name="tourque" value={input.tourque} onChange={handleInput} />
            </div>
            <button className="submit-button" onClick={updateData}>Update</button>
            <button className="cancel-button" onClick={onClose}>Cancel</button>
        </div>
    );
};

export default DataUpdate;
