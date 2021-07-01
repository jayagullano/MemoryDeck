import React, { useState } from 'react';
import { makeStyles, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import Card from '../card/playingCard';

const useStyles = makeStyles((theme) => ({
    App: {
        textAlign: 'center'
    },
    AppHeader: {
        backgroundImage: 'url(/cardImages/Tabletop.png)',
        backgroundSize: '100% 100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
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
      'Test Mode' {/*Temporary Display*/}
      <div className={classes.AppHeader}>
        
        It's Test Mode

      </div>
    </div>
  );
}

export default TestMode;
