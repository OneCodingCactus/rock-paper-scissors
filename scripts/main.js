let playerScore=0;
let computerScore=0;
const runningScorePlayer=document.querySelector("#runningScorePlayer");
const runningScoreComputer=document.querySelector("#runningScoreComputer");

const result=document.querySelector("#displayResults");
const winnerAnnouncement=document.querySelector("#winnerAnnouncement");

//returns random choice out of array
function computerPlay() {
    let options = [
        "rock",
        "paper",
        "scissors"
    ]
    return options[Math.floor(Math.random() * options.length)];
}

function capitalizeFirstLetter(notCapitalized){
    let capitalized=notCapitalized[0].toUpperCase()+notCapitalized.slice(1);
    return capitalized;
}

//takes choices of pc and player and declares winner of each round
function playRound(playerSelection, computerSelection) {

    console.log(playerSelection);
    console.log(computerSelection);

    switch (true) {
        case (playerSelection === "rock" && computerSelection === "paper"):
        case (playerSelection === "paper" && computerSelection === "scissors"):
        case (playerSelection === "scissors" && computerSelection === "rock"):
            computerScore++;
            runningScoreComputer.textContent=`${computerScore}`;
            computerSelection=capitalizeFirstLetter(computerSelection);
            result.textContent=`You lose! ${computerSelection} beats ${playerSelection}.`;
            break;
        case (playerSelection === computerSelection):
            result.textContent=`It´s a draw!`;
            break;
        default:
            playerScore++;
            runningScorePlayer.textContent=`${playerScore}`;
            playerSelection=capitalizeFirstLetter(playerSelection);
            result.textContent=`You win! ${playerSelection} beats ${computerSelection}.`;
            break;
        }
}

//declares winner at the end of the game
function declareWinner(){
    if(playerScore>computerScore){
        winnerAnnouncement.textContent(`You are the winner!`);
    }else if (playerScore<computerScore) {
        winnerAnnouncement.textContent(`The computer is the winner!`);
    } else {
        winnerAnnouncement.textContent(`It´s a draw!`);
    }
}


const buttons=document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", function() {
        playRound(button.id, computerPlay());
    });
});
