import React, { useState } from 'react';
import './css/App.css';
import * as generator from './deckGenerator/deckGeneratorFunction';
import Card from './card/card';

let deck = generator.generate();

function App() {
  
  let [index, setIndex] = useState(0);
  let [card, setCard] = useState(deck[index]);

  function nextCard() {
    setIndex(index + 1);
    setCard(deck[index]);
    console.log(deck[index]);
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
