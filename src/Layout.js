import { Link, Outlet } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
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
                        <Link id="loginform" to="loginform">Login</Link>
                        <Link id="registerform" to="registrationform">Register</Link>
                    </div>
                </div>
            </div>    
                
            <div id="topmenu">
                <Link id="Link" to="home">Home</Link>
                <div class="subnav">
                    <Link id="Link" to="Bike">Bikes</Link>
                    <div class="subnav-content">
                     <Link class="SubnavLink">TOURINGN BIKES</Link> 
                     <Link class="SubnavLink">NAKED BIKES</Link> 
                     <Link class="SubnavLink">SPORT BIKES</Link> 
                     <Link class="SubnavLink">ADVENTURE BIKES</Link> 
                     <Link class="SubnavLink">CRUISER BIKES</Link> 
                     <Link class="SubnavLink">CAFE RACER BIKES</Link> 
                    </div>
                </div>
                <div class="subnav">
                     <Link id="Link" to="service">Service</Link>
                    <div class="subnav-content">
                     <Link class="SubnavLink">SUBSCRIPTION</Link> 
                     <Link class="SubnavLink">SERVICE MAINTENANCE</Link> 
                     <Link class="SubnavLink">SPARE PART</Link>  
                    </div>
                </div>
                <Link id="Link" to="about">About</Link>
                <Link id="Link" to="contact">Contact</Link>
            </div>  
        
        </div>

        <Outlet/>

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
                    <li>Ride It,Kolar Road,Bhopal,M.P</li>
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
            
            <Link to="datainsert">datainsert</Link>
        </>
    )
}
export default Layout;