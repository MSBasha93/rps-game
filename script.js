/*
Pseudocode:
newGame{
    reset score to zero
    show choices
    show score
    annouce start of game

}

if score < max play a round
    wait for userChoice
        when user clicks the choice button, the choice to userChoice variable
        play a round 
            Generate computerChoice 
            Compare choices
        Update score
        Annouce userCoice and computerChoice and roundWinner



If score = max {
    Announce game winner
    Hide choices
}



*/

let userScore = 0;
let userChoice = "";
let computerScore = 0;
let computerChoice = "";
const choicesArr = ["rock", "paper", "scissors"];
const choices = document.getElementById("choice");
const score = document.getElementById('score');
const announce = document.getElementById("announce");
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const newGameBtn = document.getElementById('new-game');


updateScore();
checkGameOver();

function newGame() {
    userScore = 0;
    computerScore = 0;
    if (choices.style.display === "none") {
        choices.style.display = "block"; //Show user choices
    }
    announce.innerText = "A new game has started, Please Pick a choice";
    updateScore();
}



function playRound() {
    checkGameOver();
    getComputerChoice();

    //Start comparing choices to determine the winner

    if (userChoice === computerChoice) {
        announce.innerText = `You choose: ${userChoice} while CPU choose: ${computerChoice} so this round is a tie`;
        alert("tie");
    } else if (userChoice === "rock") {
        computerChoice === "paper" ? announce.innerText = `computer wins ${computerScore += 1}` : announce.innerText = ` user wins ${userScore += 1}`;
        updateScore();
    } else if (userChoice === "paper") {
        computerChoice === "scissors" ? announce.innerText = `computer wins ${computerScore += 1}` : announce.innerText = ` user wins ${userScore += 1}`;
        updateScore();
    } else if (userChoice === "scissors") {
        computerChoice === "rock" ? announce.innerText = `computer wins ${computerScore += 1}` : announce.innerText = ` user wins ${userScore += 1}`;
        updateScore();
    }
}

function getComputerChoice() {
    computerChoice = choicesArr[Math.floor(Math.random() * 3)];
    console.log(computerChoice);
}

function updateScore() {
    score.innerText = `USER: ${userScore} \\ CPU: ${computerScore}`;
    if (userScore >= 3 || computerScore >= 3) { //check for game over
        choices.style.display === "none";
        console.log("game over")
        announce.innerText = `Game over! ${score}, Click new game to start again.`;
    }
}

function checkGameOver() {
    if (userScore >= 3 || computerScore >= 3) { //check for game over
        choices.style.display === "none";
        console.log("game over")
        announce.innerText = `Game over! ${score}, Click new game to start again.`;
    }
}


newGameBtn.addEventListener("click", newGame);
rock.addEventListener("click", () => {
    userChoice = "rock";
    playRound();

});
paper.addEventListener("click", () => {
    userChoice = "paper";
    playRound();
});
scissors.addEventListener("click", () => {
    userChoice = "scissors";
    playRound();
});




