import React from 'react';

function Card(props){

    let suit = props.suit;
    let number = props.number;

    return (
        <p>{suit} of {number}</p>
    );
}

export default Card;