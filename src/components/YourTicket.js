import React, { useEffect, useRef } from "react";
import "../App.css";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { BorderAllRounded } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  // formControl: {
  //   margin: theme.spacing(1),
  // //   minWidth: 500
  // },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
const useOutlinedInputStyles = makeStyles((theme) => ({
  root: {
    "& $notchedOutline": {
      border: "2px solid #f83600",
      borderRadius: "50px",
    },
    "&:hover $notchedOutline": {
      borderColor: "green",
      borderRadius: "50px",
    },
    "&$focused $notchedOutline": {
      borderColor: "#fe8c00",
      borderRadius: "50px",
    },
  },
  focused: {},
  notchedOutline: {},
}));

export default function YourTicket() {
  const classes = useStyles();
  const outlinedInputClasses = useOutlinedInputStyles();
  const canvasRef = useRef(null);

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let imgUrl =
      "https://res.cloudinary.com/fitness-glory/image/upload/v1639504502/white_ticket_mjyc78.png";
    const nameInput = document.getElementById("name");
    const downloadBtn = document.getElementById("download-btn");
    const image = new Image();
    image.crossOrigin = "Anonymous";
    image.src = imgUrl;
    image.onload = function () {
      drawImage();
    };
    function drawImage() {
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      ctx.font = "600 40px Montserrat";
      ctx.fillStyle = "black";
      ctx.fillText(nameInput.value, 45, 120);
    }
    nameInput.addEventListener("input", function () {
      drawImage();
    });

    downloadBtn.addEventListener("click", function () {
      downloadBtn.href = canvas.toDataURL("image/jpg");
      downloadBtn.download = "MozillaTicket - " + nameInput.value;
    });
    image.onerror = function (err) {
      console.log("err", err);
    };
  });

  return (
    <div>
      <>
        <div className="ticket-left">
          <span className="ticket-left-1">
            Generate your Ticket <br />
            <span className="ticket-left-2">FROM HERE!</span>
          </span>
          <div>
            {/* <input className="nameInput" id="name" type='text' placeholder="Enter Your Name"/> */}
            <form className={classes.root} autoComplete="off">
              <FormControl variant="outlined" className="nameInputStyles">
                <InputLabel
                  style={{ color: "white" }}
                  ref={inputLabel}
                  htmlFor="outlined-age-simple"
                >
                  Enter Your Name
                </InputLabel>
                <OutlinedInput
                  id="name"
                  type={"text"}
                  style={{ color: "white" }}
                  labelWidth={labelWidth}
                  classes={outlinedInputClasses}
                />
              </FormControl>
            </form>
          </div>
          <img
            className="watermark-right"
            src="https://res.cloudinary.com/fitness-glory/image/upload/v1639484985/logo_icon-01_s6oex8.png"
          />
        </div>

        <div className="ticket-right">
          <div>
            <canvas
              className="cnvsStyle"
              ref={canvasRef}
              height="410px"
              width="800px"
              style={{ border: "1px solid black", position: "center" }}
            />
          </div>
          <div>
            <span className="dontFogt">
              *Don't forget to tag Mozilla Campus Club of SLIIT <br /> when you
              are sharing
            </span>
          </div>
        </div>
        <div className="ticketBox">
          <a href="#" className="generateTicket" id="download-btn">
            Generate Ticket
          </a>
        </div>
      </>
    </div>
  );
}
