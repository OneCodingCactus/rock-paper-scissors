function computerPlay(){
    let options=[
        "Rock",
        "Paper",
        "Scissors"
    ]
    return options[Math.floor(Math.random()*options.length)];
}

console.log(computerPlay());

let input=prompt("Rock, paper or scissors?").toLowerCase();

function playRound(playerSelection, computerSelection){
    switch(playerSelection){
        case "rock":
            switch(computerSelection){
                case "rock":
                    return "Draw. Rock and rock."
                    break;
                case "paper":
                    return "You lose! Paper beats rock."
                    break;
                case "scissors":
                    return "You win! Rock beats scissors."
                    break;
            }
    }
}