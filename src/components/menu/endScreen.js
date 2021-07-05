import React from 'react';
import { makeStyles, Typography, Grid, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    App: {
        textAlign: 'center'
    },
    AppHeader: {
        backgroundColor: '#282c29',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: `calc(10px + 2vmin)`,
        color: 'white',
      },
    Button: {
      width: '200px'
    }
}));

function EndScreen(props) {

  const classes = useStyles();

  return (
    <div className={classes.App}>
      <div className={classes.AppHeader}>

        <Grid
          container
          flexDirection="row"
          justify="center"
          alignItems="center"
        >
            <Grid item xs={5}>
              <Typography variant='h2'>Test Mode Completed</Typography>
              <br></br>
              <p>Highest Card Memorized: {props.score}
              </p>
              
            </Grid>

            <Grid item xs={4}>

              <div>
                  <Button 
                    variant="contained" 
                    color="secondary" 
                    onClick={() => props.tryAgain()}
                    className={classes.Button}>
                    <Typography variant='button'>Try Again</Typography>
                  </Button>
                </div>
                
            </Grid>
       </Grid>
        
      </div>
    </div>
  );
}

export default EndScreen;

