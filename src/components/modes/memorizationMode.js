import React, { useState } from 'react';
import { makeStyles, Button, Grid, Typography } from '@material-ui/core';
import Card from '../card/playingCard';
import Timer from '../timer/timer';

const useStyles = makeStyles((theme) => ({
    App: {
        textAlign: 'center'
    },
    AppHeader: {
        backgroundColor: '#282c34',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: `calc(10px + 2vmin)`,
        color: 'white',
      },
    Button: {
      width: '200px'
    },
}));

function MemorizationMode(props) {

  let classes = useStyles();
  
  let [index, setIndex] = useState(0);
  let [card, setCard] = useState(props.deck[index]);
  let [hide, setHide] = useState({willHide: false, value: 'Hide'});

  /* nextCard iterates to the next card by incrementing the index
     of the current card */
  function nextCard() {
    if(index < (props.deck.length-1)){ //Stops incrementing index after last card
      let nextIndex = index + 1;
      console.log(props.deck[index]);    //Displays current card
      setIndex(nextIndex);
      setCard(props.deck[nextIndex]);
    }
  }

  /* restart returns to the initial value by setting the index to 0 */
  function restart(){
    setIndex(0);
    setCard(props.deck[0]);
  }

  /* hideCards will hide the face of the cards*/
  function hideCards(){
    let tempValue;
    if(hide.value === 'Hide'){
      tempValue = 'Show';
    } else if (hide.value === 'Show'){
      tempValue = 'Hide';
    }
    setHide({willHide: !hide.willHide, value: tempValue});
  }

  return (
    <div className={classes.App}>
      <div className={classes.AppHeader}>

      <Grid
        container
        flexDirection="row"
        justify="center"
        alignItems="center"
      >

          {/* Timer component to display the current time remaining */}
          <Grid item xs={8}>

              {/****************************************************/}
              <Timer limit={props.limit}/>
              {/****************************************************/}

          </Grid>

          {/* Card Display for the card images*/}
          <Grid item xs={3}>
              {/****************************************************/}
              <div textAlign='center' alignItems='center'>
                <Typography variant='h4'>{'Card : ' + (index+1)}</Typography>
                <br/>
                {hide.willHide ? 
                <Card image={'/cardImages/Red_back.jpg'} /> :
                <Card suit={card[0]} number={card[1]} image={card[2]}/>
                }
                <br/><br/>
              </div>
              {/****************************************************/}
          </Grid>
        </Grid>

        {/* Options Section */}
        <Grid item xs={8}>
              {/****************************************************/}
              <div>
                <br></br>
                <Button 
                  variant="contained" 
                  color="secondary" 
                  onClick={nextCard}
                  className={classes.Button}>
                  <Typography variant='button'>Next Card</Typography>
                </Button>
                <br></br>
                <br></br>
                <Button 
                  variant="contained" 
                  color="secondary" 
                  onClick={restart}
                  className={classes.Button}>
                  <Typography variant='button'>Restart</Typography>
                </Button>
                <br></br>
                <br></br>
                <Button 
                  variant="contained" 
                  color="secondary" 
                  onClick={hideCards}
                  className={classes.Button}>
                  <Typography variant='button'>{hide.value}</Typography>
                </Button>
              </div>
              {/****************************************************/}
        </Grid>

        
      </div>
    </div>
  );
}

export default MemorizationMode;
