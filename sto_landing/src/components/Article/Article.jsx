import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GalleryWithPreview from "../GalleryWIthPreview/GalleryWithPreview";
import ZoomableImage from "./ZoomableImage";
import { Grid, Paper, useMediaQuery, Link } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

import {ReactComponent as FingerDown} from "../../Assets/images/icons/finger-icon.svg"

const useStyle = makeStyles((theme) => ({
  main_sheet: {
    padding: "16px",
    marginTop: "32px",
    position: "relative",
  },
  main_sheet_mobile: {
    padding: "8px",
  },
  article_name: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "center",
    " & h3": {
      paddingLeft: "24px",
      paddingRight: "24px",
      textAlign: "center",
      fontSize: "45px",
      fontFamily: "Western",
      color: theme.colors.primary,
    },
  },
  article_text: {
    width: "100%",
    padding: "16px",
    boxSizing: "border-box",
    paddingTop: 0,
    fontFamily: "Roboto",
    color: theme.colors.primary,
    "& h5": {
      marginTop: 0,
      marginBottom: "16px",
      fontSize: "24px",
    },
  },
  horizontal: {
    display: "flex",
    width: "100%",
    height: "4px",
    backgroundColor: theme.palette.error.dark,
    opacity: "1",
  },
  galery_container: {
    padding: "8px",
  },
  article_p: {
    fontFamily: "Roboto",
    fontSize: "16px",
    lineHeight: "1.43",
  },
  contact_link: {
    display: "flex",
    width: "100%",
    maxWidth: "160px",
    height: "24px",
    border: "2px solid",
    borderColor: theme.palette.error.dark,
    borderRadius: "6px",
    padding: "4px",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Western",
    fontSize: "18px",
    letterSpacing: "1.43",
    color: theme.colors.primary,
    textDecoration: "none",
    marginLeft: "16px",
    marginBottom: "16px",
    transition: "all 0.2s ease",
    "& .text":{
      marginRight: "8px",
    },
    "&:hover": {
      backgroundColor: theme.backgrounds.contactsHover,
    },
  },
}));

export default function Article({
  text,
  name,
  articleName,
  redirect,
  slides,
  _id,
  lastOnPage,
  reverse,
  ...props
}) {
  const classes = useStyle();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
      <Paper
        className={
          !mobile
            ? classes.main_sheet
            : `${classes.main_sheet} ${classes.main_sheet_mobile}`
        }
        elevation={1}
      >
        <Grid container direction="column">
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <div id={_id} className={classes.article_name}>
              <div className={classes.horizontal} />
              <h3>{`${name}`}</h3>
              <div className={classes.horizontal} />
            </div>
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Grid
              container
              direction={reverse ? "row-reverse" : "row"}
              spacing={2}
            >
              <Grid item xl={5} lg={5} md={6} sm={12} xs={12}>
                <Paper elevation={2} className={classes.galery_container}>
                  {slides && slides.length > 1 ? (
                    <GalleryWithPreview images={slides} />
                  ) : (
                    <ZoomableImage picture={slides && slides[0]} />
                  )}
                </Paper>
              </Grid>
              <Grid item xl={7} lg={7} md={6} sm={12} xs={12}>
                <article className={classes.article_text}>
                  <h5>{articleName}</h5>
                  <p
                    className={classes.article_p}
                    dangerouslySetInnerHTML={{
                      __html: text.replace(/\n/g, "</br>"),
                    }}
                  />
                  {redirect ? (
                    <Link
                      target="blank"
                      rel="noopener noreferrer"
                      href={redirect}
                    >{`Докладніше...`}</Link>
                  ) : (
                    ""
                  )}
                </article>
                {!lastOnPage ? (
                  <Grid item xl={7} lg={7} md={6} sm={12} xs={12}>
                    <a href="/#contacts" className={classes.contact_link}>
                      <span className="text">{`Сконтактувати`}</span>
                      <FingerDown width="16px" height="16px"/>
                    </a>
                  </Grid>
                ) : (
                  ""
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
