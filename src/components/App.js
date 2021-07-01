import React from 'react';
import * as generator from './deckGenerator/deckGeneratorFunction';
import MemorizationMode from './modes/memorizationMode';


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
        <MemorizationMode deck={deck} />
      </div>
    );
  }
}

export default App;
