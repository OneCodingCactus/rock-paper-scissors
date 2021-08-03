let playerScore=0;
let computerScore=0;

//returns random choice out of array
function computerPlay() {
    let options = [
        "Rock",
        "Paper",
        "Scissors"
    ]
    return options[Math.floor(Math.random() * options.length)];
}

//takes choices of pc and player and declares winner of each round
function playRound(playerSelection, computerSelection) {

    switch (true) {
        case (playerSelection === "rock" && computerSelection === "paper"):
        case (playerSelection === "paper" && computerSelection === "scissors"):
        case (playerSelection === "scissors" && computerSelection === "rock"):
            computerScore++;
            console.log(`computer wins`);
            break;
        case (playerSelection === computerSelection):
            console.log(`draw`);
            break;
        default:
            playerScore++;
            console.log(`player wins`);
            break;
        }
}

//declares winner at the end of the game
function declareWinner(){
    if(playerScore>computerScore){
        console.log `You are the winner!`;
    }else if (playerScore<computerScore) {
        console.log `The computer is the winner!`;
    } else {
        console.log `It's a draw!`;
    }
}

function game(){
    for(let i=0;i<5;i++){
        let playerSelection = prompt("Rock, paper or scissors?");
        playerSelection=playerSelection.toLowerCase();
        let computerSelection=computerPlay();
        computerSelection=computerSelection.toLowerCase();
        playRound(playerSelection, computerSelection);
    }

    declareWinner();
}

game();