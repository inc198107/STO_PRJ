import React from 'react';
import { useStyle } from './style';
import { Paper } from '@mui/material';
import Grid2 from '@mui/material/Grid2';

import BrokenTool from '../../Assets/images/icons/broken.svg';

export default function ErrorPage({ ...props }) {
  const classes = useStyle();
  return (
    <div className={classes.error_container}>
    <Grid2 container justifyContent='center' alignContent='center'>
      <Grid2 xs={12} sm={10} md={8} lg={6} xl={6}>
        <Paper elevation={3}>
          <Grid2 container justifyContent='center'>
            <Grid2 xs={12} sm={12} md={6} lg={6} xl={6}>
              <div className={classes.image_wrapper}>
                <img className={classes.broken_page} src={BrokenTool} alt='brocken source' title='broken page' />
              </div>
            </Grid2>
            <Grid2 xs={12} sm={12} md={6} lg={6} xl={6}>
              <div className={classes.error_text_wrapper}>
                <h1> We really sorry, maybe something went wrong...</h1>
              </div>
            </Grid2>
          </Grid2>
        </Paper>
      </Grid2>
    </Grid2>
    </div>
  );
}
