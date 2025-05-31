console.log("Hello World!");

let randomChoice = Math.random();
console.log(randomChoice);

function getComputerChoice() {
    if (randomChoice > 0.33) {
        return "Paper";
    } else if (randomChoice > 0.66) {
        return "Scissors";
    } else {
        return "Rock";
    }
}

getComputerChoice();

function getHumanChoice() {
    humanChoice = prompt("Rock, Paper or Scissors?");
    console.log(humanChoice);
}

getHumanChoice();