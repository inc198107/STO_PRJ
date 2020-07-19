import React, { Fragment, useReducer } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MainContainer from "../../Containers/MainContainer";
import Article from "../../components/Article";
import Contacts from "../../Containers/Contacts/Contacts";
import PreviewModal from "../../components/PreviewModal";
import ScrollTopButton from "../../components/ScrollTopButton";
import Footer from "../../Containers/Footer"
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
  scroll_top_container_left: {
    position: "sticky",
    bottom: "16px",
    paddingTop: "30px",
    paddingRight: "24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
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
              <Article
                _id={"steering"}
                name={"Кермові Системи"}
                slides={reykaArr}
                text={reykaText}
                articleName={"Ремонт Кермових Рейок"}
              />

              <Article
                _id={"chip_tuning"}
                name={"Chip Tuning"}
                slides={tuningArr}
                text={tuningText}
                articleName={"Чіп Тюнінг, Зроби своє авто таким як ти бажаєш"}
                reverse={true}
              />

              <Contacts />
            </Grid>
          </div>
          <div className={classes.scroll_top_container_left}>
            <ScrollTopButton />
          </div>
        </MainContainer>
        <Grid container alignItems="center" justify="center">
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Footer />
          </Grid>
        </Grid>
        <PreviewModal />
      </Fragment>
    </PageContext.Provider>
  );
}
