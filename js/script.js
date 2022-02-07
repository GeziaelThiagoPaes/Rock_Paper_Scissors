
let gamearray = ["ROCK", "PAPER", "SCISSORS"];
function computerPlay() {
    var t = Math.floor(Math.random() * gamearray.length)
    let rvalue = gamearray[t];
    return rvalue;
}

const computerSelection = computerPlay();
let playerSelection;
let question;
let playerScore = 0;
let computerScore = 0;

function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Rock, Paper or Scissors?")
        const computerRamdon = computerPlay();
        console.log(playRound(playerSelection.toUpperCase(), computerRamdon))

    }
    function winScore() {
        if (playerScore > computerScore) {
            console.log(`Player won  `)

        }
        else if (computerScore > playerScore) {
            console.log(`computer won `)


        }
        else {
            console.log(`Tie`)

        }
    }
    winScore();
}




function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        playerScore = playerScore;
        computerScore = computerScore;
        return (`Tie : ${playerSelection} X ${computerSelection}`);
    }
    else if ((playerSelection === "ROCK" && computerSelection == gamearray[1]) ||
        (playerSelection == "SCISSORS" && computerSelection == gamearray[0]) ||
        (playerSelection == "PAPER" && computerSelection == gamearray[2])) {
        computerScore++;
        playerScore = playerScore - 1;
        return (`You Lose! : ${playerSelection} X ${computerSelection}`);

    }
    else {
        playerScore++;
        computerScore = computerScore - 1;
        return `The player won : ${playerSelection} X ${computerSelection}`;

    }


}

game();


