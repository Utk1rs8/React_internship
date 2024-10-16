import React from 'react'
// import './LoginForm.css'
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link,Outlet } from 'react-router-dom';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Registrationform=()=>{
    return(
        <>
   <div id="Registration">
   <div className='wrapper'>
        <form action="">
            <h1>Registration</h1>
            <div className="input-box">
                <input type="text" placeholder="Username" required/>
                <FaUserAlt className='icon'/>
            </div>
            <div className="input-box">
                <input type="email" placeholder="Email" required/>
                <MdEmail className='icon'/>
            </div>
            <div className='input-box'>
                <input type='tel' placeholder='Contact' required/>
                <FaPhoneAlt className='icon'/>
            </div>
            <div className="input-box">
                <input type="password" placeholder="Password" required/>
                <FaLock className='icon'/>
            </div>
            <div className="input-box">
                <input type="password" placeholder="Confirm Password" required/>
                <FaLock className='icon'/>
            </div>
            <button type='submit'><Link id='login-button' to="">Registration</Link></button>
        </form>
    </div>

   </div>
   <Outlet/>
   
   </>
    )
}

export default Registrationform;