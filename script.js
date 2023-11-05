//create function that returns a random whole number between 1 and 3
function getRandomNum() {
    return Math.floor(Math.random() * 3) + 1;
}

//create a function that randomly returns 'rock', 'paper', or 'scissors'
function getComputerChoice() {

    //store random number inside a variable
    let randomNum = 0;
    randomNum = getRandomNum();

    //return selection based on random number
    if (randomNum == 1) {
        return 'rock';
    }
    else if (randomNum == 2) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

//variable will store computer choice
let computerSelection = getComputerChoice;

//function that gets the player's choice and returns it
function getPlayerChoice() {
    //promt the user to pick out of three options: rock, paper, or scissors
    let playerChoice = prompt('Your turn: Rock, paper, or scissors?');

    //convert to lower case and store in variable
    playerChoice = playerChoice.toLowerCase();

    while (playerChoice !== 'rock' && playerChoice !== 'paper' && playerChoice !== 'scissors') {
        alert('please pick one!');
        playerChoice = prompt('Your turn: Rock, paper, or scissors?');
    }
    return playerChoice;
}

//store it in variable
let playerSelection = getPlayerChoice;

//Create function which plays a round of the game
function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        return "It's a tie!";
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return 'you win! rock beats scissors!';
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return 'you lose! rock beats scissors!'
    } else if (playerSelection == 'rock' && computerSelection == 'paper'){
        return 'you lose paper beats rock!';
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return 'you win! paper beats rock!';
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return 'you win scissors beats paper!';
    } else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        return 'You lose scissors beats paper!';
    };
}

//create a function which calls play round 5 times
function game() {

    for (i = 0; i < 5; i++) {
        console.log(playRound(getComputerChoice(), getPlayerChoice()));
    }
};

game();