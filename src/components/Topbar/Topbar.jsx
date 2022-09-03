import React from "react";
import "./topbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';

const Topbar = () => {

  return (
    <div className="topbar">
      <div className="topbarWrapper">

        <div className="topbarLogo">
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <img className="topbarLogoImage" src={logo} alt="" />
          </Link>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <span className="topbarLogoText">Youtube</span>
          </Link>
        </div>

        <div className="topbarSearch">
          <input className="topbarSearchInput" type="text" placeholder="Search on Youtube.."></input>
          <SearchIcon style={{ color: "white", cursor: "pointer" }} />
        </div>


        <div className="topbarSignIn">
          <Link to="/signin" style={{ textDecoration: "none", color: "inherit" }}>
          <button className="topbarSignInButton">
            <PersonIcon />
            Sign In
          </button>
          </Link>
        </div>

      </div>
    </div>
  )

}

export default Topbar;