let deck = [
    ['Hearts', 'Ace'],
    ['Hearts', 'Two'],
    ['Hearts', 'Three'],
    ['Hearts', 'Four'],
    ['Hearts', 'Five'],
    ['Hearts', 'Six'],
    ['Hearts', 'Seven'],
    ['Hearts', 'Eight'],
    ['Hearts', 'Nine'],
    ['Hearts', 'Ten'],
    ['Hearts', 'Jack'],
    ['Hearts', 'Queen'],
    ['Hearts', 'King'],
    ['Diamonds', 'Ace'],
    ['Diamonds', 'Two'],
    ['Diamonds', 'Three'],
    ['Diamonds', 'Four'],
    ['Diamonds', 'Five'],
    ['Diamonds', 'Six'],
    ['Diamonds', 'Seven'],
    ['Diamonds', 'Eight'],
    ['Diamonds', 'Nine'],
    ['Diamonds', 'Ten'],
    ['Diamonds', 'Jack'],
    ['Diamonds', 'Queen'],
    ['Diamonds', 'King'],
    ['Spades', 'Ace'],
    ['Spades', 'Two'],
    ['Spades', 'Three'],
    ['Spades', 'Four'],
    ['Spades', 'Five'],
    ['Spades', 'Six'],
    ['Spades', 'Seven'],
    ['Spades', 'Eight'],
    ['Spades', 'Nine'],
    ['Spades', 'Ten'],
    ['Spades', 'Jack'],
    ['Spades', 'Queen'],
    ['Spades', 'King'],
    ['Clubs', 'Ace'],
    ['Clubs', 'Two'],
    ['Clubs', 'Three'],
    ['Clubs', 'Four'],
    ['Clubs', 'Five'],
    ['Clubs', 'Six'],
    ['Clubs', 'Seven'],
    ['Clubs', 'Eight'],
    ['Clubs', 'Nine'],
    ['Clubs', 'Ten'],
    ['Clubs', 'Jack'],
    ['Clubs', 'Queen'],
    ['Clubs', 'King']
]

/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

//Randomizes 
function generate(){
    shuffleArray(deck);
    return deck;
}


export {generate};