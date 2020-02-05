//dependencies
import React, { useEffect } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import { connect } from "react-redux";

//Redux aactions
import { checkToken } from "./state/actionCreators";

//styles
import "./App.css";
import styled from "styled-components";

//Child components
import FormBusiness from "./Components/Business/FormBusiness";
import FormVolunteer from "./Components/Volunteer/FormVolunteer";
import Login from "./Components/Login";
// import Modal from "./Components/Modal/Modal";
import Navbar from "./Components/Navbar";
import SignUp from "./Components/SignUp";
import { Container, Borders } from "./Components/styled";
import BusinessDashboard from "./Components/Business/Logged/BusinessDashboard";
import VolunteerDashboard from "./Components/Volunteer/Logged/VolunteerDashboard";
import VolunteerPickups from "./Components/Volunteer/Logged/VolunteerPickups";

function App({ appState, user, checkToken }) {
  useEffect(() => {
    if (!appState) {
      checkToken();
    }
  }, []);
  return (
    <div className="App">
      <Borders>
        <Navbar />
        {/* <nav>
          <NavLink exact to="/login" activeClassName="active" replace>
            LOGIN
          </NavLink>{" "}
          <NavLink
            exact
            to="/volunteer/pickups"
            activeClassName="active"
            replace
          >
            PICKUPS
          </NavLink>{" "}
          <NavLink
            exact
            to="/volunteer/dashboard"
            activeClassName="active"
            replace
          >
            DASHBOARD
          </NavLink>{" "}
          <NavLink
            exact
            to="/business/dashboard"
            activeClassName="active"
            replace
          >
            DASHBOARD
          </NavLink>{" "}
        </nav> */}
      </Borders>
      <Container>
        <input className="general-input" type="text" />
        <select>
          <option value="business">Business</option>
          <option value="volunteer">Volunteer</option>
        </select>
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
      <Borders></Borders>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    appState: state.appState,
    user: state.user
  };
}

export default connect(mapStateToProps, { checkToken })(App);
