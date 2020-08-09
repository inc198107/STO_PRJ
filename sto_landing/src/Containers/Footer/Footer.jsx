import React from 'react';
import { useTheme } from '@material-ui/core/styles'; 
import { Grid, Link, useMediaQuery } from '@material-ui/core';

import { useStyles } from './style';

export default function Footer({ ...props }) {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('xs'));
  const today = new Date();
  const year = today.getFullYear();
  const classes = useStyles();
  return (
    <div className={classes.footer_root}>
      <Grid container alignItems='center' justify='space-between' direction={mobile ? 'column' : 'row'}>
        <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
          <span className={classes.data}>{`ZahidChip ${year}`}</span>
        </Grid>
        <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
          <div className={classes.data_link}>
            <span className={`${classes.data}`}>
              {`Inspired by `}
              <Link href='https://zahid-chip.com/' target='blank'>
                {`zahid-chip.com`}
              </Link>
            </span>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
