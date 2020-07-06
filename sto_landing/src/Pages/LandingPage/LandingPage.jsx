import React, { Fragment, useReducer } from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MainContainer from "../../Containers/MainContainer";
import Article from "../../components/Article";
import PreviewModal from "../../components/PreviewModal";
import {
  PageContext,
  initialState,
  PageReducer,
} from "../../pageReducers/LandingPageReducer";

import Header from "../../Containers/Header";

import { reykaArr } from "../../Assets/imgArrays";
import { reykaText } from "../../Assets/articles";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
  },
  main_sheet: {
    padding: "16px",
    // minHeight: "100vh",
    marginTop: "32px",
  },
}));

export default function LandingPage({ ...props }) {
  const [state, dispatch] = useReducer(PageReducer, initialState);
  const classes = useStyles();
  return (
    <PageContext.Provider value={{ dispatch, state }}>
      <Fragment>
        <Grid container alignItems="center" justify="center">
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Header />
          </Grid>
        </Grid>
        <MainContainer>
          <div className={classes.root}>
            <Grid container direction="column" justify="flex-start" spacing={2}>
              <Paper className={classes.main_sheet} elevation={1}>
                <Article
                  _id={"steering"}
                  name={"Кермові Системи"}
                  slides={reykaArr}
                  text={reykaText}
                  articleName={"Ремонт Кермових Рейок"}
                />
              </Paper>
              <Paper className={classes.main_sheet} elevation={1}>
                <Article
                  name={"Reyka"}
                  text={"supermega"}
                  articleName={"Reyka"}
                  reverse={true}
                />
              </Paper>
            </Grid>
          </div>
        </MainContainer>
        <PreviewModal />
      </Fragment>
    </PageContext.Provider>
  );
}
