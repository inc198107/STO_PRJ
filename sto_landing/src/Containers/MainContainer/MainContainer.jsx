import React from 'react';
import { Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

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
