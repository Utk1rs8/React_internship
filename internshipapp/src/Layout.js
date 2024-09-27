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

        <div class="">
            <div class="Parent-footer">
                <div className="">
                    <h1 className="footer-column-name">Category</h1>
                    <h3 className="footer-column">Tourning Bikes</h3>
                    <h3 className="footer-column">Naked Bikes</h3>
                    <h3 className="footer-column">Sports Bikes</h3>
                    <h3 className="footer-column">Adventure Bikes</h3>
                    <h3 className="footer-column">Cruiser Bikes</h3>
                    <h3 className="footer-column">Cafe Racer Bikes</h3>
                </div>
                <div className="">
                    <h1 className="footer-column-name">Useful Links</h1>
                    <h3 className="footer-column">Return Policies</h3>
                    <h3 className="footer-column">Announcement</h3>
                    <h3 className="footer-column">Have Issue?</h3>
                    <h3 className="footer-column">Media Kit</h3>
                </div>
                <div className="">
                    <h1 className="footer-column-name">Support Center</h1>
                    <h3 className="footer-column">utkarshchurariya19@gmail.com</h3>
                    <h3 className="footer-column">8982260970</h3>
                    <h3 className="footer-column">Ride It,Kolar Road,Bhopal,M.P</h3>
                </div>
                <div>
                    <h1 className="footer-column-name">Follow Us</h1>
                    <div className="">
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
        <div class="end-footer">
            <div id="logo">
                <h1>Ride</h1>
            </div>            
            <div>
                <h1 className="footer-column-name">@2024 RIDE IT,All Rights Reserved.</h1>
            </div>
        </div>
        </div>

        </>
    )
}
export default Layout;