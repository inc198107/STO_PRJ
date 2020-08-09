import React from 'react';
import { Container } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';

import { useStyle } from './style';

export default function MainContainer({ children, ...props }) {
  const classes = useStyle();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('xs'));
  return (
    <Container maxWidth='xl' className={!mobile ? classes.main : `${classes.main} ${classes.mobile}`}>
      {children}
    </Container>
  );
}
