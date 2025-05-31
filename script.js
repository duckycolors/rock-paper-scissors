let humanScore = 0;
let computerScore = 0;


let randomChoice = Math.random();
console.log(randomChoice);

function getComputerChoice() {
    if (randomChoice > 0.66) {
        return "Paper";
    } else if (randomChoice < 0.66 && randomChoice > 0.33) {
        return "Scissors";
    } else {
        return "Rock";
    }
}
console.log(getComputerChoice());

function getHumanChoice() {
    humanChoice = prompt("Rock, Paper or Scissors?");
    console.log(humanChoice);
}

function playRound(humanChoice, computerChoice) {

}

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

playRound(humanSelection, computerSelection);