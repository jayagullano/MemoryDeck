import React from 'react';
import './css/App.css';
import * as generator from './deckGenerator/deckGeneratorFunction';

function App() {

  let deck = generator.generate();

  return (
    <div className="App">
      <header className="App-header">

      {deck.map(elem => {
        return <p>{elem[1]} of {elem[0]}</p>;
      })}
      </header>
    </div>
  );
}

export default App;
