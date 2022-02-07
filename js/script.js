
let arrayGameComputer = ["ROCK", "PAPER", "SCISSORS"];
function computerPlay() {
    var ramdomValueArray = Math.floor(Math.random() * arrayGameComputer.length)
    let ramdomValue = arrayGameComputer[ramdomValueArray];
    return ramdomValue;
}

const computerSelection = computerPlay();
let playerSelection;
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
    else if ((playerSelection === "ROCK" && computerSelection == arrayGameComputer[1]) ||
        (playerSelection == "SCISSORS" && computerSelection == arrayGameComputer[0]) ||
        (playerSelection == "PAPER" && computerSelection == arrayGameComputer[2])) {
            computerScore++;
            playerScore = playerScore - 1;
            return (`You Lose! : ${playerSelection} X ${computerSelection}`);


            {
                playerScore++;
                computerScore = computerScore - 1;
                return `The player won : ${playerSelection} X ${computerSelection}`;

            }


        }

game();


