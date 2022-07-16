let battle = document.querySelector('#battle');
let gamearray = ["rock", "paper", "scissors"];
let btn_restart = document.querySelector('#btn_restart')
const all_Game_Buttons = document.querySelectorAll('button');
let playerScore = 0;
let computerScore = 0;
let count = 0;

all_Game_Buttons.forEach(all_Game_Buttons => all_Game_Buttons.addEventListener('click', (e) => {

    let scoreboard = document.querySelector('#scoreboard');
    let winner = document.querySelector('#winner');
    let machine = document.querySelector('#machine');
    let round = document.querySelector('#round');
    let userchoice;


    userchoice = e.target.id;
    round.textContent = 'Round : ' + (count + 1);

    let round_value;
    let machine_Choice = computerPlay();

    if (playerScore < 5 && computerScore < 5) {
        round_value = playRound(userchoice, machine_Choice);
        scoreboard.textContent = " User : " + playerScore + "  X " + " Machine : " + computerScore;
       



    } if (playerScore == 5) {
        winner.textContent = 'Congratulations, you win!';
        scoreboard.textContent = " User : " + playerScore + "  X " + " Machine : " + computerScore;
        alert('Congratulations, you win!', location.reload());



    } else if (computerScore == 5) {
        winner.textContent = 'Machine Win!';    
        scoreboard.textContent = " User : " + playerScore + "  X " + " Machine : " + computerScore;
        alert('I\`m so sorry, you lose!', location.reload());
    }

    machine.textContent = round_value;


}));
btn_restart.addEventListener('click', () => {
    location.reload();
})


function playRound(userchoice, computerSelection) {

    if (userchoice == computerSelection) {
        playerScore = playerScore;
        computerScore = computerScore;
        count++;
        return (`Tie! `);

    }
    else if ((userchoice == "rock" && computerSelection == gamearray[1]) ||
        (userchoice == "scissors" && computerSelection == gamearray[0]) ||
        (userchoice == "paper" && computerSelection == gamearray[2])) {
        computerScore++;
        playerScore = playerScore;
        count++;
        return (`You Lose!`);

    }
    if ((userchoice == "rock" && computerSelection == gamearray[2]) ||
        (userchoice == "scissors" && computerSelection == gamearray[1]) ||
        (userchoice == "paper" && computerSelection == gamearray[0])) {
        playerScore++;
        computerScore = computerScore;
        count++;
        return `You Won! `;

    };

}

function computerPlay() {
    var t = Math.floor(Math.random() * gamearray.length)
    let rvalue = gamearray[t];
    return rvalue;
}


