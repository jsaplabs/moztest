import React, { useEffect, useRef } from "react";
import "../App.css";
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

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
      border: "2px solid white",
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
      "https://res.cloudinary.com/fitness-glory/image/upload/v1639665552/ticket_500_x1000_rvedyj.svg";
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
      ctx.font = "600 45px Montserrat";
      ctx.fillStyle = "black";
      ctx.fillText(nameInput.value, 73, 150);
    }
    nameInput.addEventListener("input", function () {
      drawImage();
    });

    downloadBtn.addEventListener("click", function () {
      downloadBtn.href = canvas.toDataURL("image/png");
      downloadBtn.download = "MozillaTicket - " + nameInput.value;
    });
    image.onerror = function (err) {
      console.log("err", err);
    };
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(formValues);
  };

  return (
    <div><center>
      <>
        <div className="ticket-left">
          <span className="ticket-left-1">
            Generate Your Ticket Now!
            {/* <span className="ticket-left-2">FROM HERE!</span> */}
          </span>
          <div>
            {/* <input className="nameInput" id="name" type='text' placeholder="Enter Your Name"/> */}
            <form className={classes.root} autoComplete="off" onSubmit={handleSubmit}>
              <FormControl variant="outlined" className="nameInputStyles" onSubmit={handleSubmit}>
                <InputLabel
                  style={{ color: "white" }}
                  ref={inputLabel}
                  htmlFor="outlined-age-simple"
                  required="required"
                  maxlength="12"
                  minLength="10"
                >
                  Enter your First and Last name
                </InputLabel>
                <OutlinedInput
                  id="name"
                  type={"text"}
                  style={{ color: "white" }}
                  labelWidth={labelWidth}
                  classes={outlinedInputClasses}
                  required="required"
                  maxlength="12"
                  minLength="10"
                />
                 <div className="ticketBox" type="submit">
                    <a href="#" type="submit" className="generateTicket" id="download-btn">
                      Generate Ticket
                    </a>
                  </div>
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
              height="500px"
              width="1000px"
              style={{ border: "1px solid black", position: "center" }}
            />
          </div>
          <div className="dontFogt">
            <span className="dontFogt">
              *Don't forget to tag Mozilla Campus Club of SLIIT <br /> when you
              are sharing on Social Media.
            </span>
          </div><br/><br/>
        </div>
        {/* <div className="ticketBox">
          <a href="#" className="generateTicket" id="download-btn">
            Generate Ticket
          </a>
        </div> */}
      </></center>
    </div>
  );
}
