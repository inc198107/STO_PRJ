import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GalleryWithPreview from "../GalleryWIthPreview/GalleryWithPreview";
import { Grid, Paper } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
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
  galery_container:{
    padding: '8px',
  },
  article_p:{
    fontFamily:'Roboto', 
    fontSize: '16px',
    lineHeight: '1.43'
  }
}));

export default function Article({
  text,
  name,
  articleName,
  slides,
  _id,
  reverse,
  ...props
}) {
  const classes = useStyle();
  return (
    <Grid item xl={12} lg={12} md={12} sm={12}>
      <Grid container direction="column">
        <Grid item xl={12} lg={12} md={12} sm={12}>
          <div id={_id} className={classes.article_name}>
            <div className={classes.horizontal} />
            <h3>{`${name}`}</h3>
            <div className={classes.horizontal} />
          </div>
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12}>
          <Grid
            container
            direction={reverse ? "row-reverse" : "row"}
            spacing={2}
          >
            <Grid item xl={5} lg={5} md={6} sm={12}>
              <Paper elevation={2} className={classes.galery_container}>
                <GalleryWithPreview images={slides} />
              </Paper>
            </Grid>
            <Grid item xl={7} lg={7} md={6} sm={12}>
              <article className={classes.article_text}>
                <h5>{articleName}</h5>
                <p className={classes.article_p}>{text}</p>
              </article>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
