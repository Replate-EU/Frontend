import React from "react";
import { Link } from "react-router-dom";


export default function SignUp() {
  return (
    <div className="signup">
      <h1>Register Here</h1>
      <div className="dives">
        <div>
          <Link to="/business">
            <button className="button">I'm a business</button>
          </Link>
          <p>I want to promote my business and minimise waste</p>
        </div>
        <div>
          <Link to="/volunteer">
            <button className="button">I'm a volunteer</button>
          </Link>
          <p>I want to receive donations while tasting new tastes</p>
        </div>
        {/* <div>
          <Link to="/login">
            <button className="button">Go to login page</button>
          </Link>
        </div> */}
        
      </div>
      
    </div>
  );
}
