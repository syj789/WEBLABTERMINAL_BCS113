import React from "react";
import { Link } from "react-router-dom";

//STYLING
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import userService from "../services/UserService";
const useStyles = makeStyles((theme) => ({
  link: {
    color: "white",
    paddingRight: "10px",
  },
  barstyle: {
       backgroundColor:"green"

  }
}));



const TopMenu = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.barstyle}>
      <Toolbar>
{/* HOME PAGE LINK */}
        <Typography variant="h6">

          <Link to="/" className={classes.link}>
            Home
          </Link>
        </Typography>
{/* MATCHES PAGE LINK */}
        <Typography variant="h6">
          <Link to="/matches" className={classes.link}>
            Matches
          </Link>
        </Typography>


{/* 
IF (USER IS NOT LOGGED)
       THEN  IN => SHOW (LOGIN)/(REGISTER) BUTTONS 
ELSE
      SHOW (LOGOUT) BUTTON
*/}

{!userService.isLoggedIn() ? (
          <>
    {/* LOGIN PAGE LINK */}
            <Typography variant="h6">
              <Link to="/login" className={classes.link}>
                Login
              </Link>

    {/* SIGN-UP PAGE LINK */}
            </Typography>
            <Typography variant="h6">
              <Link to="/register" className={classes.link}>
                Register
              </Link>
            </Typography>
          </>
        ) 
        :
        (
            
          <Button
            variant="contained"
            onClick={(e) => {
              userService.logout();
              window.location.reload();
            }}
          >
            LogOut {userService.getLoggedInUser().name}
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default TopMenu;
