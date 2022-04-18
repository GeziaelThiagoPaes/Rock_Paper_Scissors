const botaoRock = document.querySelector('#btn_rock');
const botaoPaper = document.querySelector('#btn_paper');
const botaoScissor = document.querySelector('#btn_scissors');
let placar = document.querySelector('#placar');
let vencedor = document.querySelector('#vencedor');

let valor;
let maquina= ["rock","paper","scissors"];
function machineGame() {
    let ramdom = Math.floor(Math.random()* maquina.length);
    let arrayValue = maquina[ramdom];
    return arrayValue;
};

let v = machineGame();
function game() {
   for (let i = 0; i < 5; i++) {
       const valorRamdom= machineGame();
     vencedor.textContent = `${valor} x ${valorRamdom}`; 
   };
  
function playRound() {
    let playerScore=0;
    let computerScore=0
    if (valor == v) {
        playerScore = playerScore;
        computerScore = computerScore;
        placar.textContent =(`Tie : ${playerScore} X ${computerScore}`);
    }
    else if ((valor === "rock" && v == maquina[1]) ||
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
        placar.textContent =( `The player won : ${playerScore} X ${computerScore}`);

    }
}
playRound();
}

botaoRock.addEventListener('click', ()=>{
    valor = 'rock';
    game();
})


botaoPaper.addEventListener('click', ()=>{
    valor = 'paper';
    game();
})

botaoScissor.addEventListener('click', ()=>{
    valor= 'scissors';
    game();
});
