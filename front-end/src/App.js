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

function App({ appState, user, checkToken, logout }) {
  useEffect(() => {
    if (!appState) {
      checkToken();
    }
  }, []);
  return (
    <div className="App">
      <Navbar appState={appState} user={user} logout={logout} />
      <Container>
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
          <Route exact path="/business/dashboard">
            <BusinessDashboard />
          </Route>
          <Route exact path="/volunteer/dashboard">
            <VolunteerDashboard />
          </Route>
          <Route exact path="/volunteer/pickups">
            <VolunteerPickups />
          </Route>
        </Switch>
      </Container>
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
