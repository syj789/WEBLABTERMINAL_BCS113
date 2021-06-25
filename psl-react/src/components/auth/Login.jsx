import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import userService from "../../services/UserService";

//STYLING
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "250px",
  },
  fieldsst: {
    width: "50%",
  },
  btnst:{

    marginTop:40,
    color: "white",
    background:"green"
  }
}));




const Login = (props) => {
  const classes = useStyles();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <div className={classes.container}>
      <div className={classes.fieldsst}>

{/*NAME TEXTFIELD */}
        <TextField
          label="Email"
          fullWidth
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />{" "}
        <br />

{/*PASSWORD TEXTFIELD */}
        <TextField
          label="Password"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />{" "}
        <br />

{/*LOGIN BUTTON */}
        <Button
          variant="contained"
          className={classes.btnst}
          onClick={(e) => {
            userService
              .login(email, password)
              .then((data) => {
                console.log(data);
                window.location.href = "/";
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
