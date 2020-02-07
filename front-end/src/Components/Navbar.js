import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import Modal from "./Modal/Modal";
import logo from "../icons/Logo.webp";

export default function Navbar({ appState, user, logout }) {
  const history = useHistory();
  if (!appState) {
    return (
      <section className="navbar-container">
        <nav>
          <div>
            <img src={logo} className="logo" />
          </div>

          <ul className="right-navbar">
            <li>
              <NavLink className="nav--link" to="/login" replace>
                Log in
              </NavLink>
            </li>
            <li>
              <NavLink className="nav--link" exact to="/" replace>
                Register
              </NavLink>
            </li>
          </ul>
        </nav>
      </section>
    );
  } else {
    if (user.user_type === "volunteer") {
      return (
        <section className="navbar-container">
          <nav>
            <div>
              <img src={logo} className="logo" />
            </div>

            <ul>
              <li>
                <NavLink
                  className="nav--link"
                  to="/volunteer/dashboard"
                  replace
                >
                  Accepted pickups
                </NavLink>
              </li>
              <li>
                <NavLink className="nav--link" to="/volunteer/pickups" replace>
                  Available pickups
                </NavLink>
              </li>
              <li>
                <Modal />
              </li>
              <li>
                <button className="nav--button" onClick={() => logout(history)}>
                  Log out
                </button>
              </li>
            </ul>
          </nav>
        </section>
      );
    } else if (user.user_type === "business") {
      return (
        <section className="navbar-container">
          <nav>
            <div>
              <img src={logo} className="logo" />
            </div>
            <ul>
              <li>
                <button className="nav--button" onClick={() => logout(history)}>
                  Log out
                </button>
              </li>
              <li>
                <NavLink className="nav--link" to="/business/dashboard" replace>
                  Listed pickups
                </NavLink>
              </li>
              <li>
                <Modal />
              </li>
            </ul>
          </nav>
        </section>
      );
    }
  }
}

{
  /* <nav className="NavBar">
          <Modal />
          <NavLink exact to="/login" activeClassName="active" replace>LOGIN</NavLink> 
          <NavLink exact to="/volunteer/pickups" activeClassName="active" replace>PICKUPS</NavLink>
          <NavLink exact to="/volunteer/dashboard" activeClassName="active" replace>DASHBOARD</NavLink>
          <NavLink exact to="/business/dashboard" activeClassName="active" replace>DASHBOARD</NavLink> 
        </nav> */
}
