function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissors'];
    let randomChoice = Math.floor((Math.random()*30)%3);
    return choices[randomChoice];

}


function playRound(playerSelection, computerSelection) {
    let compare = ['rock', 'paper', 'scissors'];

    if ((compare.indexOf(playerSelection)+1 === compare.indexOf(computerSelection)) || compare.indexOf(computerSelection)+2 === compare.indexOf(playerSelection)){
        return `You chose ${playerSelection}, computer chose ${computerSelection}.You lost.`    
    } else if ((compare.indexOf(computerSelection)+1 === compare.indexOf(playerSelection)) || compare.indexOf(playerSelection)+2 === compare.indexOf(computerSelection)){
        return `You chose ${playerSelection}, computer chose ${computerSelection}.You won.`    
    } else {
        return "Tie."
    }
}
   
function game(){
    for(let i = 1; i <= 5; i++){
    const playerSelection = prompt("Choose rock, paper or scissors.").toLowerCase();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    }
}

game();