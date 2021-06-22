import React, { useState } from 'react';
import './css/App.css';
import * as generator from './deckGenerator/deckGeneratorFunction';
import Card from './card/card';

function App() {

  let deck = generator.generate();

  let currentDeck = Array.from(deck); //Creates new deck from the initial deck
  currentDeck = currentDeck[Symbol.iterator](); //Creates iterator for copied deck
  currentDeck.next();

  let [card, setCard] = useState(currentDeck.next().value);
  let counter = 1;

  function nextCard() {
    console.log(counter, ':', card);
    setCard(currentDeck.next().value);
    counter = counter + 1;
  }


  function restart(){
    currentDeck = Array.from(deck); //Creates new deck from the initial deck
    currentDeck = currentDeck[Symbol.iterator](); //Creates iterator for copied deck
    currentDeck.next();
    setCard(currentDeck.next().value);
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
