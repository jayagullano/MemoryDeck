import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import Card from '../card/playingCard';
import Timer from '../timer/timer';

const useStyles = makeStyles((theme) => ({
    App: {
        textAlign: 'center'
    },
    AppHeader: {
        backgroundColor: '#282c34',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: `calc(10px + 2vmin)`,
        color: 'white',
      },
}));

function MemorizationMode(props) {

  let classes = useStyles();
  
  let [index, setIndex] = useState(0);
  let [card, setCard] = useState(props.deck[index]);
  let [hide, setHide] = useState({willHide: false, value: 'Hide'});

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

  function hideCards(){
    let tempValue;
    if(hide.value === 'Hide'){
      tempValue = 'Show';
    } else if (hide.value === 'Show'){
      tempValue = 'Hide';
    }
    setHide({willHide: !hide.willHide, value: tempValue});
  }

  return (
    <div className={classes.App}>
      <div className={classes.AppHeader}>
        <Timer />

        {/* Card Display */}
        <div textAlign='left'>
          
          <h2 paddingRight='150px'>{'Card : ' + (index+1)}</h2>
          {hide.willHide ? 
          <Card image={'/cardImages/Red_back.jpg'} /> :
          <Card suit={card[0]} number={card[1]} image={card[2]}/>
          }
        </div>

        {/* Options Section */}
        <div paddingLeft='150px'>
          <br></br>
          <button onClick={nextCard}>Next Card</button>
          <br></br>
          <button onClick={restart}>Restart</button>
          <br></br>
          <button onClick={hideCards}>{hide.value}</button>
        </div>
      </div>
    </div>
  );
}

export default MemorizationMode;
