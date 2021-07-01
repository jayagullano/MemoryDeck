import React from 'react';
import * as generator from './deckGenerator/deckGeneratorFunction';
import MemorizationMode from './modes/memorizationMode';
import StartScreen from './menu/startScreen';
import '@fontsource/roboto';


//Deck generated from deckGenerator
let deck = generator.generate();

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {}; //Default State
  }

  render(){
    return (
      <div>
        <StartScreen />
        <MemorizationMode deck={deck} />
      </div>
    );
  }
}

export default App;
