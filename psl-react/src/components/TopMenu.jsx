import React from "react";
import { Link } from "react-router-dom";

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
        <Typography variant="h6">
          <Link to="/" className={classes.link}>
            Home
          </Link>
        </Typography>
        <Typography variant="h6">
          <Link to="/matches" className={classes.link}>
            Matches
          </Link>
        </Typography>

        {!userService.isLoggedIn() ? (
          <>
            <Typography variant="h6">
              <Link to="/login" className={classes.link}>
                Login
              </Link>
            </Typography>
            <Typography variant="h6">
              <Link to="/register" className={classes.link}>
                Register
              </Link>
            </Typography>
          </>
        ) : (
          <Button
            variant="contained"
            color="primary"
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
