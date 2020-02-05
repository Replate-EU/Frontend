//dependencies
import React, { useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
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
import BusinessPickups from "./Components/Business/BusinessPickups";
import VolunteerPickups from "./Components/Volunteer/VolunteerPickups";
import Modal from "./Components/Modal/Modal";
import SignUp from "./Components/SignUp";
import { Container, Borders } from "./Components/styled";



function App({ appState, user, checkToken }) {
  useEffect(() => {
    if (!appState) {
      checkToken();
    }
  }, []);
  return (
    <div className="App">
      <Modal />
      <Borders></Borders>
      <Container>
        <Switch>
          <Route exact path="/">
            <SignUp/>
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
          <Route exact path="/business/pickups">
            <BusinessPickups />
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
