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

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Make API request to validate username and password
            const response = await axios.post('http://127.0.0.1:8000/adminlogin/', {
                email,
                password,
            });

            console.log(response.data); // Log the response to check the structure

            if (response.data.success) {  // Make sure `success` exists in the API response
                // Based on user type, navigate to the appropriate page
                if (userType === 'admin') {
                    navigate('/Adminlogin');  // Redirect to admin dashboard
                } else {
                    navigate('/home');  // Redirect to client home page
                }
            } else {
                setError('Invalid username or password');
            }
        } catch (err) {
            console.error(err);  // Log the error for debugging
            setError('An error occurred while trying to log in.');
        }
    };

    return (
        <div id="Loginform">
            <div className='wrapper'>
                <form onSubmit={handleSubmit}>
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

                    {/* Username Input */}
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

                    {/* Login Button */}
                    <button type="submit">Login</button>

                    {/* Register Link */}
                    <div className="register-link">
                        <p>Don't have an account? <Link to="/registrationform">Register</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;