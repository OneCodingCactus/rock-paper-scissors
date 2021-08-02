//returns random choice out of array
function computerPlay() {
    let options = [
        "Rock",
        "Paper",
        "Scissors"
    ]
    return options[Math.floor(Math.random() * options.length)];
}

//tests output
console.log(computerPlay());

//user input
let input = prompt("Rock, paper or scissors?").toLowerCase();

//takes choices of pc and player and declares winner
function playRound(playerSelection, computerSelection) {
    computerSelection=computerSelection.toLowerCase();
    switch (true) {
        case (playerSelection === "rock" && computerSelection === "paper"):
        case (playerSelection === "paper" && computerSelection === "scissors"):
        case (playerSelection === "scissors" && computerSelection === "rock"):
            return `You lose! ${computerSelection} beats ${playerSelection}.`
            break;
        case (playerSelection === computerSelection):
            return `Draw. ${computerSelection} cannot beat ${playerSelection}.`
            break;
        default:
            return `You win! ${playerSelection} beats ${computerSelection}.`
            break;
        }
}

//tests function playRound
let computerSelection=computerPlay();
console.log(computerSelection);
console.log(playRound(input, computerSelection));