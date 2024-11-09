import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SliderUpdate = ({ slider, onClose }) => {
    const [input, setInput] = useState({
        name: slider.name,
        price: slider.price,
        image: null,
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
        formData.append('price', input.price);
        if (input.image) {
            formData.append('image', input.image); // Only append if there's a new file
        }

        try {
            await axios.put(`http://127.0.0.1:8000/slider/${slider.id}/`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            alert('Data updated successfully');
            onClose(); // Close the update form after successful update
        } catch (error) {
            console.error("Error updating data:", error);
        }
    };

    useEffect(() => {
        setInput(slider); // Reset input when slider changes
    }, [slider]);

    return (
        <div className="bike-update-container">
            <h2 className="bike-update-title">Update Slider</h2>
            <div className="bike-update-form">
                <div className="bike-update-form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={input.name} onChange={handleInput} />
                </div>
                <div className="bike-update-form-group">
                    <label htmlFor="price">Price:</label>
                    <input type="number" id="price" name="price" value={input.price} onChange={handleInput} />
                </div>
                <div className="bike-update-form-group">
                    <label htmlFor="image">Image:</label>
                    <input type="file" id="image" name="image" onChange={handleFileInput} />
                </div>
            </div>
            <div className="bike-update-actions">
                <button className="bike-update-button" onClick={updateData}>Update</button>
                <button className="bike-cancel-button" onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
};

export default SliderUpdate;
