function playRound(playerSelection, computerSelection) {
    let player;
    let computadorScore;
    if (playerSelection === computerSelection) {
        console.log("Empate");
    }
    else if (playerSelection == "rock" && (computerSelection == gamearray[0]) ||
        (playerSelection == "tesoura" && computerSelection == gamearray[1]) ||
        (playerSelection == "papel") && computerSelection == gamearray[2]) {
        console.log("You Lose!");

    }
   else{
        return "Player ganhou";
    }
   

}