//Randomize computers choice
function random() {
    return Math.floor(Math.random() * 3) + 1;
}

function getComputerChoice() {
    if (random() === 1) {
        return "rock";
    } else if (random() === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

const playerSelection = prompt("Please type 'Rock', 'Paper', or 'Scissors'!", "Rock");
const computerSelection = getComputerChoice();


function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return "Looks like a tie, try again!";
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
        return "You lose, paper beats rock!";
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
        return "You win, rock beats Scissors!";
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
        return "You win, paper beats rock!";
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
        return "You lose, Scissors beats paper!";
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
        return "You lose, Rock beats scissors!";
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
        return "You win, scissors beats paper!";
    }
}


function game() {
    for (let i = 1; i < 6; i++) {
        const playerSelection = prompt("Please type 'Rock', 'Paper', or 'Scissors'!", "Rock");
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        console.log(`Round: ${i}`)
        console.log(`Your choice: ${playerSelection.toLowerCase()}`);
        console.log(`Computers choice: ${computerSelection}`);
        console.log(`Result: ${playRound(playerSelection.toLowerCase(), computerSelection)}`);
    }
}

game();

