
function random() {
    return Math.floor(Math.random() * 3) + 1;
}

function getComputerChoice() {
    if (random() === 1) {
        return "Rock";
    } else if (random() === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

const playerSelection = prompt("Please type 'Rock', 'Paper', or 'Scissors'!", "Rock");
const computerSelection = getComputerChoice();
const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return "Looks like a tie, try again!";
    } else if (playerSelection.toLowerCase() == rock.toLowerCase() && computerSelection.toLowerCase() == paper.toLowerCase()) {
        return "You lose, paper beats rock!";
    } else if (playerSelection.toLowerCase() == rock.toLowerCase() && computerSelection.toLowerCase() == scissors.toLowerCase()) {
        return "You win, rock beats Scissors!";
    } else if (playerSelection.toLowerCase() == paper.toLowerCase() && computerSelection.toLowerCase() == rock.toLowerCase()) {
        return "You win, paper beats rock!";
    } else if (playerSelection.toLowerCase() == paper.toLowerCase() && computerSelection.toLowerCase() == scissors.toLowerCase()) {
        return "You lose, Scissors beats paper!";
    } else if (playerSelection.toLowerCase() == scissors.toLowerCase() && computerSelection.toLowerCase() == rock.toLowerCase()) {
        return "You lose, Rock beats scissors!";
    } else if (playerSelection.toLowerCase() == scissors.toLowerCase() && computerSelection.toLowerCase() == paper.toLowerCase()) {
        return "You win, scissors beats paper!";
    }
}

console.log(`Your choice: ${playerSelection}`);
console.log(`Computers choice: ${computerSelection}`);
console.log(`Result: ${playRound(playerSelection, computerSelection)}`);