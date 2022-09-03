import React from 'react';
import "./signup.css";
import logo from "../../assets/logo.png"

import {Link} from "react-router-dom"

const SignUp = () => {
  return (
    <div className='signup'>
      
       <img className='signupLogo' src={logo} alt='' />
      
       <div className='signupWrapper'>
           <h1 className='signupWrapperTitle'>Sign Up</h1>

           <input
            className='signupWrapperInput'
            type="name"
            placeholder='Name'>
           </input>

           <input
            className='signupWrapperInput'
            type="email"
            placeholder='E-mail'>
           </input>

           <input
            className='signupWrapperInput'
            type="password"
            placeholder='Password'>
           </input>

           <input
            className='signupWrapperInput'
            type="password"
            placeholder='Confirm Password'>
           </input>

           <button className='signupWrapperButton'>Sign In</button>

           <span className='signupWrapperText'>Have you an account?</span>
           <Link to="/signin" style={{textDecoration: "none", color:"inherit", fontSize:"16px"}}>Sign In</Link>
      </div>

    </div>
  )
}

export default SignUp;