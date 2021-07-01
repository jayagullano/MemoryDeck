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
    this.state = {choice: 0}; //Default State

    this.handleChoice = this.handleChoice.bind(this);
  }

  handleChoice(e){
    switch(e){
      case 1: 
        this.setState({choice: 1}); break;
      case 2: 
        this.setState({choice: 2}); break;
      case 3: 
        this.setState({choice: 3}); break;
      case 4: 
        this.setState({choice: 4}); break;
      default: break;
    }
  }

  render(){

    let mode = undefined;

    //Sets the parameters for the limit by seconds
    if(this.state.choice === 1){
      mode = <MemorizationMode deck={deck} limit={0}/>    //Unlimited
    } else if (this.state.choice === 2){
      mode = <MemorizationMode deck={deck} limit={60}/>   //1 Minute
    } else if (this.state.choice === 3){
      mode = <MemorizationMode deck={deck} limit={180}/>  //3 Minutes
    } else if (this.state.choice === 4){
      mode = <MemorizationMode deck={deck} limit={600}/>  //10 Minutes
    } 

    return (
      <div>
        {/* Evaluates if mode is undefined, otherwise display mode */}
        {!mode ? <StartScreen choice={this.handleChoice}/> : ''}
        {mode}
      </div>
    );
  }
}

export default App;
