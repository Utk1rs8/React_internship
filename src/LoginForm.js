import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { FaUserAlt, FaLock } from 'react-icons/fa';   
import axios from 'axios'; 

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('client');
    const [error, setError] = useState('');
    const navigate = useNavigate();  

    const handleSubmit = async () => {
        const url = userType === 'admin'
            ? 'http://127.0.0.1:8000/adminlogin/'  
            : 'http://127.0.0.1:8000/register/';   

        try {
            const response = await axios.get(url);

            const user = response.data.find((u) => u.email === email && u.password === password);

            if (user) {
                // Save user info in localStorage
                localStorage.setItem('user', JSON.stringify({ email: user.email, userType }));
                
                if (userType === 'admin') {
                    navigate('/Adminlogin');  
                } else {
                    navigate('/home');  
                }
            } else {
                setError('Invalid email or password');
            }
        } catch (err) {
            console.error(err);  
            setError('An error occurred while trying to log in.');
        }
    };

    return (
        <div id="Loginform">
            <div className='wrapper'>
                <h1>Login</h1>

                <div>
                    <label>Login As:</label>
                    <select
                        name="client_admin"
                        id="client_admin"
                        value={userType}
                        onChange={(e) => setUserType(e.target.value)}
                    >
                        <option style={{backgroundColor:"black", fontSize:"14px"}} value="client">Client</option>
                        <option style={{backgroundColor:"black", fontSize:"14px"}} value="admin">Admin</option>
                    </select>
                </div>

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

                <div className="remember-forgot">
                    <label><input type="checkbox" /> Remember me</label>
                    <a href="#">Forgot password?</a>
                </div>

                {error && <p style={{ color: 'red' }}>{error}</p>}

                <button onClick={handleSubmit}>Login</button>

                <div className="register-link">
                    <p>Don't have an account? <Link to="/registrationform">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
