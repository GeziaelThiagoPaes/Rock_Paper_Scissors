const botaoRock = document.querySelector('#btn_rock');
const botaoPaper = document.querySelector('#btn_paper');
const botaoScissor = document.querySelector('#btn_scissors');
const placar = document.querySelector('#placar');
const vencedor = document.querySelector('#vencedor');

var valor;
var v;
var round = 0;


var maquina = ["rock", "paper", "scissors"];
function machineGame() {
    let ramdom = Math.floor(Math.random() * maquina.length);
    let arrayValue = maquina[ramdom];
    return arrayValue;
};


function game() {
    const valorRamdom = machineGame();
    v = valorRamdom;
    playRound();
    for (let i = 0; i < 5; i++) {
        if (i ==0){
            playRound()
        } else if (i >=5){
            return 'over';
        } 
        
    }
   


};
function playRound(playerScore, computerScore) {
    //console.log(valor);
    //console.log(v);
    playerScore=0;
    computerScore=0;
    if (valor == v) {
        playerScore = playerScore;
        computerScore = computerScore;
        placar.textContent = (`Tie : ${playerScore} X ${computerScore}`);
    }
    else if ((valor == "rock" && v == maquina[1]) ||
        (valor == "scissors" && v == maquina[0]) ||
        (valor == "paper" && v == maquina[2])) {
        computerScore++;
        playerScore = playerScore;
        console.log(valor, 'x', v);
        placar.textContent = (`You Lose! : ${playerScore} X ${computerScore}`);
    }
    else {
        playerScore++;
        computerScore = computerScore;
        placar.textContent = (`The player won : ${playerScore} X ${computerScore}`);

    }
    
}



botaoRock.addEventListener('click', () => {
    valor = 'rock';
    game();
})


botaoPaper.addEventListener('click', () => {
    valor = 'paper';
    game();
})

botaoScissor.addEventListener('click', () => {
    valor = 'scissors';
    game();
});
