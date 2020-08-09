import React from 'react';
import { Grid, Link, Paper, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import LeafMap from '../../components/Map';
import { ReactComponent as TuningAva } from '../../Assets/images/icons/chiptuning-ava.svg';
import { ReactComponent as SteeringAva } from '../../Assets/images/icons/steering-ava.svg';
import { ReactComponent as MailIcon } from '../../Assets/images/icons/mail-icon.svg';
import { ReactComponent as ScheduleIcon } from '../../Assets/images/icons/schedule-icon.svg';
import { ReactComponent as MapIcon } from '../../Assets/images/icons/map-icon.svg';

import {route, center, position} from 'Assets/geo.js';

import { useStyles } from './style';

export default function Contacts({ ...props }) {
  const classes = useStyles();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('xs'));
  return (
    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
      <Paper
        className={!mobile ? classes.main_sheet : `${classes.main_sheet} ${classes.main_sheet_mobile}`}
        elevation={1}
      >
        <Grid container direction='column'>
          <Grid item xl={12} lg={12} md={12} sm={12}>
            <div className={classes.article_name}>
              <div className={classes.horizontal} />
              <h3 id='contacts'>{`Нашi Kонтакти`}</h3>
              <div className={classes.horizontal} />
            </div>
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Grid container direction={mobile ? 'column' : 'row'}>
              <Grid item xl={5} lg={5} md={4} sm={12} xs={12}>
                <div className={classes.staff}>
                  <div
                    className={!mobile ? classes.master_block : `${classes.master_block} ${classes.master_block_mob}`}
                  >
                    <div className={classes.ava}>
                      <TuningAva width='55px' height='55px' />
                    </div>
                    <div className={!mobile ? classes.contact : `${classes.contact} ${classes.mob_block}`}>
                      <span className='name'>{`Артем`}</span>
                      <span className='phone'>
                        {`Moб: `}
                        <Link className='number' href='tel:+38 (063) 443-45-53'>{`+38 (063) 443-45-53`}</Link>
                      </span>
                      <span className='position'>{`Chip Tuning/Діагностика/Видалення Сажових Фільтрів/e.t.c`}</span>
                    </div>
                  </div>
                  <div
                    className={!mobile ? classes.master_block : `${classes.master_block} ${classes.master_block_mob}`}
                  >
                    <div className={classes.ava}>
                      <SteeringAva width='55px' height='55px' />
                    </div>
                    <div className={!mobile ? classes.contact : `${classes.contact} ${classes.mob_block}`}>
                      <span className='name'>{`Андрій`}</span>
                      <span className='phone'>
                        {`Moб: `}
                        <Link className='number' href='+38 (067) 972-56-10'>{`+38 (067) 972-56-10`}</Link>
                      </span>
                      <span className='position'>{`Ремонт кермових систем`}</span>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item xl={3} lg={3} md={4} sm={12} xs={12}>
                <div className={classes.mail_and_schedule}>
                  <div
                    className={!mobile ? classes.master_block : `${classes.master_block} ${classes.master_block_mob}`}
                  >
                    <div className={classes.ava}>
                      <MailIcon width='50px' height='50px' />
                    </div>
                    <div className={!mobile ? classes.mail_block : `${classes.mail_block} ${classes.mob_block}`}>
                      <span className='sign'>{`Email: `}</span>
                      <Link className='mailLink' href='mailto:zahidchip@gmail.com'>
                        zahidchip@gmail.com
                      </Link>
                    </div>
                  </div>
                  <div
                    className={!mobile ? classes.master_block : `${classes.master_block} ${classes.master_block_mob}`}
                  >
                    <div className={classes.ava}>
                      <ScheduleIcon width='50px' height='50px' />
                    </div>
                    <div className={!mobile ? classes.shedule_block : `${classes.shedule_block} ${classes.mob_block}`}>
                      <div className='sign'>{`Працюємо: `}</div>
                      <div className='work'>{`Пн - Пт: 9:00 - 18:00`}</div>
                      <div className='work'>{`Cб: 9:00 - 14:00`}</div>
                      <div className='sign'>{`Відпочиваємо: `}</div>
                      <div className='wikend'>{`Нд`}</div>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                <div className={classes.address_block}>
                  <div
                    className={!mobile ? classes.master_block : `${classes.master_block} ${classes.master_block_mob}`}
                  >
                    <div className={classes.ava}>
                      <MapIcon width='50px' height='50px' />
                    </div>
                    <div className={!mobile ? classes.shedule_block : `${classes.shedule_block} ${classes.mob_block}`}>
                      <div className='sign'>{`Наша адреса: `}</div>
                      <div>{`79000, Україна, Львів, вул. Мостова 29`}</div>
                    </div>
                  </div>
                  <Paper
                    className={
                      !mobile ? classes.map_container : `${classes.map_container} ${classes.map_container_mobile}`
                    }
                    elevation={2}
                  >
                    <LeafMap route={route} center={center} position={position} />
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
