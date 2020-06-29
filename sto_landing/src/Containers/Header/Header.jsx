import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import headerBckgr from "../../Assets/images/header_bckgr.jpg";

const useStyles = makeStyles((theme) => ({
  header_root: {
    display: "flex",
    boxSizing: "border-box",
    width: "100%",
    minHeight: "400px",
    background: `url(${headerBckgr}) no-repeat`,
    backgroundSize: "cover",
    padding: "16px",
  },
  main_title: {
    color: "#ffffff",
  },
  site_name: {
    width: "100%",
    display: "flex",
    boxSizing: "border-box",
    flexDirection: "row",
    flexWrap: "nowrap",
    flexBasis: "90%",
    alignItems: "center",
    justifyContent: "center",
    " & h1": {
      paddingLeft: "32px",
      paddingRight: "32px",
      textAlign: "center",
      fontSize: "90px",
      fontFamily: "Western",
    },
  },
  horizontal: {
    display: "flex",
    width: "100%",
    height: "4px",
    backgroundColor: "#ffffff",
    opacity: "0.7",
  },
  links: {
    color: "#ffffff",
    fontFamily: "Western",
    fontSize: "16px",
    textTransform: "uppercase",
  },
}));

export default function Header({ links, ...props }) {
  const classes = useStyles();
  return (
    <div item className={classes.header_root}>
      <Grid container direction="column" justify="space-between">
        <Grid container>
          <Grid item lg={12} className={classes.main_title}>
            <div className={classes.site_name}>
              <div className={classes.horizontal} />
              <h1>{`West Service`}</h1>
              <div className={classes.horizontal} />
            </div>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
          className={classes.links}
        >
          <Grid item>
            <span>Four</span>
          </Grid>
          <Grid item>
            <span>One</span>
          </Grid>
          <Grid item>
            <span>Two</span>
          </Grid>
          <Grid item>
            <span>Three</span>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
