const outcomes = [
    "rock",
    "paper",
    "scissors"
];

function getComputerChoice(arr) {
    let rand = Math.floor(Math.random()*arr.length);
    return arr[rand];
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection.toLowerCase() === computerSelection){
        console.log("It's a draw!");
        return 0
    } else if(
        (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") ||
        (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") ||
        (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") 
    ){
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return 1
    } else{
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        return 2
    }
}

function game() {
    console.log("Let's play a best of 5 game!")
    let wScore =0;
    let lScore =0;
    for (let i = 0; i < 5; i++) {
      let computerS = getComputerChoice(outcomes);
      let playerS = prompt("Rock? Paper? Scissors? Shoot!");
      let result = playRound(playerS, computerS);
        if (result === 1) {
            wScore++;
        } else if(result === 2) {
            lScore++;
        }
    }
    if (wScore > lScore) {
        alert(`Congrats! You won ${wScore} - ${lScore}!`);
    } else if(lScore > wScore) {
        alert(`Oh no... You lost ${lScore} - ${wScore}`);
    } else{
        alert(`It's a tie! ${wScore} - ${lScore}`);
    }
}

game();