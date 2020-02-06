import React from "react";
import { NavLink } from "react-router-dom";
import Modal from "./Modal/Modal";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <h1>Replate</h1>
      <nav>
        <NavLink exact to="/">
          Home
        </NavLink>
        {localStorage.getItem("token") ? (
          <>
            <NavLink to="/login">Login</NavLink>
            {localStorage.getItem("account_type") ? (
              <NavLink to="/volunteer/dashboard">Dashboard</NavLink>
            ) : (
              <NavLink to="/business/dashboard">Dashboard</NavLink>
            )}
            <Modal />
          </>
        ) : null}
      </nav>
    </div>
  );
}

{/* <nav className="NavBar">
          <Modal />
          <NavLink exact to="/login" activeClassName="active" replace>LOGIN</NavLink> 
          <NavLink exact to="/volunteer/pickups" activeClassName="active" replace>PICKUPS</NavLink>
          <NavLink exact to="/volunteer/dashboard" activeClassName="active" replace>DASHBOARD</NavLink>
          <NavLink exact to="/business/dashboard" activeClassName="active" replace>DASHBOARD</NavLink> 
        </nav> */}