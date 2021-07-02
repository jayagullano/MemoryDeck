import React, { useState } from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import TestCard from '../card/testCard';

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
      NumberSelect: {
        background: '#0000',
      }
}));

function TestMode(props) {

  let classes = useStyles();

  
  return (
    <div className={classes.App}>
      <div className={classes.AppHeader}>

        {/* Column */}
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          
          {/* Rows */}
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs>
              <TestCard image={'/cardImages/2C.jpg'} />
            </Grid>
            
          </Grid>
          <br/>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >

            <Grid item xs>
              <TestCard image={'/cardImages/2C.jpg'} />
            </Grid>

          </Grid>
          <br/>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs>
              <TestCard image={'/cardImages/2C.jpg'} />
            </Grid>
          </Grid>
          <br/>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs>
              <TestCard image={'/cardImages/2C.jpg'} />
            </Grid>
          </Grid>
        </Grid>

      </div>
    </div>
  );
}

export default TestMode;
