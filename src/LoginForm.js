import React from 'react'
// import './LoginForm.css'
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link,Outlet } from 'react-router-dom';
const LoginForm=()=> {
  return (
   <>
   <div id="Loginform">
   <div className='wrapper'>
        <form action="">
            <h1>Login</h1>
            <div>
            <label></label>
            <select name="client_admin" id="client_admin">
                <option id="Select-Option" value="client">Client</option>
                <option id="Select-Option" value="admin">Admin</option>
            </select>
            </div>
            <div className="input-box">
                <input type="text" placeholder="Username" required/>
                <FaUserAlt className='icon'/>
            </div>
            <div className="input-box">
                <input type="password" placeholder="Password" required/>
                <FaLock className='icon'/>
            </div>
            <div className="remember-forgot">
                <label><input type="checkbox" />Remember me</label>
                <a href="#">Forgot password?</a>
            </div>
            <button type='submit'><Link id='login-button' to="../Adminlogin">Login</Link></button>
            <div className="register-link">
                <p>Don't have an account?<Link to="../registrationform">Register</Link></p>
            </div>
        </form>
    </div>

   </div>
   <Outlet/>
   
   </>
  )
}

export default LoginForm