/*
Pseudocode:
newGame{
    reset score to zero
    show choices
    show score
    annouce start of game

}

While score < max {
    Get userChoice
    Generate computerChoice
    Compare choices
    Update score
    Annouce userCoice and computerChoice and roundWinner
}


If score = max {
    Announce game winenr
    Hide choices
}



*/

let userScore=0;
let userChoice="";
let computerScore=0;
let computerChoice="";
const score = document.getElementById('score');
const announce= document.getElementById("announce");
const choices=document.getElementById('choice');
const rock = document.getElementById('rock');
const paper = document.getElementById('rock');
const scissors = document.getElementById('scissors');
const newGameBtn= document.getElementById('new-game');

function newGame() {
    userScore=0;
    computerScore=0;
    if (choices.style.display === "none") {
        choices.style.display = "block"; //Show user choices
      }
    announce.innerText="A new game has started, Please Pick a choice";
    score.innerText=`USER: ${userScore} \\ CPU: ${computerScore}`;
}






newGameBtn.addEventListener("click",newGame);




