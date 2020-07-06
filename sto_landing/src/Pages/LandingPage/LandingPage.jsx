import React, { Fragment, useReducer } from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MainContainer from "../../Containers/MainContainer";
import Article from "../../components/Article";
import PreviewModal from "../../components/PreviewModal";
import  ScrollTopButton from "../../components/ScrollTopButton";
import {
  PageContext,
  initialState,
  PageReducer,
} from "../../pageReducers/LandingPageReducer";

import Header from "../../Containers/Header";

import { reykaArr, tuningArr } from "../../Assets/imgArrays";
import { reykaText, tuningText } from "../../Assets/articles";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
  },
  main_sheet: {
    padding: "16px",
    minHeight: "100vh",
    marginTop: "32px",
    position: "relative"
  },
  scroll_top_container_left:{
    position: 'absolute',
    left: '24px',
    bottom: '24px',
    display: "flex",
    alignItems:"center",
    justifyContent:"center"
  },
  scroll_top_container_right:{
    position: 'absolute',
    right: '24px',
    bottom: '24px',
    display: "flex",
    alignItems:"center",
    justifyContent:"center"
  }
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
                <div className={classes.scroll_top_container_right}>
                  < ScrollTopButton/>
                </div>
              </Paper>
              <Paper className={classes.main_sheet} elevation={1}>
                <Article
                  _id={"chip_tuning"}
                  name={"Chip Tuning"}
                  slides={tuningArr}
                  text={tuningText}
                  articleName={"Чіп Тюнінг, Зроби своє авто таким як ти бажаєш"}
                  reverse={true}
                />
                <div className={classes.scroll_top_container_left}>
                  < ScrollTopButton/>
                </div>
              </Paper>
            </Grid>
          </div>
        </MainContainer>
        <PreviewModal />
      </Fragment>
    </PageContext.Provider>
  );
}
