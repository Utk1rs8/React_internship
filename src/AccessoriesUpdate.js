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
        <div className="accessory-update-container">
            <h2 className="accessory-update-title">Update Accessory</h2>
            <div className="accessory-update-form">
                {[ 
                    { label: 'Name', type: 'text', name: 'name' },
                    { label: 'Price', type: 'number', name: 'price' },
                    { label: 'Image', type: 'file', name: 'image', onChange: handleFileInput },
                ].map((field) => (
                    <div className="accessory-update-form-group" key={field.name}>
                        <label htmlFor={field.name}>{field.label}:</label>
                        {field.type === 'file' ? (
                            <input
                                type={field.type}
                                id={field.name}
                                name={field.name}
                                onChange={field.onChange || handleFileInput}
                            />
                        ) : (
                            <input
                                type={field.type}
                                id={field.name}
                                name={field.name}
                                value={input[field.name]}
                                onChange={handleInput}
                            />
                        )}
                    </div>
                ))}
            </div>
            <div className="accessory-update-actions">
                <button className="accessory-update-button" onClick={updateData}>Update</button>
                <button className="accessory-cancel-button" onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
};

export default AccessoriesUpdate;
