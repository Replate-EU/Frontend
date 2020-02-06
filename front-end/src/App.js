//dependencies
import React, { useEffect } from "react";
import { Switch, Route, Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";

//Redux actions
import { checkToken, logout } from "./state/actionCreators";

//styles
import "./CSS/App.css";
// import styled from "styled-components";

//Child components
import FormBusiness from "./Components/Business/FormBusiness";
import FormVolunteer from "./Components/Volunteer/FormVolunteer";
import Login from "./Components/Login";
import Modal from "./Components/Modal/Modal";
import Navbar from "./Components/Navbar";
import SignUp from "./Components/SignUp";
import BusinessDashboard from "./Components/Business/Logged/BusinessDashboard";
import VolunteerDashboard from "./Components/Volunteer/Logged/VolunteerDashboard";
import VolunteerPickups from "./Components/Volunteer/Logged/VolunteerPickups";
import RestrictedRoute from "./auth/restrictedRoute";

function App({ appState, user, checkToken, logout }) {
  useEffect(() => {
    if (!appState) {
      checkToken();
    }
  }, []);
  return (
    <div className="App">
      <div className="container">
        <Navbar appState={appState} user={user} logout={logout} />
        <Switch>
          <Route exact path="/">
            <SignUp />
          </Route>
          <Route exact path="/business">
            <FormBusiness />
          </Route>
          <Route exact path="/volunteer">
            <FormVolunteer />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <RestrictedRoute exact path="/business/dashboard">
            <BusinessDashboard />
          </RestrictedRoute>
          <RestrictedRoute exact path="/volunteer/dashboard">
            <VolunteerDashboard />
          </RestrictedRoute>
          <RestrictedRoute exact path="/volunteer/pickups">
            <VolunteerPickups />
          </RestrictedRoute>
        </Switch>
      </div>
    </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    appState: state.appState,
    user: state.user
  };
}

export default connect(mapStateToProps, { checkToken, logout })(App);
