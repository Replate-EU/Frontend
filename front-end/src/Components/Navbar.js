import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import Modal from "./Modal/Modal";

export default function Navbar({ appState, user, logout }) {
  const history = useHistory();
  if (!appState) {
    return (
      <section className="navbar-container">
        <nav>
          <ul>
            <li>
              <NavLink to="/login" replace>Log in</NavLink>
            </li>
            <li>
              <NavLink exact to="/" replace>Register</NavLink>
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
            <ul>
              <li>
                <button onClick={() => logout(history)}>Log out</button>
              </li>
              <li>
                <NavLink to="/volunteer/dashboard" replace>Accepted pickups</NavLink>
              </li>
              <li>

                <NavLink to="/volunteer/pickups" replace>Available pickups</NavLink>

              </li>
              <li>
              <Modal />
            </li>
            </ul>
          </nav>
        </section>
      );
    } else if (user.user_type === "business") {
      return (
        <section className="navbar-container">
          <nav>
            <ul>
              <li>
                <button onClick={() => logout(history)}>Log out</button>
              </li>
              <li>
                <NavLink to="/business/dashboard" replace>Listed pickups</NavLink>
              </li>
            </ul>
          </nav>
        </section>
      );
    }
  }
}

{/* <nav className="NavBar">
          <Modal />
          <NavLink exact to="/login" activeClassName="active" replace>LOGIN</NavLink> 
          <NavLink exact to="/volunteer/pickups" activeClassName="active" replace>PICKUPS</NavLink>
          <NavLink exact to="/volunteer/dashboard" activeClassName="active" replace>DASHBOARD</NavLink>
          <NavLink exact to="/business/dashboard" activeClassName="active" replace>DASHBOARD</NavLink> 
        </nav> */}

