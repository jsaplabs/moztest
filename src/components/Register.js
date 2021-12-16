import React from "react";
import "../App.css";
import { Button } from "@material-ui/core";

export default function Register() {
  return (
    <div><center>
      <div className="reg-left-box">
        <div className="regHead">
          <h2>Who Can Participate?</h2>
        </div>

        <div className="regPara">
          <span>
            Open to students of Sri Lanka <br />
            Institute of Information Technology (SLIIT) <br />
            who are interested in joining <br />
            <span style={{ fontWeight: 700 }}>
              Mozilla Campus Club of SLIIT.
            </span>
          </span>
        </div>
      </div>

      <div className="reg-right-box">
        <Button className="btn-grad">
          <a style={{ textDecoration: "none" }}>REGISTER NOW</a>
        </Button>
      </div>
      <img
        className="watermark"
        src="https://res.cloudinary.com/fitness-glory/image/upload/v1639484985/logo_icon-01_s6oex8.png"
      /></center>
    </div>
  );
}
