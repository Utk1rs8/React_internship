import React, { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaFacebook, FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";

const Layout = () => {
    const [user, setUser] = useState(null); 
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem('user');  
        navigate("/loginform");  
    };

    return (
        <>
            <div id="header">
                <div id="main">
                    <div id="logo">
                        <h1>Ride</h1>
                    </div>

                    <div id="Cartandlog">
                        <div id="cart">
                            <Link to="cartitem" id="carticon"><FaShoppingCart /></Link>
                        </div>

                        <div id="logreg">
                            {user ? (
                                <>
                                    <span>Welcome, {user.email} </span>
                                    <button id='Button-Logout' onClick={handleLogout} > Logout</button>

                                    
                                </>
                            ) : (
                                <>
                                    <Link id="loginform" to="loginform">Login</Link>
                                    <Link id="registerform" to="registrationform">Register</Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                <div id="topmenu">
                    <Link id="Link" to="home">Home</Link>
                    <div className="subnav">
                        <Link id="Link" to="Bike">Bikes</Link>
                        <div className="subnav-content">
                            <Link to="touringbikes" className="SubnavLink">TOURING BIKES</Link>
                            <Link to="nakedbikes" className="SubnavLink">NAKED BIKES</Link>
                            <Link to="sportbikes" className="SubnavLink">SPORT BIKES</Link>
                            <Link to="adventurebikes" className="SubnavLink">ADVENTURE BIKES</Link>
                            <Link to="cruiserbikes" className="SubnavLink">CRUISER BIKES</Link>
                            <Link to="caferacerbikes" className="SubnavLink">CAFE RACER BIKES</Link>
                        </div>
                    </div>
                    <div className="subnav">
                        <Link id="Link" to="service">Service</Link>
                        <div className="subnav-content">
                            <Link to="subscriptionpage" className="SubnavLink">SUBSCRIPTION</Link>
                            <Link className="SubnavLink">SERVICE MAINTENANCE</Link>
                            <Link className="SubnavLink">SPARE PART</Link>
                        </div>
                    </div>
                    <Link id="Link" to="about">About</Link>
                    <Link id="Link" to="contact">Contact</Link>
                </div>
            </div>

            <Outlet />

            <div id="footer">
                <div id="footmain">
                    <div id="foot1">
                        <ul>
                            <li id="li1">CATEGORY</li>
                            <li>Touring Bikes</li>
                            <li>Naked Bikes</li>
                            <li>Sports Bikes</li>
                            <li>Adventure Bikes</li>
                            <li>Cruiser Bikes</li>
                            <li>Cafe Racer Bikes</li>
                        </ul>
                    </div>

                    <div id="foot1">
                        <ul>
                            <li id="li1">USEFUL LINKS</li>
                            <li>Return Policies</li>
                            <li>Announcement</li>
                            <li>Have Issue?</li>
                            <li>Media Kit</li>
                        </ul>
                    </div>

                    <div id="foot1">
                        <ul>
                            <li id="li1">SUPPORT CENTER</li>
                            <li>utkarshchurariya19@gmail.com,</li>
                            <li>nishantmalviya69@gmail.com,</li>
                            <li>devanshuvishwakarma58@gamil.com</li>
                            <li>8982260970</li>
                            <li>Ride It, Kolar Road, Bhopal, M.P</li>
                        </ul>
                    </div>
                </div>

                <div id="logofot">
                    <h1>Ride</h1>
                </div>

                <div id="social">
                    <div id="soci1">
                        <span><FaFacebook /></span>
                    </div>
                    <div id="soci1">
                        <span><FaInstagram /></span>
                    </div>
                    <div id="soci1">
                        <span><FaTwitter /></span>
                    </div>
                    <div id="soci1">
                        <span><FaPinterest /></span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Layout;
