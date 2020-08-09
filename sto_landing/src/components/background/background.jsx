import React from 'react';
import { useStyle } from './style';

export default function MainBackground() {
  const classes = useStyle();
  return <div className={classes.main} />;
}
