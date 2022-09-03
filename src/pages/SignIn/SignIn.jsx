import React from 'react';
import "./signin.css";
import logo from "../../assets/logo.png"

import {Link} from "react-router-dom"

const SignIn = () => {
  return (
    <div className='signin'>
      
       <img className='signinLogo' src={logo} alt='' />
      
       <div className='signinWrapper'>
           <h1 className='signinWrapperTitle'>Sign In</h1>

           <input
            className='signinWrapperInput'
            type="email"
            placeholder='E-mail'>
           </input>

           <input
            className='signinWrapperInput'
            type="password"
            placeholder='Password'>
           </input>

           <button className='signinWrapperButton'>Sign In</button>

           <span className='signinWrapperText'>Don't you have an account?</span>
           <Link to="/signup" style={{textDecoration: "none", color:"inherit", fontSize:"16px"}}>Sign Up</Link>
      </div>

    </div>
  )
}

export default SignIn;