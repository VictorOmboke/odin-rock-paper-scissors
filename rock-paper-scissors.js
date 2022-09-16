
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