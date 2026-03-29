import React, { use } from "react";
import { Link, NavLink } from "react-router";
import image from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {

  const { user, logOut } = use(AuthContext);

  const handleLogout = () => {
    logOut().then(() => {
      alert("Log Out Successfully")
    }).catch((error) => {
      console.log(error)
    })
  }
  return (
    <div className="flex justify-between content-center items-center">
      <div></div>

      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>

      <div className="login-btn flex gap-5 ">
        <img className="w-full h-10" src={`${user ? user.photoURL : image}`} alt="" />
        {
          user ? (<button onClick={handleLogout} className="btn btn-primary">Log Out</button>) : (<Link to="/auth/login" className="btn btn-primary">Login</Link>)

        }
      </div>
    </div>
  );
};

export default Navbar;
