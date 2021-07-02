let deck = [
    [
        ['Hearts', 'Ace', '/cardImages/AH.jpg'],
        ['Hearts', 'Two', '/cardImages/2H.jpg'],
        ['Hearts', 'Three', '/cardImages/3H.jpg'],
        ['Hearts', 'Four', '/cardImages/4H.jpg'],
        ['Hearts', 'Five', '/cardImages/5H.jpg'],
        ['Hearts', 'Six', '/cardImages/6H.jpg'],
        ['Hearts', 'Seven', '/cardImages/7H.jpg'],
        ['Hearts', 'Eight', '/cardImages/8H.jpg'],
        ['Hearts', 'Nine', '/cardImages/9H.jpg'],
        ['Hearts', 'Ten', '/cardImages/10H.jpg'],
        ['Hearts', 'Jack', '/cardImages/JH.jpg'],
        ['Hearts', 'Queen', '/cardImages/QH.jpg'],
        ['Hearts', 'King', '/cardImages/KH.jpg']
    ],
    [
        ['Diamonds', 'Ace', '/cardImages/AD.jpg'],
        ['Diamonds', 'Two', '/cardImages/2D.jpg'],
        ['Diamonds', 'Three', '/cardImages/3D.jpg'],
        ['Diamonds', 'Four', '/cardImages/4D.jpg'],
        ['Diamonds', 'Five', '/cardImages/5D.jpg'],
        ['Diamonds', 'Six', '/cardImages/6D.jpg'],
        ['Diamonds', 'Seven', '/cardImages/7D.jpg'],
        ['Diamonds', 'Eight', '/cardImages/8D.jpg'],
        ['Diamonds', 'Nine', '/cardImages/9D.jpg'],
        ['Diamonds', 'Ten', '/cardImages/10D.jpg'],
        ['Diamonds', 'Jack', '/cardImages/JD.jpg'],
        ['Diamonds', 'Queen', '/cardImages/QD.jpg'],
        ['Diamonds', 'King', '/cardImages/KD.jpg']
    ],
    [
        ['Spades', 'Ace', '/cardImages/AS.jpg'],
        ['Spades', 'Two', '/cardImages/2S.jpg'],
        ['Spades', 'Three', '/cardImages/3S.jpg'],
        ['Spades', 'Four', '/cardImages/4S.jpg'],
        ['Spades', 'Five', '/cardImages/5S.jpg'],
        ['Spades', 'Six', '/cardImages/6S.jpg'],
        ['Spades', 'Seven', '/cardImages/7S.jpg'],
        ['Spades', 'Eight', '/cardImages/8S.jpg'],
        ['Spades', 'Nine', '/cardImages/9S.jpg'],
        ['Spades', 'Ten', '/cardImages/10S.jpg'],
        ['Spades', 'Jack', '/cardImages/JS.jpg'],
        ['Spades', 'Queen', '/cardImages/QS.jpg'],
        ['Spades', 'King', '/cardImages/KS.jpg']
    ],
    [
        ['Clubs', 'Ace', '/cardImages/AC.jpg'],
        ['Clubs', 'Two', '/cardImages/2C.jpg'],
        ['Clubs', 'Three', '/cardImages/3C.jpg'],
        ['Clubs', 'Four', '/cardImages/4C.jpg'],
        ['Clubs', 'Five', '/cardImages/5C.jpg'],
        ['Clubs', 'Six', '/cardImages/6C.jpg'],
        ['Clubs', 'Seven', '/cardImages/7C.jpg'],
        ['Clubs', 'Eight', '/cardImages/8C.jpg'],
        ['Clubs', 'Nine', '/cardImages/9C.jpg'],
        ['Clubs', 'Ten', '/cardImages/10C.jpg'],
        ['Clubs', 'Jack', '/cardImages/JC.jpg'],
        ['Clubs', 'Queen', '/cardImages/QC.jpg'],
        ['Clubs', 'King', '/cardImages/KC.jpg']
    ]
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

//Returns the template deck for test mode
function getTemplateDeck(){
    return Array.from(deck); 
}

//Randomizes 
function generate(){

    //Convert the deck to flat to return a single array of random cards,
    //while original deck remains formatted by suit
    let flatDeck = deck.flat();
    shuffleArray(flatDeck);
    return flatDeck;
}


export { generate, getTemplateDeck };