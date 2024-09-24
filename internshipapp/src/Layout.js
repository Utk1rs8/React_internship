import { Link, Outlet } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSnapchatSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Layout=()=>{
    return(
        <>
        <div id="header">
            <div id="main">
                <div id="logo">
                   <h1>Ride</h1>
                </div>

                <div id="Cartandlog">
                     <div id="cart">
                        <Link id="carticon"><FaShoppingCart/></Link>
                    </div>
                     <div id="logreg">
                        <h1>Login/</h1>
                        <h1>Register</h1>
                    </div>
                </div>
            </div>    
                
            <div id="topmenu">
                <Link id="Link" to="home">Home</Link>
                <Link id="Link" to="Bike">Bikes</Link>
                <Link id="Link" to="service">Service</Link>
                <Link id="Link" to="about">About</Link>
                <Link id="Link" to="contact">Contact</Link>
            </div>  
        
        </div>

        <Outlet/>

        <div class="mlk">
            <div class="ko">
                <div className="footer-box">
                    <h1 className="fo-wri">Category</h1>
                    <h3 className="fo-para">Running Shoes</h3>
                    <h3 className="fo-para">Yoga Shoes</h3>
                    <h3 className="fo-para">Sports Shoes</h3>
                    <h3 className="fo-para">Casual Shoes</h3>
                </div>
                <div className="footer-box">
                    <h1 className="fo-wri">Business</h1>
                    <h3 className="fo-para">Company Profile</h3>    
                    <h3 className="fo-para">Social Responsibility</h3>
                    <h3 className="fo-para">Brand Kit</h3>
                    <h3 className="fo-para">Media</h3>
                    <h3 className="fo-para">Employee</h3>
                    <h3 className="fo-para">Privacy</h3>
                    <h3 className="fo-para">Terms and Conditions</h3>
                </div>
                <div className="footer-box">
                    <h1 className="fo-wri">Useful Links</h1>
                    <h3 className="fo-para">Return Policies</h3>
                    <h3 className="fo-para">Announcement</h3>
                    <h3 className="fo-para">Have Issue?</h3>
                    <h3 className="fo-para">Media Kit</h3>
                </div>
                <div className="footer-box">
                    <h1 className="fo-wri">Support Center</h1>
                    <h3 className="fo-para">utkarshchurariya19@gmail.com</h3>
                    <h3 className="fo-para">8982260970</h3>
                    <h3 className="fo-para">Ride It,Kolar Road,Bhopal,M.P</h3>
                </div>
                <div>
                    <h1 className="fo-wri">Follow Us</h1>
                    <div className="f-icon">
                        <FaInstagram />
                        <FaSnapchatSquare />
                        <br/>
                        <FaWhatsappSquare />
                        <FaSquareXTwitter />
                    </div>
                </div>
        </div>
        <br/>
        <br/>
        <br/>
        <div class="kkk">
            <div id="logo">
                <h1>Ride</h1>
            </div>            
            <div>
                <h1 className="fo-wri">@2024 RIDE IT,All Rights Reserved.</h1>
            </div>
        </div>
        </div>

        </>
    )
}
export default Layout;