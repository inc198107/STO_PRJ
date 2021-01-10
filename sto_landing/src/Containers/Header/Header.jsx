import React, { Fragment } from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Grid, Link, useMediaQuery } from '@material-ui/core';
import { ReactComponent as Steering } from '../../Assets/images/icons/steering-wheel.svg';
import { ReactComponent as Tuning } from '../../Assets/images/icons/processor.svg';
import { ReactComponent as Contacts } from '../../Assets/images/icons/contacts-icon.svg';
import { ReactComponent as DpfOff } from '../../Assets/images/icons/dpf-icon.svg';
import { ReactComponent as AirBag } from '../../Assets/images/icons/airbag.svg';
import { ReactComponent as EgrOff } from '../../Assets/images/icons/egr-icon.svg';
import { ReactComponent as Odo } from '../../Assets/images/icons/odo-icon.svg';

import { useStyles } from './style';

export default function Header({ links, ...props }) {
  const classes = useStyles();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('xs'));
  const tablet = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <div item='true' className={classes.header_root}>
      <Grid container direction='column' justify='space-around' alignItems='center'>
        <Grid container alignItems='center' justify='center'>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} className={classes.main_title}>
            <div className={!mobile ? `${classes.site_name}` : `${classes.site_name} ${classes.site_name_mobile}`}>
              <div className={classes.horizontal} />
              <h1>{`Western Chip`}</h1>
              <div className={classes.horizontal} />
            </div>
          </Grid>
        </Grid>
        <Grid container direction='row' justify='space-around' alignItems='center'>
          <Grid item xl={5} lg={6} md={7} sm={10} xs={10} className={classes.slogan_wrapper}>
            <span
              className={!tablet ? classes.slogan : `${classes.slogan} ${classes.slogan_mobile}`}
            >{`We will make Your Car Perfect!`}</span>
          </Grid>
        </Grid>
        <Grid container direction='row' justify='space-around' alignItems='center' className={classes.links}>
          <Grid item>
            <Link href='/#steering'>
              {!tablet ? (
                <Fragment>
                  <span className={classes.category_name}>{`Кермові системи`}</span>
                  <Steering width='30px' height='30px' />
                </Fragment>
              ) : (
                <Steering width='40px' height='40px' />
              )}
            </Link>
          </Grid>
          <Grid item>
            <Link href='/#chip_tuning'>
              {!tablet ? (
                <Fragment>
                  <span className={classes.category_name}>{`Chip Tuning`}</span>
                  <Tuning width='30px' height='30px' />
                </Fragment>
              ) : (
                <Tuning width='40px' height='40px' />
              )}
            </Link>
          </Grid>
          <Grid item>
            <Link href='/#fap_off'>
              {!tablet ? (
                <Fragment>
                  <span className={classes.category_name}>{`DPF/FAP off`}</span>
                  <DpfOff width='60px' height='50px' />
                </Fragment>
              ) : (
                <DpfOff width='50px' height='40px' />
              )}
            </Link>
          </Grid>
          <Grid item>
            <Link href='/#egr_off'>
              {!tablet ? (
                <Fragment>
                  <span className={classes.category_name}>{`EGR off`}</span>
                  <EgrOff width='30px' height='30px' />
                </Fragment>
              ) : (
                <EgrOff width='40px' height='40px' />
              )}
            </Link>
          </Grid>
          <Grid item>
            <Link href='/#airbag'>
              {!tablet ? (
                <Fragment>
                  <span className={classes.category_name}>{`Air Bag`}</span>
                  <AirBag width='30px' height='30px' />
                </Fragment>
              ) : (
                <AirBag width='40px' height='40px' />
              )}
            </Link>
          </Grid>
          <Grid item>
            <Link href='/#odo'>
              {!tablet ? (
                <Fragment>
                  <span className={classes.category_name}>{`Корегування Одометрів`}</span>
                  <Odo width='30px' height='30px' />
                </Fragment>
              ) : (
                <Odo width='40px' height='40px' />
              )}
            </Link>
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Link href='/#contacts' style={{ marginTop: '22px' }}>
              {!tablet ? (
                <Fragment>
                  <span className={classes.category_name}>{`Контакти`}</span>
                  <Contacts width='30px' height='30px' />
                </Fragment>
              ) : (
                <Contacts width='48px' height='48px' />
              )}
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
