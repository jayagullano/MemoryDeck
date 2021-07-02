import React from 'react';
import * as generator from './deckGenerator/deckGeneratorFunction';
import MemorizationMode from './modes/memorizationMode';
import TestMode from './modes/testMode';
import StartScreen from './menu/startScreen';
import '@fontsource/roboto';


//Deck generated from deckGenerator
let deck = generator.generate();

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {choice: 0, testMode: false}; //Default State

    this.handleChoice = this.handleChoice.bind(this);
    this.startTestMode = this.startTestMode.bind(this);
  }

  handleChoice(e){
    switch(e){
      case 1: 
        this.setState({choice: 1, testMode: false}); break;
      case 2: 
        this.setState({choice: 2, testMode: false}); break;
      case 3: 
        this.setState({choice: 3, testMode: false}); break;
      case 4: 
        this.setState({choice: 4, testMode: false}); break;
      default: break;
    }
  }

  startTestMode(){
    this.setState({choice: this.state.choice, testMode: true});
  }

  render(){

    let mode = undefined;

    //Memorization Mode when testMode = false
    if(!this.state.testMode){

      //Sets the parameters for the limit by seconds
      if(this.state.choice === 1){
        mode = <MemorizationMode 
                    deck={deck} 
                    limit={0} 
                    startTestMode={this.startTestMode}/>    //Unlimited
      } else if (this.state.choice === 2){
        mode = <MemorizationMode 
                    deck={deck} 
                    limit={60} 
                    startTestMode={this.startTestMode}/>   //1 Minute
      } else if (this.state.choice === 3){
        mode = <MemorizationMode 
                    deck={deck} 
                    limit={180} 
                    startTestMode={this.startTestMode}/>  //3 Minutes
      } else if (this.state.choice === 4){
        mode = <MemorizationMode 
                    deck={deck} 
                    limit={600} 
                    startTestMode={this.startTestMode}/>  //10 Minutes
      } 

    //Test mode when testMode = true
    } else if(this.state.testMode) {
       mode = <TestMode deck={deck} />
    }

    return (
      <div>
        {/* Temporary Test Mode */}
        <TestMode />
        {/* Evaluates if mode is undefined, otherwise display mode */}
        {!mode ? <StartScreen choice={this.handleChoice}/> : ''}
        {mode}
      </div>
    );
  }
}

export default App;
