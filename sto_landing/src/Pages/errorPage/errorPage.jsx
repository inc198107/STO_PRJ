import React from 'react';
import { useStyle } from './style';
import { Grid, Paper} from '@material-ui/core';

import BrokenTool from '../../Assets/images/icons/broken.svg';

export default function ErrorPage({ ...props }) {
  const classes = useStyle();
  return (
    <div className={classes.error_container}>
    <Grid container justify='center' alignContent='center'>
      <Grid item xl={6} lg={6} md={8} sm={10} xs={12}>
        <Paper elevation={3}>
          <Grid container justify='center'>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
              <div className={classes.image_wrapper}>
                <img className={classes.broken_page} src={BrokenTool} alt='brocken source' title='broken page' />
              </div>
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
              <div className={classes.error_text_wrapper}>
                <h1> We really sorry, maybe something went wrong...</h1>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
    </div>
  );
}
