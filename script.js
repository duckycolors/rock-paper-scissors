humanChoice = 0;
computerChoice = 0;

playertext1 = document.querySelector("#pScore");
playertext2 = document.querySelector("#cScore");

btnSelect = document.querySelectorAll("button");
btnSelect.forEach(buttons => {
    buttons.addEventListener("click", () => {
        humanChoose = buttons.textContent;
        humanChoice = humanChoose.toLowerCase();
        console.log(humanChoice);
        getComputerChoice();
        console.log(computerChoice);
        playRound(humanChoice, computerChoice);
    })
});


function getComputerChoice() {
    computerChoice = Math.random();
    if (computerChoice > 0.66) {
        computerChoice = "paper";
        return "paper";
    } else if (computerChoice < 0.66 && computerChoice > 0.33) {
        computerChoice = "scissors";
        return "scissors";
    } else {
        computerChoice = "rock";
        return "rock";
    }
}

function playGame() {
    playRound(humanChoice, computerSelection);
    if (humanScore > computerScore) {
        console.log("You beat the computer!")
    } else if (computerScore > humanScore){
        console.log("You lost to the computer!");
    } else {
        console.log("You tied with the computer!");
    }
}

let humanScore;
let computerScore;

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
