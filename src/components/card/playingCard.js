import React from 'react';
import {
    Card,
    CardMedia,
    makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    Card: {
        maxWidth: 192,
        maxHeight: 298,
        borderRadius: '6%'
    },
    media: {
        height: 300,
    },
}));

function PlayingCard(props){

    let classes = useStyles();

    console.log(props.image === null);

    return (
        
        <div>
            <Card className={classes.Card} >
                <CardMedia
                    className={classes.media}
                    component="img"
                    image={props.image}
                />
            </Card>
        </div>
    );
}

export default PlayingCard;