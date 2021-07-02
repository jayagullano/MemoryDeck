import React from 'react';
import {
    Card,
    CardMedia,
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

export default TestCard;