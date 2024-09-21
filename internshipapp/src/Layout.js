import { Link, Outlet } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";



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
        </>
    )
}
export default Layout;