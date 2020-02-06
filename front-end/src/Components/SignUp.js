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
            <Button1 className="hover"></Button1>
          </Link>
          <h3>I'm a business</h3>
          <p>I want to donate food</p>
        </Box>
        <Box>
          <Link to="/volunteer">
            <Button1 className="hover"></Button1>
          </Link>

          <h3>I'm a volunteer</h3>
          <p>I want to receive donations</p>
        </Box>
      </div>
      <Link to="/login">
        <Button1 className="hover">Go to login page</Button1>
      </Link>
    </>
  );
}
