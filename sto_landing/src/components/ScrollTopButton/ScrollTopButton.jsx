import React from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Button from '@mui/material/Button';

import { UseStyles } from './style';

export default function ScrollTopButton({ ...props }) {
  const classes = UseStyles();
  const goTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <Button
      color='default'
      variant='contained'
      className={classes.go_top_btn}
      onClick={() => {
        goTop();
      }}
    >
      <ExpandLessIcon fontSize='large' color='inherit' />
    </Button>
  );
}
