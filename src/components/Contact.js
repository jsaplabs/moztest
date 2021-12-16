import React from "react";
import "../App.css";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <div>
      <div className="container">
        <div className="left-contact">
          <div className="contacthead">
            <h2 className="contactheadH2">
              Contact for more information about the event
            </h2>
          </div>

          <div className="contactText">
            <span>077 8829 607 (Pasindu Bandara)</span>
            <br />
            <span>071 0891 055 (Geethmaka Dissanayake)</span>
            <br />
            <span>infosliitmcc@gmail.com</span>
            <br />
          </div>
          <hr className="contactHr" />
          <div className="socialhead">
            <h2 className="socialheadH2">
              Follow <span style={{ fontWeight: 600 }}>SLIITMOZILLA</span> on
              Social Media
            </h2>
          </div>
          <div className="socialButtons">
            <a
              style={{ textDecoration: "none" }}
              href="https://web.facebook.com/sliitmcc"
            >
              <Button
                variant="contained"
                style={{ backgroundColor: "#4c68d7", color: "white" }}
                className={classes.button}
                startIcon={<FacebookIcon />}
              >
                Facebook
              </Button>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href="https://www.linkedin.com/company/mozilla-campus-club-of-sliit"
            >
              <Button
                variant="contained"
                style={{ backgroundColor: "#3b5998", color: "white" }}
                className={classes.button}
                startIcon={<LinkedInIcon />}
              >
                LinkedIn
              </Button>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href="https://twitter.com/mozillasliit"
            >
              <Button
                variant="contained"
                style={{ backgroundColor: "#00acee", color: "white" }}
                className={classes.button}
                startIcon={<TwitterIcon />}
              >
                Twitter
              </Button>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href="https://www.instagram.com/mozillacampusclubsliit"
            >
              <Button
                variant="contained"
                style={{ backgroundColor: "#bc2a8d", color: "white" }}
                className={classes.button}
                startIcon={<InstagramIcon />}
              >
                Instagram
              </Button>
            </a>
          </div>
        </div>
        <img
          className="watermark-mozilla"
          src="https://res.cloudinary.com/fitness-glory/image/upload/v1639550570/Mozilla_Logo_ezid2w.png"
        />
      </div>
    </div>
  );
}
