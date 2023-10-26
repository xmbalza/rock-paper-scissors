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

getComputerChoice();