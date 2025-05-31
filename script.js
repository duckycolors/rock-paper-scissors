let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.random();
    if (computerChoice > 0.66) {
        return "paper";
    } else if (computerChoice < 0.66 && computerChoice > 0.33) {
        return "scissors";
    } else {
        return "rock";
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
    if (humanChoice === "rock" &&  computerChoice === "paper"){
        return "You lose! " + computerChoice + " beats " + humanChoice;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        return "You lose! " + computerChoice + " beats " + humanChoice;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        return "You lose! " + computerChoice + " beats " + humanChoice;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        return "You win! " + computerChoice + " beats " + humanChoice;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        return "You win! " + computerChoice + " beats " + humanChoice;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        return "You win! " + computerChoice + " beats " + humanChoice;
    } else {
        return "Tie! Both are the same.";
    }
      
}

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

playRound(humanSelection, computerSelection);