// setting variables for functions
let cards = [];
let sum = 0;
let isAlive = false;
let hasBlackJack = false;
let message = "";


// grabbing my elements via HTML
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let newCards = document.getElementById("newCard-btn");

// generates two random numbers for cards.
function getRandomCard(){
    let randomCard = Math.floor(Math.random()* 13) + 1;
    if (randomCard === 1){
        return 11
    } else if (randomCard > 10){
        return 10
    } else {
        return randomCard
    }
}
// generates two random cards.
function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard + ", " + secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

// starts off the game, & adds conditionals when below, over, or equal to 21.

function renderGame(){
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: ";
    for (i = 0; i < cards.length; i++){
        console.log(cardsEl.textContent += cards[i]);
    }
    if (sum <= 20){
        message = "Do you want to draw a new card?";
    } else if (sum === 21){
        message = "Woohoo! You've got Blackjack!!";
        hasBlackJack = true;
} else {
    message = "You're out of the game!";
    isAlive = false;
}
messageEl.textContent = message;
}

// when "draw a new card" is called, player is alive, and doesn't have blackjack, renders a random card.

function newCard(){
    if (isAlive === true && hasBlackJack === false){
        let card = getRandomCard();
        sum += cards.push(", " + card)
        renderGame()
    }
}