import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AccessoriesUpdate = ({ accessory, onClose }) => {
    const [input, setInput] = useState({
        name: accessory.name,
        price: accessory.price,
        image: null, // To handle the image file
    });
    const [imageFile, setImageFile] = useState(null);

    useEffect(() => {
        setInput({
            name: accessory.name,
            price: accessory.price,
            image: null, // Reset the image file when accessory changes
        });
    }, [accessory]);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setInput((prevInput) => ({
            ...prevInput,
            [name]: value,
        }));
    };

    const handleFileInput = (e) => {
        setImageFile(e.target.files[0]);
    };

    const updateData = async () => {
        const formData = new FormData();
        formData.append('name', input.name);
        formData.append('price', input.price);
        if (imageFile) {
            formData.append('image', imageFile); // Only append if there's a new file
        }

        try {
            await axios.put(`http://127.0.0.1:8000/accessories/${accessory.id}/`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            alert('Data updated successfully');
            onClose(); // Close the update form after successful update
        } catch (error) {
            console.error("Error updating data:", error);
        }
    };

    return (
        <div className="update-container">
            <h2>Update Accessory</h2>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={input.name} onChange={handleInput} />
            </div>
            <div className="form-group">
                <label htmlFor="price">Price:</label>
                <input type="number" id="price" name="price" value={input.price} onChange={handleInput} />
            </div>
            <div className="form-group">
                <label htmlFor="image">Image:</label>
                <input type="file" id="image" name="image" onChange={handleFileInput} />
            </div>
            <button className="submit-button" onClick={updateData}>Update</button>
            <button className="cancel-button" onClick={onClose}>Cancel</button> {/* Button to cancel update */}
        </div>
    );
};

export default AccessoriesUpdate;
