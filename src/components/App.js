import React, { useState } from 'react';
import './css/App.css';
import * as generator from './deckGenerator/deckGeneratorFunction';
import Card from './card/card';

let deck = generator.generate();

function App() {
  
  let [index, setIndex] = useState(0);
  let [card, setCard] = useState(deck[index]);

  function nextCard() {
    let nextIndex = index + 1;
    console.log(deck[index]);    //Displays current card
    setIndex(nextIndex);
    setCard(deck[nextIndex]);
  }

  function restart(){
    setIndex(0);
    setCard(deck[0]);
  }

  return (
    <div className="App">
      <header className="App-header">
      <div>
        <Card suit={card[1]} number={card[0]}/>
      </div>
      <br></br>
      <button onClick={nextCard}>Next Card</button>
      <br></br>
      <button onClick={restart}>Restart</button>
      </header>
    </div>
  );
}

export default App;
