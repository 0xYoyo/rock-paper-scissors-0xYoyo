const outcomes = [
    "rock",
    "paper",
    "scissors"
];

function getComputerChoice(arr) {
    let rand = Math.floor(Math.random()*arr.length);
    return arr[rand];
}
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');

let result;
let wScore =0;
let lScore =0;

function playRound(playerSelection, computerSelection) {
    if(playerSelection.toLowerCase() === computerSelection){
        h1.textContent = "It's a draw!";
        result = 0;
    } else if(
        (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") ||
        (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") ||
        (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") 
    ){
        h1.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        result = 1;
    } else{
        h1.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        result = 2;
    }
    checkResult()
}
    
    const buttons = document.querySelectorAll('button')
    buttons.forEach((button) => {
     button.addEventListener('click', function(e){
            playRound(e.target.id, getComputerChoice(outcomes));
        })
    })

    
    

function checkResult() {
        if (result === 1) {
            wScore++;
            h2.textContent = `Score is: ${wScore} - ${lScore}`;
        } else if(result === 2) {
            lScore++;
            h2.textContent = `Score is: ${wScore} - ${lScore}`;
        }
        hasEnded()
}

    function hasEnded(){
        if(wScore === 5 || lScore === 5) {
    if (wScore > lScore) {
        h1.textContent = `Congrats! You have won the machine!`;
    } else {
        h1.textContent = `Oh no... You lost have lost to the machine`;
    } 
    result = 0;
    wScore = 0;
    lScore = 0;
    h2.textContent = 'Refresh or press any button to restart';
    }
}