import React, { useState } from 'react';
import './css/App.css';
import * as generator from './deckGenerator/deckGeneratorFunction';
import Card from './card/playingCard';

let deck = generator.generate();

function App() {
  
  let [index, setIndex] = useState(0);
  let [card, setCard] = useState(deck[index]);

  function nextCard() {

    if(index < (deck.length-1)){ //Stops incrementing index after last card
      let nextIndex = index + 1;
      console.log(deck[index]);    //Displays current card
      setIndex(nextIndex);
      setCard(deck[nextIndex]);
    }
  }

  function restart(){
    setIndex(0);
    setCard(deck[0]);
  }

  return (
    <div className="App">

      <div className="App-header">
        <h2>{'Card : ' + (index+1)}</h2>
      <div>
        <Card suit={card[0]} number={card[1]} image={card[2]}/>
      </div>
      <br></br>
      <button onClick={nextCard}>Next Card</button>
      <br></br>
      <button onClick={restart}>Restart</button>
      </div>
    </div>
  );
}

export default App;
