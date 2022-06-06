import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconReturn from "../assets/icon-return.png";
import "../styles/components/HeaderComponent.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > svg": {
      margin: theme.spacing(2),
    },
    cursor: "pointer",
  },
}));

export default function SvgIconsSize() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className="goBackButton">
        <img src={IconReturn} alt="home-icon" />
      </div>
    </div>
  );
}
