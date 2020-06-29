import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MainContainer from "../../Containers/MainContainer";
import Article from "../../components/Article";

import Header from "../../Containers/Header";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
  },
  main_sheet: {
    padding: "16px",
  },
}));

export default function LandingPage({ ...props }) {
  const classes = useStyles();
  return (
    <MainContainer>
      <div className={classes.root}>
        <Paper className={classes.main_sheet} elevation={0}>
          <Grid container direction="column" justify="flex-start">
            <Grid container alignItems="center" justify="center">
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Header />
              </Grid>
            </Grid>
            <Article name={"Reyka"} text={"supermega"} articleName={"Reyka"} />
            <Article
              name={"Reyka"}
              text={"supermega"}
              articleName={"Reyka"}
              reverse={true}
            />
          </Grid>
        </Paper>
      </div>
    </MainContainer>
  );
}
