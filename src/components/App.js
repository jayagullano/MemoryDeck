import React from 'react';
import * as generator from './deckGenerator/deckGeneratorFunction';
import MemorizationMode from './modes/memorizationMode';
import TestMode from './modes/testMode';
import Menu from './menu/mainMenu';

//Deck generated from deckGenerator
let deck = generator.generate();

function App() {

  let [mode, setMode] = React.useState(0);

  function chooseMode(mode) {
    switch(mode){
      case 1:
        setMode(1); break;    //Memorization Mode
      case 2:
        setMode(2); break;    //Test Mode
      default:
        setMode(0); break;    //Default Mode
    }
  }

  return (
    <div>
      <Menu mode={chooseMode}/>

      {(mode === 1) ? <MemorizationMode deck={deck} /> : ''}
      {(mode === 2) ? <TestMode deck={deck} /> : ''}
      
    </div>
  );
}

export default App;
