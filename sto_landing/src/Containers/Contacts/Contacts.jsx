import React from "react";
import { Grid, Link, Paper, useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LeafMap from "../../components/Map";
import { ReactComponent as TuningAva } from "../../Assets/images/icons/chiptuning-ava.svg";
import { ReactComponent as SteeringAva } from "../../Assets/images/icons/steering-ava.svg";
import { ReactComponent as MailIcon } from "../../Assets/images/icons/mail-icon.svg";
import { ReactComponent as ScheduleIcon } from "../../Assets/images/icons/schedule-icon.svg";
import { ReactComponent as MapIcon } from "../../Assets/images/icons/map-icon.svg";

const useStyles = makeStyles((theme) => ({
  main_sheet: {
    padding: "16px",
    marginTop: "32px",
    position: "relative",
  },
  main_sheet_mobile:{
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
  horizontal: {
    display: "flex",
    width: "100%",
    height: "4px",
    backgroundColor: theme.palette.error.dark,
    opacity: "1",
  },
  staff: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
  },
  masterBlock: {
    minHeight: "120px",
    display: "flex",
    flexDirection: "row",
    padding: "8px",
    alignItems: "center",
    boxSizing: "border-box",
    "&:not(:first-of-type)": {
      marginTop: "16px",
    },
  },
  masterBlockMob: {
    flexDirection: "column",
    padding: " 8px 0 8px 0",
    marginBottom: "16px",
    "&:not(:first-of-type)": {
      marginTop: "0px",
    },
  },
  contact: {
    display: "flex",
    flexDirection: "column",
    padding: "8px 8px 8px 16px",
    marginLeft: "16px",
    "& .name": {
      fontSize: "18px",
      fontWeight: "bold",
    },
    "& .phone": {
      fontWeight: "bold",
      "& .number": {
        fontWeight: "normal",
      },
    },
  },
  mailAndShedule: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  ava: {
    width: "80px",
    height: "80px",
    overflow: "hidden",
    borderRadius: "50%",
    border: `1px solid ${theme.backgrounds.backgroundSecondary}`,
    boxShadow: theme.blockShadows.shadow3,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  mailBlock: {
    display: "flex",
    flexDirection: "row",
    padding: "8px 8px 8px 16px",
    marginLeft: "16px",
    alignItems: "center",
    "& .sign": {
      fontSize: "18px",
      fontWeight: "bold",
    },
    "& .mailLink": {
      marginLeft: "8px",
      cursor: "pointer",
    },
  },
  sheduleBlock: {
    padding: "8px 8px 8px 16px",
    marginLeft: "8px",
    display: "flex",
    flexDirection: "column",
    "& .sign": {
      fontSize: "18px",
      fontWeight: "bold",
      "&:not(:first-of-type)": {
        marginTop: "6px",
      },
    },
    "& .work": {
      color: theme.palette.success.dark,
    },
    "& .wikend": {
      color: theme.palette.error.dark,
      fontWeight: "bold",
    },
  },

  mobBlock: {
    padding: "8px 8px 8px 8px",
    marginLeft: "0",
    alignSelf:"flex-start",
  },

  addressBlock: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  mapContainer: {
    width: "100%",
    height: "200px",
    padding: "4px",
    marginTop: "16px",
    boxSizing: "border-box",
    "& .leaflet-container": {
      height: "100%",
      width: "100%",
    },
  },
  mapContainerMobile:{
    marginTop: "0",
    height: "250px",
  }
}));

export default function Contacts({ ...props }) {
  const classes = useStyles();
  const mobile = useMediaQuery("(max-width:576px)");
  return (
    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
      <Paper className={!mobile? classes.main_sheet : `${classes.main_sheet} ${classes.main_sheet_mobile}`} elevation={1}>
        <Grid container direction="column">
          <Grid item xl={12} lg={12} md={12} sm={12}>
            <div className={classes.article_name}>
              <div className={classes.horizontal} />
              <h3 id="contacts">{`Наші Kонтакти`}</h3>
              <div className={classes.horizontal} />
            </div>
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Grid container direction={mobile ? "column" : "row"}>
              <Grid item xl={5} lg={5} md={4} sm={12} xs={12}>
                <div className={classes.staff}>
                  <div
                    className={
                      !mobile
                        ? classes.masterBlock
                        : `${classes.masterBlock} ${classes.masterBlockMob}`
                    }
                  >
                    <div className={classes.ava}>
                      <TuningAva width="55px" height="55px" />
                    </div>
                    <div
                      className={
                        !mobile
                          ? classes.contact
                          : `${classes.contact} ${classes.mobBlock}`
                      }
                    >
                      <span className="name">{`Артем`}</span>
                      <span className="phone">
                        {`Moб: `}
                        <Link
                          className="number"
                          href="tel:+38 (063) 443-45-53"
                        >{`+38 (063) 443-45-53`}</Link>
                      </span>
                      <span className="position">
                        {`Chip Tuning/Діагностика/Видалення Сажових Фільтрів/e.t.c`}
                      </span>
                    </div>
                  </div>
                  <div
                    className={
                      !mobile
                        ? classes.masterBlock
                        : `${classes.masterBlock} ${classes.masterBlockMob}`
                    }
                  >
                    <div className={classes.ava}>
                      <SteeringAva width="55px" height="55px" />
                    </div>
                    <div
                      className={
                        !mobile
                          ? classes.contact
                          : `${classes.contact} ${classes.mobBlock}`
                      }
                    >
                      <span className="name">{`Андрій`}</span>
                      <span className="phone">
                        {`Moб: `}
                        <Link
                          className="number"
                          href="+38 (067) 972-56-10"
                        >{`+38 (067) 972-56-10`}</Link>
                      </span>
                      <span className="position">{`Ремонт кермових систем`}</span>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item xl={3} lg={3} md={4} sm={12} xs={12}>
                <div className={classes.mailAndShedule}>
                  <div
                    className={
                      !mobile
                        ? classes.masterBlock
                        : `${classes.masterBlock} ${classes.masterBlockMob}`
                    }
                  >
                    <div className={classes.ava}>
                      <MailIcon width="50px" height="50px" />
                    </div>
                    <div className={!mobile ? classes.mailBlock : `${classes.mailBlock } ${classes.mobBlock}`}>
                      <span className="sign">{`Email: `}</span>
                      <Link
                        className="mailLink"
                        href="mailto:zahidchip@gmail.com"
                      >
                        zahidchip@gmail.com
                      </Link>
                    </div>
                  </div>
                  <div
                    className={
                      !mobile
                        ? classes.masterBlock
                        : `${classes.masterBlock} ${classes.masterBlockMob}`
                    }
                  >
                    <div className={classes.ava}>
                      <ScheduleIcon width="50px" height="50px" />
                    </div>
                    <div className={!mobile ? classes.sheduleBlock : `${classes.sheduleBlock} ${classes.mobBlock}`}>
                      <div className="sign">{`Працюємо: `}</div>
                      <div className="work">{`Пн - Пт: 9:00 - 18:00`}</div>
                      <div className="work">{`Cб: 9:00 - 14:00`}</div>
                      <div className="sign">{`Відпочиваємо: `}</div>
                      <div className="wikend">{`Нд`}</div>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                <div className={classes.addressBlock}>
                  <div
                    className={
                      !mobile
                        ? classes.masterBlock
                        : `${classes.masterBlock} ${classes.masterBlockMob}`
                    }
                  >
                    <div className={classes.ava}>
                      <MapIcon width="50px" height="50px" />
                    </div>
                    <div className={!mobile ? classes.sheduleBlock : `${classes.sheduleBlock} ${classes.mobBlock}`}>
                      <div className="sign">{`Наша адреса: `}</div>
                      <div>{`79000, Україна, Львів, вул. Мостова 29`}</div>
                    </div>
                  </div>
                  <Paper className={!mobile? classes.mapContainer : `${classes.mapContainer} ${classes.mapContainerMobile}`} elevation={2}>
                    <LeafMap />
                  </Paper>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
