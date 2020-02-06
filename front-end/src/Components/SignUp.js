import React from "react";
import { Link } from "react-router-dom";
import { Box, Button1 } from "./styled";

export default function SignUp() {
  return (
    <>
      <h1>Sign Up!</h1>
      <div className="Boxes">
        <Box>
          <Link to="/business">
            <a className="hover"></a>
          </Link>
          <h3>I'm a business</h3>
          <p>I want to donate food</p>
        </Box>
        <Box>
          <Link to="/volunteer">
            <a className="hover"></a>
          </Link>

          <h3>I'm a volunteer</h3>
          <p>I want to receive donations</p>
        </Box>
      </div>
      <Link to="/login">
        <a className="button">Go to login page</a>
      </Link>
    </>
  );
}
