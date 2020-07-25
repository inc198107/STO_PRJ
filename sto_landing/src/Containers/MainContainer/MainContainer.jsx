import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  main: {
    position: 'relative',
  },
  mobile: {
    paddingLeft: '6px',
    paddingRight: '6px',
  },
}));

export default function MainContainer({ children, ...props }) {
  const classes = useStyle();
  const mobile = useMediaQuery('(max-width:576px)');
  return (
    <Container maxWidth='xl' className={!mobile ? classes.main : `${classes.main} ${classes.mobile}`}>
      {children}
    </Container>
  );
}
