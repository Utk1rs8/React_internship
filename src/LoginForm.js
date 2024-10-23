import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // For navigation
import { FaUserAlt, FaLock } from 'react-icons/fa';   // Import icons
import axios from 'axios'; // To make API calls

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('client');  // Default is client
    const [error, setError] = useState('');
    const navigate = useNavigate();  // For navigation

    // Handle login when button is clicked
    const handleSubmit = async () => {
        // Determine the endpoint based on user type
        const url = userType === 'admin'
            ? 'http://127.0.0.1:8000/adminlogin/'  // Admin login endpoint
            : 'http://127.0.0.1:8000/register/';   // Client login endpoint

        try {
            // Make API GET request to fetch user credentials
            const response = await axios.get(url);

            // Assuming the API returns an array of users
            const user = response.data.find((u) => u.email === email && u.password === password);

            if (user) {
                // If credentials match, navigate based on user type
                if (userType === 'admin') {
                    navigate('/Adminlogin');  // Redirect to admin dashboard
                } else {
                    navigate('/home');  // Redirect to client home page
                }
            } else {
                setError('Invalid email or password');
            }
        } catch (err) {
            console.error(err);  // Log the error for debugging
            setError('An error occurred while trying to log in.');
        }
    };

    return (
        <div id="Loginform">
            <div className='wrapper'>
                <h1>Login</h1>

                {/* Login As Selector */}
                <div>
                    <label>Login As:</label>
                    <select
                        name="client_admin"
                        id="client_admin"
                        value={userType}
                        onChange={(e) => setUserType(e.target.value)}
                    >
                        <option value="client">Client</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>

                {/* Email Input */}
                <div className="input-box">
                    <input
                        type="text"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <FaUserAlt className='icon' />
                </div>

                {/* Password Input */}
                <div className="input-box">
                    <input
                        type="password"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <FaLock className='icon' />
                </div>

                {/* Remember Me and Forgot Password */}
                <div className="remember-forgot">
                    <label><input type="checkbox" /> Remember me</label>
                    <a href="#">Forgot password?</a>
                </div>

                {/* Error Message */}
                {error && <p style={{ color: 'red' }}>{error}</p>}

                {/* Login Button - Calls handleSubmit */}
                <button onClick={handleSubmit}>Login</button>

                {/* Register Link */}
                <div className="register-link">
                    <p>Don't have an account? <Link to="/registrationform">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
