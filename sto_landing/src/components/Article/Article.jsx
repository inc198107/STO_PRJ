import React from 'react';
import PropTypes from 'prop-types';
import GalleryWithPreview from '../GalleryWIthPreview/GalleryWithPreview';
import ZoomableImage from './ZoomableImage';
import { Grid, Paper, useMediaQuery, Link } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import { useStyle } from './style';

import { ReactComponent as FingerDown } from '../../Assets/images/icons/finger-icon.svg';

  const Article = React.memo(function ArticleComponent({ text, name, articleName, redirect, slides, _id, lastOnPage, reverse, ...props }) {
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
                      <span>{`Для збільшення торкніться фото`}</span>
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
                    <Grid item  xl={7} lg={7} md={3} sm={12} xs={12}>
                      {redirect ? (
                        <Link target='blank' rel='noopener noreferrer' href={redirect}>{`Докладніше...`}</Link>
                      ) : (
                        ''
                      )}
                    </Grid>
                    <Grid  item xl={2} lg={3} md={4} sm={12} xs={12}>
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
})

export default Article;

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
