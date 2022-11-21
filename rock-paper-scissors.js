function random() {
    return Math.floor(Math.random() * 3) + 1;
}

function getComputerChoice() {
    if (random() === 1) {
        return 'rock';
    } else if (random() === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

let playerSelection = '';
let computerSelection = '';
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Looks like a tie!';
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        ++computerScore;
        return 'You lose, paper beats rock!';
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        ++playerScore;
        return 'You win, rock beats Scissors!';
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        ++playerScore;
        return 'You win, paper beats rock!';
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        ++computerScore;
        return 'You lose, Scissors beats paper!';
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        ++computerScore;
        return 'You lose, Rock beats scissors!';
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        ++playerScore;
        return 'You win, scissors beats paper!';
    }
}

function gameOver() {
    if (playerScore === 5) {
        Event.stopPropagation();
    } else if (computerScore === 5) {
        Event.stopPropagation();
    }
}

function pickWinner() {
    if (playerScore === 5) {
        return 'Congrats, You Win!';
    } else if (computerScore === 5) {
        return 'You Lose, Better Luck Next Time!';
    }
}

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const buttons = document.querySelectorAll('button');
const results = document.querySelector('#results');
const rps = document.querySelector('#rps-round');
const winner = document.querySelector('#winner');
const pScore = document.querySelector('#player-score');
const cScore = document.querySelector('#computer-score');
const reset = document.querySelector('#reset');


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

reset.addEventListener('click', () => {
    location.reload();
})

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        gameOver();
        rps.textContent = playRound(playerSelection, computerSelection);
        winner.textContent = pickWinner();
        pScore.textContent = playerScore;
        cScore.textContent = computerScore;
    });
});











