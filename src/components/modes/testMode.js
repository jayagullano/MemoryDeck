import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
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

  function restart(){
    setIndex(0);
    setCard(props.deck[0]);
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
            <button onClick={nextCard} padding='5px'>Next Card</button>
            <button onClick={restart}>Restart</button>
        </div>
        
      </div>
    </div>
  );
}

export default TestMode;
