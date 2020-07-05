import React, { Fragment, useReducer } from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MainContainer from "../../Containers/MainContainer";
import Article from "../../components/Article";
import PreviewModal from "../../components/PreviewModal";
import { PageContext, initialState, PageReducer } from "./pageReducer.js";

import Header from "../../Containers/Header";

import { reykaArr } from "../../Assets/imgArrays";

const useStyles = makeStyles((theme) => ({
  root: {
    //minHeight: "100vh",
  },
  main_sheet: {
    padding: "16px",
    minHeight: "100vh",
  },
}));

export default function LandingPage({ ...props }) {
  const [state, dispatch] = useReducer(PageReducer, initialState);
  const classes = useStyles();
  return (
    <PageContext.Provider value={{ dispatch, state }}>
      <Fragment>
        <MainContainer>
          <div className={classes.root}>
            <Paper className={classes.main_sheet} elevation={0}>
              <Grid container direction="column" justify="flex-start">
                <Grid container alignItems="center" justify="center">
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Header />
                  </Grid>
                </Grid>
                <Article
                  name={"Reyka"}
                  slides={reykaArr}
                  text={"supermega"}
                  articleName={"Reyka"}
                />
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
        <PreviewModal/>
      </Fragment>
    </PageContext.Provider>
  );
}
