import React from 'react';
import * as generator from './deckGenerator/deckGeneratorFunction';
import MemorizationMode from './modes/memorizationMode';


//Deck generated from deckGenerator
let deck = generator.generate();

function App() {
  
  return (
    <div>
      <MemorizationMode deck={deck} />
    </div>
  );
}

export default App;
