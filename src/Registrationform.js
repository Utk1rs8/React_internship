import React, { useState } from 'react';
import { FaUserAlt, FaLock, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useNavigate } from 'react-router-dom'; // To navigate after successful registration
import axios from "axios";

const Registrationform = () => {
    const [input, setInput] = useState({
        name: '',
        email: '',
        contact: '',
        password: '',
        confirmPassword: ''
    });

    const navigate = useNavigate(); // Hook for navigation

    const insertData = () => {
        const { password, confirmPassword } = input;
    
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
    
        // Validate contact number (10 digits)
        if (!/^\d{10}$/.test(input.contact)) {
            alert("Please enter a valid 10-digit mobile number.");
            return;
        }
    
        let url = "http://127.0.0.1:8000/register/";
        const formData = new FormData();
        formData.append('name', input.name);
        formData.append('email', input.email);
        formData.append('mobile', input.contact); // Changed to 'mobile'
        formData.append('password', input.password);
    
        axios.post(url, formData)
        .then((res) => {
            alert("Registration successful!");
            navigate("/home");
        })
        .catch((error) => {
            console.error("There was an error during registration:", error);
            const errorMessage = typeof error.response.data === 'object' 
                ? JSON.stringify(error.response.data) 
                : error.response.data;
            alert("Error: " + errorMessage);
        });
    }
    

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInput(values => ({ ...values, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        insertData(); // Call insertData on form submission
    }

    return (
        <div id="Registration">
            <div className='wrapper'>
                <div>
                    <h1>Registration</h1>

                    <div className="input-box">
                        <input 
                            type="text" 
                            placeholder="Username" 
                            name="name" 
                            value={input.name} 
                            onChange={handleInput} 
                            required 
                        />
                        <FaUserAlt className='icon'/>
                    </div>

                    <div className="input-box">
                        <input 
                            type="email" 
                            placeholder="Email" 
                            name="email" 
                            value={input.email} 
                            onChange={handleInput} 
                            required 
                        />
                        <MdEmail className='icon'/>
                    </div>

                    <div className='input-box'>
                        <input 
                            type='number' 
                            placeholder='Contact' 
                            name="contact" 
                            value={input.contact} 
                            onChange={handleInput} 
                            required 
                        />
                        <FaPhoneAlt className='icon'/>
                    </div>

                    <div className="input-box">
                        <input 
                            type="password" 
                            placeholder="Password" 
                            name="password" 
                            value={input.password} 
                            onChange={handleInput} 
                            required 
                        />
                        <FaLock className='icon'/>
                    </div>

                    <div className="input-box">
                        <input 
                            type="password" 
                            placeholder="Confirm Password" 
                            name="confirmPassword" 
                            value={input.confirmPassword} 
                            onChange={handleInput} 
                            required 
                        />
                        <FaLock className='icon'/>
                    </div>

                    <button onClick={handleSubmit} type='submit'>Register</button>
                </div>
            </div>
        </div>
    );
}

export default Registrationform;
