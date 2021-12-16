import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";
import "./styles/navbar.css";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(5),
    // "&:hover": {
    //   color: "yellow",
    //   borderBottom: "1px solid white",
    // },
  },
  active: {
    backgroundColor: "rgba(255, 255, 255, 0.12)",
  },
}));

function Navbar(prop) {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="static" style={{ backgroundColor: "black" }}>
      <CssBaseline />
      <Toolbar>
        <Typography variant="h6" className={classes.logo}>
          <img
            src="https://res.cloudinary.com/fitness-glory/image/upload/v1639477576/Logo-02_xgoth5.png"
            alt="logo"
            width={140}
            height={70}
            style={{ marginTop: "10px" }}
          />
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className="navSection">
            <div className={classes.navlinks}>
              <Link to="/" className={classes.link}>
                <span>HOME</span>
              </Link>
              <Link to="About" className={classes.link}>
                <span>ABOUT</span>
              </Link>
              <Link to="/Register" className={classes.link}>
                <span>REGISTER</span>
              </Link>
              <Link to="/Ticket" className={classes.link}>
                <span>YOUR TICKET</span>
              </Link>
              <Link to="/Contact" className={classes.link}>
                <span>CONTACT</span>
              </Link>
            </div>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
