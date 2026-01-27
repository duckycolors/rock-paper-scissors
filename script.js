humanChoice = 0;
computerChoice = 0;
let roundNum = 0;

playertext1 = document.querySelector("#pScore");
playertext2 = document.querySelector("#cScore");
winnerText = document.querySelector("#winner");

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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    roundNum++;
    console.log(`RoundNum is: ${roundNum}`);
    if (roundNum > 5) {
        return;
    } 
    if (humanChoice === "rock" &&  computerChoice === "paper"){
        computerScore++;
        console.log(humanScore);
        console.log(computerScore);
        playertext1.textContent = `Player Score: ${humanScore}`;
        playertext2.textContent = `Computer Score: ${computerScore}`;
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        console.log(humanScore);
        console.log(computerScore);
        playertext1.textContent = `Player Score: ${humanScore}`;
        playertext2.textContent = `Computer Score: ${computerScore}`;
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        console.log(humanScore);
        console.log(computerScore);
        playertext1.textContent = `Player Score: ${humanScore}`;
        playertext2.textContent = `Computer Score: ${computerScore}`;
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        console.log(humanScore);
        console.log(computerScore);
        playertext1.textContent = `Player Score: ${humanScore}`;
        playertext2.textContent = `Computer Score: ${computerScore}`;
        console.log("You win! " + humanChoice + " beats " + computerChoice);
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        console.log(humanScore);
        console.log(computerScore);
        playertext1.textContent = `Player Score: ${humanScore}`;
        playertext2.textContent = `Computer Score: ${computerScore}`;
        console.log("You win! " + humanChoice + " beats " + computerChoice);
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        console.log(humanScore);
        console.log(computerScore);
        playertext1.textContent = `Player Score: ${humanScore}`;
        playertext2.textContent = `Computer Score: ${computerScore}`;
        console.log("You win! " + humanChoice + " beats " + computerChoice);
    } else {
        console.log(humanScore);
        console.log(computerScore);
        console.log("Tie! Both are the same.");
    }
    
    if (roundNum > 4 && humanScore > computerScore) {
        winnerText.textContent = `You Win!`;
        winnerText.classList.add(".box");
    } else if(roundNum > 4 && computerScore > humanScore) {
        winnerText.textContent = `You Lose!`;
        winnerText.classList.add(".box");
    } else if (roundNum > 4 && computerScore === humanScore) {
        winnerText.textContent = `Draw!`;
        winnerText.classList.add(".box");
    } 

}
