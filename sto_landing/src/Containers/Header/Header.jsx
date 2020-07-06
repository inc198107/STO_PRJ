import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Link, useMediaQuery } from "@material-ui/core";
import headerBckgr from "../../Assets/images/header_bckgr_bw.jpg";

const useStyles = makeStyles((theme) => ({
  header_root: {
    display: "flex",
    boxSizing: "border-box",
    width: "100%",
    minHeight: "100vh",
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
  site_name_mobile:{
    " & h1": {
      paddingLeft: "0",
      paddingRight: "0",
      textAlign: "center",
      fontSize: "70px",
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
    "& a": {
      color: "#ffffff",
      fontFamily: "Western",
      fontSize: "24px",
      textTransform: "uppercase",
    },
  },
}));

export default function Header({ links, ...props }) {
  const classes = useStyles();
  const mobile = useMediaQuery("(max-width:576px)");
  return (
    <div item className={classes.header_root}>
      <Grid container direction="column" justify="space-around" alignItems="center">
        <Grid container alignItems="center">
          <Grid item xl={12} lg={12} md={12} sm={12} className={classes.main_title}>
            <div className={!mobile? `${classes.site_name}`: `${classes.site_name} ${classes.site_name_mobile}`}>
              <div className={classes.horizontal} />
              <h1>{`Western Chip`}</h1>
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
            <Link href="/#steering">Кермові системи</Link>
          </Grid>
          <Grid item>
            <Link href="/#steering">One</Link>
          </Grid>
          <Grid item>
          <Link href="/#steering">Two</Link>
          </Grid>
          <Grid item>
          <Link href="/#steering">Three</Link>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
