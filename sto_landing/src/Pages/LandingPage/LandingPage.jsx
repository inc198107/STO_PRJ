import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MainContainer from "../../Containers/MainContainer";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column",
  },
}));

export default function LandingPage({ ...props }) {
  const classes = useStyles();
  return (
    <MainContainer>
      <div className={classes.root}>
        <Grid container>
          <Grid item lg={12}></Grid>
        </Grid>
      </div>
    </MainContainer>
  );
}
