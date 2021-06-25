import React from "react";
import { Grid, Button } from "@material-ui/core";
import matchService from "../../services/MatchesService";
import { withRouter } from "react-router";
import userService from "../../services/UserService";
const SingleMatch = (props) => {
  const { match, onDelete, history } = props;
  console.log(props);
  return (
    <Grid item xs={4}>
      <h2>
        {match.name}{" "}
        {userService.isAdmin() && (
          <>
            <Button
              variant="contained"
              color="primary"
              onClick={(e) => {
                console.log("navigate to update");
                history.push("/matches/update/" + match._id);
              }}
            >
              Edit
            </Button>{" "}
            <Button
              variant="contained"
              color="secondary"
              onClick={(e) => {
                matchService
                  .deleteMatch(match._id)
                  .then((data) => {
                    console.log(data);
                    onDelete();
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
              Delete
            </Button>
          </>
        )}
      </h2>
      <p>{match.price}</p>
      <hr />
    </Grid>
  );
};

export default withRouter(SingleMatch);
