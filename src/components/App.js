import React from 'react';
import * as generator from './deckGenerator/deckGeneratorFunction';
import MemorizationMode from './modes/memorizationMode';
import TestMode from './modes/testMode';
import StartScreen from './menu/startScreen';
import EndScreen from './menu/endScreen';
import '@fontsource/roboto';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {deck: generator.generate(), choice: 0, testMode: false, gameOver: false, score: 0}; //Default State

    this.handleChoice = this.handleChoice.bind(this);
    this.startTestMode = this.startTestMode.bind(this);
    this.gameOver = this.gameOver.bind(this);
    this.tryAgain = this.tryAgain.bind(this);
  }

  handleChoice(e){
    switch(e){
      case 1: 
        this.setState({...this.state, choice: 1}); break;
      case 2: 
        this.setState({...this.state, choice: 2}); break;
      case 3: 
        this.setState({...this.state, choice: 3}); break;
      case 4: 
        this.setState({...this.state, choice: 4}); break;
      default: break;
    }
  }

  startTestMode(){
    this.setState({...this.state, testMode: true});
  }

  gameOver(userScore){
    this.setState({...this.state, gameOver: true, score: userScore});
  }

  tryAgain(){
    //Set state to default state and generate new deck
    this.setState({deck: generator.generate(), choice: 0, testMode: false, gameOver: false});
  }

  render(){

    let mode = undefined;

    /********************************************
     * 
     *  Game Over Mode
     * 
     ********************************************/
    if(this.state.gameOver){
      mode = <EndScreen tryAgain={this.tryAgain} score={this.state.score}/>

    /********************************************
     * 
     * Test Mode (after game intervals reach 0)
     * 
     ********************************************/
    } else if (this.state.testMode){
      mode = <TestMode deck={this.state.deck} gameOver={this.gameOver}/>

    /********************************************
     * 
     * Main Memorization Mode
     * 
     ********************************************/
    //Memorization Mode when testMode = false
    } else {
      //Sets the parameters for the limit by seconds
      if(this.state.choice === 1){
        mode = <MemorizationMode 
                    deck={this.state.deck} 
                    limit={0} 
                    startTestMode={this.startTestMode}/>    //Unlimited
      } else if (this.state.choice === 2){
        mode = <MemorizationMode 
                    deck={this.state.deck} 
                    limit={60} 
                    startTestMode={this.startTestMode}/>   //1 Minute
      } else if (this.state.choice === 3){
        mode = <MemorizationMode 
                    deck={this.state.deck} 
                    limit={180} 
                    startTestMode={this.startTestMode}/>  //3 Minutes
      } else if (this.state.choice === 4){
        mode = <MemorizationMode 
                    deck={this.state.deck} 
                    limit={600} 
                    startTestMode={this.startTestMode}/>  //10 Minutes
      } 
    }
    
    /********************************************
     * 
     * JSX Return Area
     * 
     ********************************************/
    return (
      <div>
        {/* Evaluates if mode is undefined, otherwise display mode */}
        {!mode ? <StartScreen choice={this.handleChoice}/> : mode}
      </div>
    );
  }
}

export default App;
