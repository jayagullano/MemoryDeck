import React from 'react';
import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    makeStyles,
    Button
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    Card: {
        maxWidth: 193,
        maxHeight: 300,
        borderRadius: '7%'
    },
    media: {
        height: 300,
    },
    text1: {
        fontFamily: 'Georgia, serif',
        variant: 'h2'
    },
    text2: {
        fontFamily: 'TimesNewRoman, serif',
        variant: 'h7'
    }
}));

function PlayingCard(props){

    let classes = useStyles();

    console.log(props.image === null);

    return (
        
        <div>
            <Card className={classes.Card} >
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    component="img"
                    image={props.image}
                />
            </CardActionArea>
        </Card>
        </div>
    );
}

export default PlayingCard;