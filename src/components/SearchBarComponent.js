import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import './SearchBarComponent.css'

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function SearchBarComponent(props) {
  const classes = useStyles();

  return (
    <div className="SearchBar">
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
            <SearchIcon />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Search Pokemon" onChange={props.filterByName} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
