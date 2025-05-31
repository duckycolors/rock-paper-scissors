function getComputerChoice() {
    let computerChoice = Math.random();
    if (computerChoice > 0.66) {
        computerChoice = "paper";
        console.log(computerChoice);
        return "paper";
    } else if (computerChoice < 0.66 && computerChoice > 0.33) {
        computerChoice = "scissors";
        console.log(computerChoice);
        return "scissors";
    } else {
        computerChoice = "rock";
        console.log(computerChoice);
        return "rock";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper or Scissors?");
    humanChoice = humanChoice.toLowerCase();
    console.log(humanChoice);
    return humanChoice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    console.log("Final human score: "+ humanScore);
    console.log("Final computer score: " + computerScore);

    function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" &&  computerChoice === "paper"){
        computerScore++;
        return console.log("You lose! " + computerChoice + " beats " + humanChoice);
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        return console.log("You lose! " + computerChoice + " beats " + humanChoice);
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        return console.log("You lose! " + computerChoice + " beats " + humanChoice);
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        return console.log("You win! " + humanChoice + " beats " + computerChoice);
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        return console.log("You win! " + humanChoice + " beats " + computerChoice);
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        return console.log("You win! " + humanChoice + " beats " + computerChoice);
    } else {
        return console.log("Tie! Both are the same.");
    }
}
}

playGame();
