import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import Button from "@material-ui/core/Button";

const UseStyles = makeStyles((theme) => ({
  go_top_btn: {
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    minWidth: "50px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.background.default,
  },
}));

export default function ScrollTopButton({ ...props }) {
  const classes = UseStyles();
  const goTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Button
      color="default"
      variant="contained"
      className={classes.go_top_btn}
      onClick={() => {
        goTop();
      }}
    >
      <ExpandLessIcon fontSize="large" color="inherit" />
    </Button>
  );
}
