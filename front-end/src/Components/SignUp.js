import React from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "./styled";

export default function SignUp() {
  return (
    <>
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
      <Link to="/login">
        <Button className="hover">Go to login page</Button>
      </Link>
    </>
  );
}
