import React, { useState } from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import TestCard from '../card/testCard';
import { getTemplateDeck } from '../deckGenerator/deckGeneratorFunction';

//Retrieve template deck from deckGenerator
let templateDeck = getTemplateDeck();

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

  let [index, setIndex] = useState(0);

  /* Checks if the current card selected is the correct card in order */
  function checkCard(suit, number){

    let currentCard = props.deck[index];

    if(suit === currentCard[0] && number === currentCard[1]){
      setIndex(index+1);
    } else {

      //Invoke parent gameOver method
      props.gameOver(index);
    }
  }

  //Format the display to iterate by suit
  let hearts = templateDeck[0].map(card => {
    return(<Grid item xs key={card.toString()}>
      <TestCard suit={card[0]} number={card[1]} image={card[2]} checkCard={checkCard}/>
    </Grid>);
  });

  let diamonds = templateDeck[1].map(card => {
    return(<Grid item xs key={card.toString()}>
      <TestCard suit={card[0]} number={card[1]} image={card[2]} checkCard={checkCard}/>
    </Grid>);
  });

  let spades = templateDeck[2].map(card => {
    return(<Grid item xs> key={card.toString()}
      <TestCard suit={card[0]} number={card[1]} image={card[2]} checkCard={checkCard}/>
    </Grid>);
  });

  let clubs = templateDeck[3].map(card => {
    return(<Grid item xs key={card.toString()}>
      <TestCard suit={card[0]} number={card[1]} image={card[2]} checkCard={checkCard}/>
    </Grid>);
  });
  
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
            {hearts}
            
          </Grid>
          <br/>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >

            {diamonds}

          </Grid>
          <br/>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
             {spades}
          </Grid>
          <br/>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
             {clubs}
          </Grid>
        </Grid>

      </div>
    </div>
  );
}

export default TestMode;
