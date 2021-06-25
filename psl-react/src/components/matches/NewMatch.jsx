import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import axios from "axios";
import matchService from "../../services/MatchesService";
import Auth from "../auth/Auth";

const NewMatch = (props) => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState(0);
  return (
    <Auth>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>Add New Match</h1>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <TextField
            label="name"
            fullWidth
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <TextField
            label="price"
            fullWidth
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={9}>
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => {
              matchService
                .addMatch({ name, price })
                .then((data) => {
                  console.log(data);
                  props.history.push("/matches");
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            Add New
          </Button>
        </Grid>
      </Grid>
    </Auth>
  );
};

export default NewMatch;
