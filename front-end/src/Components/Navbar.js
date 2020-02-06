import React from "react";
import { NavLink } from "react-router-dom";
import Modal from "./Modal/Modal";

export default function Navbar({ appState, user, logout }) {
  if (!appState) {
    return (
      <section className="navbar-container">
        <nav>
          <ul>
            <li>
              <NavLink to="/login">Log in</NavLink>
            </li>
            <li>
              <NavLink to="/">Register</NavLink>
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
                <button onClick={logout}>Log out</button>
              </li>
              <li>
                <NavLink to="/volunteer/dashboard">Accepted pickups</NavLink>
              </li>
              <li>
                <NavLink to="/volunteer/pikcups">Available pickups</NavLink>
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
                <button onClick={logout}>Log out</button>
              </li>
              <li>
                <NavLink to="/business/dashboard">Listed pickups</NavLink>
              </li>
            </ul>
          </nav>
        </section>
      );
    }
  }
}
