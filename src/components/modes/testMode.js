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
  
  let [index, setIndex] = useState(0);
  let [card, setCard] = useState(props.deck[index]);

  function nextCard() {

    if(index < (props.deck.length-1)){ //Stops incrementing index after last card
      let nextIndex = index + 1;
      console.log(props.deck[index]);    //Displays current card
      setIndex(nextIndex);
      setCard(props.deck[nextIndex]);
    }
  }

  return (
    <div className={classes.App}>
      'Test Mode' {/*Temporary Display*/}
      <div className={classes.AppHeader}>
        <h2>{'Card : ' + (index+1)}</h2>
        <div>
          <Card suit={card[0]} number={card[1]} image={card[2]}/>
        </div>
        
        <br></br>

        <div>
          <FormControl className={classes.formControl}>
            <InputLabel>Candidate</InputLabel>
            <Select
              value={'age'}
              onChange={() => alert('hey')}
              className={classes.NumberSelect}
            >
              <MenuItem value={1}>Ace</MenuItem>
              <MenuItem value={2}>Two</MenuItem>
              <MenuItem value={3}>Three</MenuItem>
              <MenuItem value={4}>Four</MenuItem>
              <MenuItem value={5}>Five</MenuItem>
              <MenuItem value={6}>Six</MenuItem>
              <MenuItem value={7}>Seven</MenuItem>
              <MenuItem value={8}>Eight</MenuItem>
              <MenuItem value={9}>Nine</MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={11}>Jack</MenuItem>
              <MenuItem value={12}>Queen</MenuItem>
              <MenuItem value={13}>King</MenuItem>
            </Select>
          </FormControl>

          <FormControl className={classes.formControl}>
            <InputLabel>Suit</InputLabel>
            <Select
              value={'age'}
              onChange={() => alert('hey')}
              className={classes.NumberSelect}
            >
              <MenuItem value={1}>Hearts</MenuItem>
              <MenuItem value={2}>Diamonds</MenuItem>
              <MenuItem value={3}>Clubs</MenuItem>
              <MenuItem value={3}>Spades</MenuItem>
            </Select>
          </FormControl>
          
          <br></br>
          
          <button onClick={nextCard}>Submit</button>
        </div>
        
      </div>
    </div>
  );
}

export default TestMode;
