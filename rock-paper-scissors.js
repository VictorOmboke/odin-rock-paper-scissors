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

let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        tieScore++;
        return "Looks like a tie, try again!";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore++;
        return "You lose, paper beats rock!";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore++;
        return "You win, rock beats Scissors!";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore++;
        return "You win, paper beats rock!";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++;
        return "You lose, Scissors beats paper!";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++;
        return "You lose, Rock beats scissors!";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++;
        return "You win, scissors beats paper!";
    }
}

function game() {
    for (let i = 1; i < 6; i++) {
        const playerSelection = prompt("Please type 'Rock', 'Paper', or 'Scissors'!", "Rock").toLowerCase();
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        console.log(`Round: ${i}`)
        console.log(`Your choice: ${playerSelection}`);
        console.log(`Computers choice: ${computerSelection}`);
        console.log(`Result: ${playRound(playerSelection, computerSelection)}`);;
    }
    console.log(`Final results: Wins: ${playerScore / 2} -- Losses: ${computerScore / 2} -- Ties: ${tieScore / 2}`);
    console.log("Thanks for playing! To play again refresh the page!");
}

game();

