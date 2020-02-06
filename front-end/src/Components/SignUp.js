import React from "react";
import { Link } from "react-router-dom";


export default function SignUp() {
  return (
    <div className="signup">
      <h1>Sign Up!</h1>
      <div className="dives">
        <div>
          <Link to="/business">
            <button className="button">I'm a business</button>
          </Link>
          <p>I want to donate food</p>
        </div>
        <div>
          <Link to="/volunteer">
            <button className="button">I'm a volunteer</button>
          </Link>
          <p>I want to receive donations</p>
        </div>
        <div>
          <Link to="/login">
            <button className="button">Go to login page</button>
          </Link>
        </div>
        
      </div>
      
    </div>
  );
}
