import React, { useState } from 'react';
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
          flexDirection="row"
          justify="center"
          alignItems="center"
        >
            <Grid item xs={5}>
              <Typography variant='h2'>Memory Deck</Typography>
              <p>Choose a time limit, and memorize <br/>the deck in a random order.</p>
              
            </Grid>

            <Grid item xs={4}>

              <div>
                  <Button 
                    variant="contained" 
                    color="secondary" 
                    className={classes.Button}>
                    <Typography variant='button'>Unlimited</Typography>
                  </Button>
                  <br></br>
                  <br></br>
                  <Button 
                    variant="contained" 
                    color="secondary" 
                    className={classes.Button}>
                    <Typography variant='button'>1 Minute</Typography>
                  </Button>
                  <br></br>
                  <br></br>
                  <Button 
                    variant="contained" 
                    color="secondary" 
                    className={classes.Button}>
                    <Typography variant='button'>3 Minute</Typography>
                  </Button>
                  <br></br>
                  <br></br>
                  <Button 
                    variant="contained" 
                    color="secondary" 
                    className={classes.Button}>
                    <Typography variant='button'>10 Minute</Typography>
                  </Button>
                </div>
                
            </Grid>
       </Grid>
        
      </div>
    </div>
  );
}

export default StartScreen;

