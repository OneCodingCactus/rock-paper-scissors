function game(){
    let playerScore=0;
    let computerScore=0;

    for(let i=0;i<5;i++){
        //returns random choice out of array
        function computerPlay() {
            let options = [
                "Rock",
                "Paper",
                "Scissors"
            ]
            return options[Math.floor(Math.random() * options.length)];
        }

        //user input
        let input = prompt("Rock, paper or scissors?").toLowerCase();

        //takes choices of pc and player and declares winner of each round
        function playRound(playerSelection, computerSelection) {
            computerSelection=computerSelection.toLowerCase();
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
    }

    //declares winner at the end of the game
    if(playerScore>computerScore){
        console.log `You are the winner!`
    }else if (playerScore<computerScore) {
        console.log `The computer is the winner!`
    } else {
        console.log `It's a draw!`
    }
}