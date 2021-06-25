import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import userService from "../../services/UserService";
import { toast } from "react-toastify";

//STYLING
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "250px",
  },
  fieldsst: {
    width: "60%"
    
  },
  btnst:{

    marginTop:40,
    color: "white",
    background:"green"
  }
}));



const Register = (props) => {
  const classes = useStyles();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  return (
    <div className={classes.container}>
      <div className={classes.fieldsst}>

{/*NAME TEXTFIELD */}
        <TextField
          label="Name"
          fullWidth
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />{" "}
        <br />

{/*EMAIL TEXTFIELD */}
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
        
{/*SIGN-UP BUTTON */}
        <Button
          variant="contained"
          className={classes.btnst}
          onClick={(e) => {
            userService
              .register(name, email, password)
              .then((data) => {
                console.log(data);
                props.history.push("/login");
              })
              .catch((err) => {
                console.log(err);
                toast.error(err.response.data, {
                  position: toast.POSITION.TOP_LEFT,
                });
              });
          }}
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default Register;
