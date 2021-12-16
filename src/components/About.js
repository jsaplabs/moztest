import React from "react";
import "../App.css";
import { Button } from "@material-ui/core";

export default function About() {
  return (
    <div><center>
      <div className="containerAbt">
        <div className="abt-left-box">
          <div className="abtHead">
            <h2>About this Event</h2>
          </div>

          <div className="abtPara">
            <span className="abtPara">
              Open to students of Sri Lanka <br />
              Institute of Information Technology (SLIIT), <br />
              Who interest in joining <br />
              <span style={{ fontWeight: 700 }}>
                Mozilla Campus Club of SLIIT.
              </span>
            </span>
          </div>
        </div>

        <div className="abt-right-box">
          {/* <Button className="btn-grad">
                <a style={{ textDecoration: "none" }} >
                    REGISTER NOW
                    </a>
                </Button> */}
          <div className="abtText">
            <span className="abt21">21st</span>
            <br />
            <span className="tuesday">TUESDAY</span>
            <br />
            <span className="december">December</span>
            <br />
            <span className="time">7.00 pm</span>
            <br />
            <span className="zoom">via ZOOM</span>
          </div>
        </div>
        {/* <div className="marginBot"><br/></div> */}
        {/* <img className="watermark" src="https://res.cloudinary.com/fitness-glory/image/upload/v1639484985/logo_icon-01_s6oex8.png"/> */}
      </div></center>
    </div>
  );
}
