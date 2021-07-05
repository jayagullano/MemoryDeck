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

function StartScreen(props) {

  const classes = useStyles();

  return (
    <div className={classes.App}>
      <div className={classes.AppHeader}>

        <Grid
          container
          justify="center"
          alignItems="center"
        >
            <Grid item xs={5}>
              <Typography variant='h2'>Memory Deck</Typography>
              <br></br>
              <p>Choose a time limit and memorize <br/>the deck in a random order.
                 When <br/>the time is up, test mode begins.
              </p>
              
            </Grid>

            <Grid item xs={4}>

              <div>
                  <Button 
                    variant="contained" 
                    color="secondary" 
                    onClick={() => props.choice(1)}
                    className={classes.Button}>
                    <Typography variant='button'>Unlimited</Typography>
                  </Button>
                  <br></br>
                  <br></br>
                  <Button 
                    variant="contained" 
                    color="secondary" 
                    onClick={() => props.choice(2)}
                    className={classes.Button}>
                    <Typography variant='button'>1 Minute</Typography>
                  </Button>
                  <br></br>
                  <br></br>
                  <Button 
                    variant="contained" 
                    color="secondary" 
                    onClick={() => props.choice(3)}
                    className={classes.Button}>
                    <Typography variant='button'>3 Minutes</Typography>
                  </Button>
                  <br></br>
                  <br></br>
                  <Button 
                    variant="contained" 
                    color="secondary" 
                    onClick={() => props.choice(4)}
                    className={classes.Button}>
                    <Typography variant='button'>10 Minutes</Typography>
                  </Button>
                </div>
                
            </Grid>
       </Grid>
        
      </div>
    </div>
  );
}

export default StartScreen;

