let playerScore=0;
let computerScore=0;
const runningScorePlayer=document.querySelector("#runningScorePlayer");
const runningScoreComputer=document.querySelector("#runningScoreComputer");

const result=document.querySelector("#displayResults");
const winnerAnnouncement=document.querySelector("#winnerAnnouncement");
const restartBox=document.querySelector("#restartBox");
const restartText=document.querySelector("#restartText");
const restartButton=document.createElement("button");
restartButton.textContent="Restart Game";
restartButton.style.fontSize="30px";
restartButton.style.margin="10px";
restartButton.addEventListener("click", function(){
    restartGame();
});

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
            if(computerScore==5){
                buttons.forEach((button) => {
                    button.disabled=true;
                })
                declareWinner();
                askForRestart();
            }
            break;
        case (playerSelection === computerSelection):
            result.textContent=`It´s a draw!`;
            break;
        default:
            playerScore++;
            runningScorePlayer.textContent=`${playerScore}`;
            playerSelection=capitalizeFirstLetter(playerSelection);
            result.textContent=`You win! ${playerSelection} beats ${computerSelection}.`;
            if(playerScore==5){
                buttons.forEach((button) => {
                    button.disabled=true;
                })
                declareWinner();
                askForRestart();
            }
            break;
        }
}

//declares winner at the end of the game
function declareWinner(){
    if(playerScore>computerScore){
        winnerAnnouncement.textContent="You are the winner!";
    } else {
        winnerAnnouncement.textContent="The computer is the winner!";
    }
}


const buttons=document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", function() {
        playRound(button.id, computerPlay());
    });
});

function askForRestart(){
    restartText.textContent="Do you want to play again?";
    restartBox.appendChild(restartButton);
}

function restartGame(){
    computerScore=0;
    playerScore=0;
    runningScoreComputer.textContent=`${computerScore}`;
    runningScorePlayer.textContent=`${playerScore}`;
    winnerAnnouncement.textContent="";
    restartText.textContent="";
    restartButton.remove();
    buttons.forEach((button) => {
        button.disabled=false;
    })
    result.textContent="";
}
