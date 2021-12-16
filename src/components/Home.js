import React from "react";
import "../App.css";
import { Button } from "@material-ui/core";

export default function Home() {
  return (
    <div className="main">
      <center>
        <div class="container">
          <h1 className="mainHeading">HOLA MOZILLA 2.0</h1>
          <div className="dateText">
            <span>21</span>
            <span>st</span> <span>December @ 7.00pm</span>
          </div>

          <div id="countdown" className="countdown glowing">
            <ul>
              <li>
                <span id="days"></span>
                <tx style={{ color: "#f83600" }}>days</tx>
              </li>
              <li>
                <span id="hour"></span>
                <tx style={{ color: "#f83600" }}>Hours</tx>
              </li>
              <li>
                <span id="minute"></span>
                <tx style={{ color: "#f83600" }}>Minutes</tx>
              </li>
              <li>
                <span id="second"></span>
                <tx style={{ color: "#f83600" }}>Seconds</tx>
              </li>
              {/* <li><span id="end"></span><tx style={{color: "#f83600"}}>Seconds</tx></li> */}
            </ul>
          </div>

          <img
            className="watermark"
            src="https://res.cloudinary.com/fitness-glory/image/upload/v1639484985/logo_icon-01_s6oex8.png"
          />

          <Button className="myBtn">
            <a style={{ textDecoration: "none" }}>Register Now</a>
          </Button>
        </div>
      </center>
    </div>
  );
}
