let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.random();
    if (computerChoice > 0.66) {
        return "Paper";
    } else if (computerChoice < 0.66 && computerChoice > 0.33) {
        return "Scissors";
    } else {
        return "Rock";
    }
}
console.log(getComputerChoice());

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper or Scissors?");
    humanChoice = humanChoice.toLowerCase();
    console.log(humanChoice);
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    
}

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

playRound(humanSelection, computerSelection);