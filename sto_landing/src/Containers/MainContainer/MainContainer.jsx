import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  main: {
    position: 'relative',
  }
}))

export default function MainContainer({ children, ...props }) {
  const classes = useStyle();
  return <Container maxWidth="xl" className={classes.main}>{children}</Container>;
}
