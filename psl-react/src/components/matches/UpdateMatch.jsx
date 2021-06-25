import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import axios from "axios";
import matchService from "../../services/MatchesService";
import Admin from "../auth/Admin";

const UpdateMatch = (props) => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState(0);
  const id = props.match.params.id;
  React.useEffect(() => {
    matchService.getSingleMatch(id).then((data) => {
      setName(data.name);
      setPrice(data.price);
    });
  }, []);
  return (
    <Admin>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>Update Match</h1>
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
                .updateMatch(id, { name, price })
                .then((data) => {
                  console.log(data);
                  props.history.push("/matches");
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            Update
          </Button>
        </Grid>
      </Grid>
    </Admin>
  );
};

export default UpdateMatch;
