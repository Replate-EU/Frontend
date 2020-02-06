import React from "react";
import { NavLink } from "react-router-dom";
import Modal from "./Modal/Modal";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <h1>Replate</h1>
      <nav>
        <NavLink exact to="/" activeClassName="active" replace>
          Home
        </NavLink>
        {localStorage.getItem("token") ? (
          <>
            <NavLink to="/login" activeClassName="active" replace>Login</NavLink>
            {localStorage.getItem("account_type") ? (
              <NavLink to="/volunteer/dashboard" activeClassName="active" replace>Dashboard</NavLink>
            ) : (
              <NavLink to="/business/dashboard" activeClassName="active" replace>Dashboard</NavLink>
            )}
            <Modal />
          </>
        ) : null}
      </nav>
    </div>
  );
}


// <nav className="NavBar">
//           <Modal />
//           <NavLink exact to="/login" activeClassName="active" replace>LOGIN</NavLink> {/* if logged in, then display: none */}
//           <NavLink exact to="/volunteer/pickups" activeClassName="active" replace>PICKUPS</NavLink> {/* if not logged in, then display: none */}
//           <NavLink exact to="/volunteer/dashboard" activeClassName="active" replace>DASHBOARD</NavLink> {/*display only when volunteer logged in*/}
//           <NavLink exact to="/business/dashboard" activeClassName="active" replace>DASHBOARD</NavLink> {/*display only when business logged in*/}
//         </nav>