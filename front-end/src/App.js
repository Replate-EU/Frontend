import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import FormBusiness from "./Components/Business/FormBusiness";
import FormVolunteer from "./Components/Volunteer/FormVolunteer";
import Login from "./Components/Login";
import BusinessPickups from "./Components/Business/BusinessPickups";
import VolunteerPickups from "./Components/Volunteer/VolunteerPickups";
import Modal from "./Components/Modal/Modal";
import Navbar from "./Components/Navbar";

const Box = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  border: 3px solid black;
  padding: 20px 0px;
  margin: 10px;
  width: 30%;
`;
const Borders = styled.div`
  border: 3px solid black;
  padding: 10px 0;
  width: 50%;
`;
const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  border: 3px solid black;
  height: 100vh;
  width: 50%;
  margin: -3px 0;
`;

const Button = styled.button`
  background: white;
  border: 2px solid black;
  border-radius: 5px;
  padding: 25px;
`;

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Modal /> */}
      <Borders></Borders>
      <Container>
        <Switch>
          <Route exact path="/">
            <h1>Sign Up!</h1>
            <div className="Boxes">
              <Box>
                <Link to="/business">
                  <Button className="hover"></Button>
                </Link>
                <h3>I'm a business</h3>
                <p>I want to donate food</p>
              </Box>
              <Box>
                <Link to="/volunteer">
                  <Button className="hover"></Button>
                </Link>

                <h3>I'm a volunteer</h3>
                <p>I want to receive donations</p>
              </Box>
            </div>
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

export default App;
