import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Link, useMediaQuery } from "@material-ui/core";
import headerBckgr from "../../Assets/images/header_bckgr_bw.jpg";
import { ReactComponent as Steering } from "../../Assets/images/icons/steering-wheel.svg";
import { ReactComponent as Tuning } from "../../Assets/images/icons/processor.svg";
import { ReactComponent as Contacts } from "../../Assets/images/icons/contacts-icon.svg";

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
      fontSize: "100px",
      fontFamily: "Western",
    },
  },
  site_name_mobile: {
    " & h1": {
      paddingLeft: "0",
      paddingRight: "0",
      textAlign: "center",
      fontSize: "70px",
      fontFamily: "Western",
    },
  },
  slogan_wrapper: {
    justifyContent: "center",
  },
  slogan: {
    fontFamily: "Quentin",
    fontSize: "54px",
    transform: "rotate(-10deg)",
    color: theme.palette.background.default,
    display: "flex",
    justifyContent: "center"
  },
  slogan_mobile:{
    fontSize: "32px",
  },
  horizontal: {
    display: "flex",
    width: "100%",
    height: "4px",
    backgroundColor: "#ffffff",
    opacity: "0.7",
  },
  links: {
    marginTop: '16px',
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
  const tablet = useMediaQuery("(max-width:768px)");
  return (
    <div item className={classes.header_root}>
      <Grid
        container
        direction="column"
        justify="space-around"
        alignItems="center"
      >
        <Grid container alignItems="center" justify="center">
          <Grid
            item
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
            className={classes.main_title}
          >
            <div
              className={
                !mobile
                  ? `${classes.site_name}`
                  : `${classes.site_name} ${classes.site_name_mobile}`
              }
            >
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
        >
          <Grid
            item
            xl={5}
            lg={6}
            md={7}
            sm={10}
            xs={10}
            className={classes.slogan_wrapper}
          >
            <span className={!tablet?classes.slogan:`${classes.slogan} ${classes.slogan_mobile}`}>{`We will make Your Car Perfect!`}</span>
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
            <Link href="/#steering">
              {!tablet ? (
                `Кермові системи`
              ) : (
                <Steering width="40px" height="40px" />
              )}
            </Link>
          </Grid>
          <Grid item>
            <Link href="/#chip_tuning">
              {!tablet ? `Chip Tuning` : <Tuning width="40px" height="40px" />}
            </Link>
          </Grid>
          <Grid item>
            <Link href="/#steering">Two</Link>
          </Grid>
          <Grid item>
              <Link href="/#contacts">  {!tablet ? `Контакти` : <Contacts width="40px" height="40px" />}</Link>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
