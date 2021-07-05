import React, { useState } from 'react';
import {
    Card,
    CardMedia,
    CardActionArea,
    makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    Card: {
        maxWidth: 70,
        borderRadius: '6%'
    },
    media: {
        height: '100%',
        width: '100%',
    },
}));

function TestCard(props){

    let classes = useStyles();

    //Sets the state of the image
    let [image, setImage] = useState(props.image);
    let [flipped, setFlipped] = useState(false);

    function turnOverCard(){

        //If card is flipped, don't check card
        if(!flipped){
            setImage('/cardImages/Gray_back.jpg');
            props.checkCard(props.suit, props.number);
            setFlipped(true);
        }
        
    }

    return (
        <div>
            <Card className={classes.Card} >
                <CardActionArea onClick={turnOverCard}>
                    <CardMedia
                        className={classes.media}
                        component="img"
                        image={image}
                    />
                </CardActionArea>
            </Card>
        </div>
    );
}

export default TestCard;