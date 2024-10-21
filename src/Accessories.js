import React, { useState } from 'react';
import axios from "axios";


const Accessories=()=>{
    const [input, setInput] = useState({});
    const [imageFile, setImageFile] = useState(null); // New state for file

    const insertData = () => {
        let url = "http://127.0.0.1:8000/accessories/";
        console.log(input);

        // Create FormData object for handling files
        const formData = new FormData();
        formData.append('image', imageFile); // Image file handled separately
        formData.append('name', input.name);
        formData.append('price', input.price);

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


    return(
        <>
             <div>
                <label>Name:</label>
                <input type="text" name="name" value={input.name || ''} onChange={handleInput} />
            </div>
            <div>
                <label>Price:</label>
                <input type="number" name="price" value={input.price || ''} onChange={handleInput} />
            </div>
            <div>
                <label>Image:</label>
                <input type="file" name="image" onChange={handleFileInput} /> {/* File input */}
            </div>
            <button onClick={insertData}>Insert</button>


        </>
    )
}
export default Accessories;