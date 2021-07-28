function computerPlay() {
    let options = [
        "Rock",
        "Paper",
        "Scissors"
    ]
    return options[Math.floor(Math.random() * options.length)];
}

console.log(computerPlay());

let input = prompt("Rock, paper or scissors?").toLowerCase();

function playRound(playerSelection, computerSelection) {
    switch (true) {
        case (playerSelection === "rock" && computerSelection === "paper"):
        case (playerSelection === "paper" && computerSelection === "scissors"):
        case (playerSelection === "scissors" && computerSelection === "rock"):
            return "You lose! ${computerSelection} beats ${playerSelection}."
            break;
        case (playerSelection === computerSelection):
            return "Draw. ${computerSelection} cannot ${playerSelection}."
            break;
        default:
            return "You win! ${playerSelection} beats ${computerSelection}."
            break;
        }
}