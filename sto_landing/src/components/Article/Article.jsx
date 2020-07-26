import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import GalleryWithPreview from '../GalleryWIthPreview/GalleryWithPreview';
import ZoomableImage from './ZoomableImage';
import { Grid, Paper, useMediaQuery, Link } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import { ReactComponent as FingerDown } from '../../Assets/images/icons/finger-icon.svg';

const useStyle = makeStyles((theme) => ({
  main_sheet: {
    padding: '16px',
    marginTop: '32px',
    position: 'relative',
  },
  main_sheet_mobile: {
    padding: '8px',
  },
  article_name: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    ' & h3': {
      paddingLeft: '24px',
      paddingRight: '24px',
      textAlign: 'center',
      fontSize: '45px',
      fontFamily: 'Western',
      color: theme.colors.primary,
    },
  },
  article_text: {
    width: '100%',
    padding: '16px',
    boxSizing: 'border-box',
    paddingTop: 0,
    fontFamily: 'Roboto',
    color: theme.colors.primary,
    '& h5': {
      marginTop: 0,
      marginBottom: '16px',
      fontSize: '24px',
    },
  },
  horizontal: {
    display: 'flex',
    width: '100%',
    height: '4px',
    backgroundColor: theme.palette.error.dark,
    opacity: '1',
  },
  galery_container: {
    padding: '8px',
  },
  article_p: {
    fontFamily: 'Roboto',
    fontSize: '16px',
    lineHeight: '1.43',
  },
  contact_link: {
    display: 'flex',
    width: '100%',
    maxWidth: '160px',
    height: '24px',
    border: '2px solid',
    borderColor: theme.palette.error.dark,
    borderRadius: '6px',
    padding: '4px',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Western',
    fontSize: '18px',
    letterSpacing: '1.43',
    color: theme.colors.primary,
    textDecoration: 'none',
    transition: 'all 0.2s ease',
    '& .text': {
      marginRight: '8px',
    },
    '&:hover': {
      backgroundColor: theme.backgrounds.contactsHover,
    },
  },
  adv: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8px',
    fontSize: '12px',
    color: theme.palette.secondary.light,
  },
}));

export default function Article({ text, name, articleName, redirect, slides, _id, lastOnPage, reverse, ...props }) {
  const classes = useStyle();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('xs'));
  const tablet = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
      <Paper
        className={!mobile ? classes.main_sheet : `${classes.main_sheet} ${classes.main_sheet_mobile}`}
        elevation={1}
      >
        <Grid container direction='column'>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <div id={_id} className={classes.article_name}>
              <div className={classes.horizontal} />
              <h3>{`${name}`}</h3>
              <div className={classes.horizontal} />
            </div>
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Grid container direction={reverse ? 'row-reverse' : 'row'} spacing={2}>
              <Grid item xl={5} lg={5} md={6} sm={12} xs={12}>
                <Paper elevation={2} className={classes.galery_container}>
                  {slides && slides.length > 1 ? (
                    <GalleryWithPreview images={slides} reverse={reverse} />
                  ) : (
                    <ZoomableImage picture={slides && slides[0]} />
                  )}
                  {mobile ? (
                    <div className={classes.adv}>
                      <span>{`Для збільшення нажміть на фото`}</span>
                    </div>
                  ) : (
                    ''
                  )}
                </Paper>
              </Grid>
              <Grid item xl={7} lg={7} md={6} sm={12} xs={12}>
                <article className={classes.article_text}>
                  <h5>{articleName}</h5>
                  <p
                    className={classes.article_p}
                    dangerouslySetInnerHTML={{
                      __html: text.replace(/\n/g, '</br>'),
                    }}
                  />
                  <Grid container direction='row' justify='space-between' alignItems='center'>
                    <Grid item alignItems='center' xl={7} lg={7} md={3} sm={12} xs={12}>
                      {redirect ? (
                        <Link target='blank' rel='noopener noreferrer' href={redirect}>{`Докладніше...`}</Link>
                      ) : (
                        ''
                      )}
                    </Grid>
                    <Grid alignItems='center' justify='flex-end' item xl={2} lg={3} md={4} sm={12} xs={12}>
                      {!lastOnPage ? (
                        <a
                          href='/#contacts'
                          className={classes.contact_link}
                          style={tablet ? { marginTop: '16px' } : {}}
                        >
                          <span className='text'>{`Сконтактувати`}</span>
                          <FingerDown width='16px' height='16px' />
                        </a>
                      ) : (
                        ''
                      )}
                    </Grid>
                  </Grid>
                </article>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

Article.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  articleName: PropTypes.string.isRequired,
  redirect: PropTypes.string,
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string,
      title: PropTypes.string,
      cols: PropTypes.number,
    })
  ).isRequired,
  _id: PropTypes.string.isRequired,
  lastOnPage: PropTypes.bool,
  reverse: PropTypes.bool,
};
