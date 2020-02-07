import React from "react";
import { Link } from "react-router-dom";
import volunteer from "../images/volunteer.svg";
import business from "../images/business.svg";

export default function SignUp() {
  return (
    <div className="signup">
      <h1>We're glad you're here!</h1>
      <div className="dives">
        <div className="signup-card">
          <Link to="/business">
            <div className="img-wrapper">
              <img src={business} alt="Happy little shop" className="sign-up" />
            </div>
            <button className="button-primary button-big">
              I'm a business
            </button>
          </Link>
          <p>I want to promote my business and minimise waste</p>
        </div>
        <div className="signup-card">
          <Link to="/volunteer">
            <div className="img-wrapper">
              <img src={volunteer} alt="Happy volunteer" className="sign-up" />
            </div>
            <button className="button-primary button-big">
              I'm a volunteer
            </button>
          </Link>
          <p>I want to to deliver donations to those who need them</p>
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
