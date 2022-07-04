import React from "react";
import { Link } from "react-router-dom";

const mainDiv = {
   display : "flex",
   justifyContent : "space-between",
   padding : "20px 40px"
}

const btn = {
  backgroundColor : "black",
  color : "#FFF"
}
const Navbar = () => {
  return (
    <div style={mainDiv}>
      <div data-cy="navbar-home-link">
        <img
          src="/Adidas_Logo.png"
          width="60px"
          alt="logo"
          style={{ display: "block" }}
        />
      </div>

      <div>
        {/* Link button to /login page, if the user is not authenticated, else don't show it*/}
        <Link to="/Login"><button style={btn} data-cy="navbar-login-button">LOGIN</button></Link>
      </div>
    </div>
  );
};

export default Navbar;