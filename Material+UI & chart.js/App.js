import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  Paper: {
    height: 500,
    backgroundColor: '#fff',
    width: 300,
    margin: '0 auto',
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={7} className={classes.Paper}>
      <form className={classes.root} noValidate autoComplete="off">
  <TextField id="standard-basic" label="Standard" />

</form>
<CircularProgress />

        </Paper>
    </div>
  );
}

export default App;
