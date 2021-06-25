import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import axios from "axios";
import matchService from "../../services/MatchesService";
import Auth from "../auth/Auth";

const NewMatch = (props) => {

  //USE STATES FOR (CITY,DATE,TEAM-A,TEAM-B)
  const [city, setCity] = React.useState("");
  const [date, setDate] = React.useState(0);
  const [teamA, setteamA] = React.useState(0);
  const [teamB, setteamB] = React.useState(0);


  return (
    <Auth>
      <Grid container spacing={3}>
        <Grid item xs={12}>
 {/* MAIN HEADING */}
          <h1>Add New Match</h1>
        </Grid>
        <Grid item xs={3}></Grid>

        <Grid item xs={6}>
  {/* TEXT FILED: CITY */}
          <TextField
            label="city"
            fullWidth
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
  {/* TEXT FILED: DATE */}
          <TextField
            label="date"
            fullWidth
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
{/* TEXT FILED: TEAM-A */}
          <TextField
            label="Team -A "
            fullWidth
            value={teamA}
            onChange={(e) => {
              setteamA(e.target.value);
            }}
          />
{/* TEXT FILED: TEAM-B */}
              <TextField
            label="Team -B "
            fullWidth
            value={teamB}
            onChange={(e) => {
              setteamB(e.target.value);
            }}
          />  
        </Grid>

//GRID ITEMS ADDED FOR SPACING/BETTER PRESENTATION
        <Grid item xs={3}></Grid>
        <Grid item xs={3}></Grid>


        <Grid item xs={9}>
{/* ADD NEW MATCH BUTTON */}
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => {
              matchService
                .addMatch({ city, date,teamA,teamB })
                .then((data) => {
                  console.log(data);
                  props.history.push("/matches");
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            Add New Match
          </Button>
        </Grid>
      </Grid>
    </Auth>
  );
};

export default NewMatch;
