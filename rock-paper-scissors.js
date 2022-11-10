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

let playerSelection = '';
let computerSelection = '';
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Looks like a tie, try again!";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        ++computerScore;
        return "You lose, paper beats rock!";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        ++playerScore;
        return "You win, rock beats Scissors!";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        ++playerScore;
        return "You win, paper beats rock!";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        ++computerScore;
        return "You lose, Scissors beats paper!";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        ++computerScore;
        return "You lose, Rock beats scissors!";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        ++playerScore;
        return "You win, scissors beats paper!";
    }
}

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const buttons = document.querySelectorAll('button');
const results = document.querySelector('#results');
const pScore = document.querySelector('#player-score');
const cScore = document.querySelector('#computer-score')


rock.addEventListener('click', () => {
    playerSelection = 'rock';
    computerSelection = getComputerChoice();
});

paper.addEventListener('click', () => {
    playerSelection = 'paper';
    computerSelection = getComputerChoice();
});

scissors.addEventListener('click', () => {
    playerSelection = 'scissors';
    computerSelection = getComputerChoice();
});

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        results.textContent = `${playRound(playerSelection, computerSelection)}`;
        pScore.textContent = `${playerScore}`;
        cScore.textContent = `${computerScore}`;
        // console.log(`Final results: Wins: ${playerScore} -- Losses: ${computerScore}`);
    });
});









// function game() {
//     for (let i = 1; i < 6; i++) {
//         const playerSelection = prompt("Please type 'Rock', 'Paper', or 'Scissors'!", "Rock").toLowerCase();
//         const computerSelection = getComputerChoice();
//         playRound(playerSelection, computerSelection);
//         console.log(`Round: ${i}`)
//         console.log(`Your choice: ${playerSelection}`);
//         console.log(`Computers choice: ${computerSelection}`);
//         console.log(`Result: ${playRound(playerSelection, computerSelection)}`);;
//     }
//     console.log(`Final results: Wins: ${playerScore / 2} -- Losses: ${computerScore / 2} -- Ties: ${tieScore / 2}`);
//     console.log("Thanks for playing! To play again refresh the page!");
// }

// game();




