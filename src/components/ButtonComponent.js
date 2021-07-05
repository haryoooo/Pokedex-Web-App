import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
    },
    fontSize: 10
  },
}));

export default function ButtonComponent(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" size="medium" color="primary" onClick={props.goToDetails}>
         Go To Details
    </Button>
    </div>
  );
}
