import React from 'react';
import { useTheme } from '@mui/material/styles'; 
import { Link, useMediaQuery } from '@mui/material';
import Grid2 from '@mui/material/Grid2';

import { useStyles } from './style';

export default function Footer({ ...props }) {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('xs'));
  const today = new Date();
  const year = today.getFullYear();
  const classes = useStyles();
  return (
    <div className={classes.footer_root}>
      <Grid2 container alignItems='center' justifyContent='space-between' direction={mobile ? 'column' : 'row'}>
        <Grid2 xs={12} sm={6} md={4} lg={3} xl={3}>
          <span className={classes.data}>{`ZahidChip ${year}`}</span>
        </Grid2>
        <Grid2 xs={12} sm={6} md={4} lg={3} xl={3}>
          <div className={classes.data_link}>
            <span className={`${classes.data}`}>
              {`Inspired by `}
              <Link href='https://zahid-chip.com/' target='blank'>
                {`zahid-chip.com`}
              </Link>
            </span>
          </div>
        </Grid2>
      </Grid2>
    </div>
  );
}
