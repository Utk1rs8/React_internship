import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BikeDataUpdate = ({ bike, onClose }) => {
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
        torque: bike.torque,
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
            formData.append('image', input.image);
        }
        formData.append('engine_capacity', input.engine_capacity);
        formData.append('mileage', input.mileage);
        formData.append('transmission', input.transmission);
        formData.append('weight', input.weight);
        formData.append('fuel_tank', input.fuel_tank);
        formData.append('power', input.power);
        formData.append('torque', input.torque);

        try {
            await axios.put(`http://127.0.0.1:8000/bikes/${bike.id}/`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            alert('Data updated successfully');
            onClose();
        } catch (error) {
            console.error("Error updating data:", error);
        }
    };

    useEffect(() => {
        setInput(bike);
    }, [bike]);

    return (
        <div className="bike-update-container">
            <h2 className="bike-update-title">Update Bike</h2>
            <div className="bike-update-form">
                {[
                    { label: 'Name', type: 'text', name: 'name' },
                    { label: 'Bike Type', type: 'select', name: 'biketype', options: ['touring', 'naked', 'sports', 'adventure', 'cruiser', 'caferacer'] },
                    { label: 'Price', type: 'number', name: 'price' },
                    { label: 'Image', type: 'file', name: 'image', onChange: handleFileInput },
                    { label: 'Engine Capacity', type: 'text', name: 'engine_capacity' },
                    { label: 'Mileage', type: 'text', name: 'mileage' },
                    { label: 'Transmission', type: 'text', name: 'transmission' },
                    { label: 'Weight', type: 'text', name: 'weight' },
                    { label: 'Fuel Tank', type: 'text', name: 'fuel_tank' },
                    { label: 'Power', type: 'text', name: 'power' },
                    { label: 'Torque', type: 'text', name: 'torque' },
                ].map((field) => (
                    <div className="bike-update-form-group" key={field.name}>
                        <label htmlFor={field.name}>{field.label}:</label>
                        {field.type === 'select' ? (
                            <select id={field.name} name={field.name} value={input[field.name]} onChange={handleInput}>
                                {field.options.map((option) => (
                                    <option value={option} key={option}>{option.charAt(0).toUpperCase() + option.slice(1)}</option>
                                ))}
                            </select>
                        ) : (
                            <input
                                type={field.type}
                                id={field.name}
                                name={field.name}
                                value={field.type === 'file' ? undefined : input[field.name]}
                                onChange={field.onChange || handleInput}
                            />
                        )}
                    </div>
                ))}
            </div>
            <div className="bike-update-actions">
                <button className="bike-update-button" onClick={updateData}>Update</button>
                <button className="bike-cancel-button" onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
};

export default BikeDataUpdate;
