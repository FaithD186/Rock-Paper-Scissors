let computerPoints = 0;
let playerPoints = 0;
let gamesPlayed = 0;
let gamesWon = 0;
const buttons = document.querySelectorAll('button');
const player = document.querySelector("#player"); 
const computer = document.querySelector("#computer"); 
const result = document.querySelector("#result");



buttons.forEach(button => {
    button.addEventListener('click', () => {
        game(button.id)
    })
})

function game(playerSelection){
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection); 
}

function updateScore(roundResult){
    if (roundResult == "playerWin"){
        playerPoints ++; 
        player.textContent = playerPoints;
        result.textContent = "You win this round!"
    }
    else if(roundResult == "computerWin"){
        computerPoints++; 
        computer.textContent = computerPoints; 
        result.textContent = "You lose this round :("
    }
    else{
        result.textContent = "It's a tie."
    }
}


function computerPlay(){
    const items = ["Rock", "Paper", "Scissors"];
    return items[Math.floor(Math.random() * 3)];
}
function playRound(playerSelection, computerSelection){
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        console.log("It's a tie! Computer played " + computerSelection.toLowerCase() + "." + " You played " + playerSelection + ".");
        updateScore("tie"); 
        return; 
    }
    if (playerSelection.toLowerCase()==="rock"){
        if (computerSelection === "Paper"){
            console.log("You lose this round! Computer played " + computerSelection.toLowerCase() + "." + " You played " + playerSelection + ".");
            updateScore("computerWin"); 
        }
        else{
            console.log("You win this round! Computer played " + computerSelection.toLowerCase() + "." + " You played " + playerSelection + ".");
            updateScore("playerWin");
        }
    }
    if (playerSelection.toLowerCase() === "paper"){
        if (computerSelection === "Scissors"){
            console.log("You lose this round! Computer played " + computerSelection.toLowerCase() + "." + " You played " + playerSelection + ".");
            updateScore("computerWin"); 
        }
        else{
            console.log("You win this round! Computer played " + computerSelection.toLowerCase() + "." + " You played " + playerSelection + ".");
            updateScore("playerWin");
        }
    }
    if (playerSelection.toLowerCase() === "scissors"){
        if (computerSelection === "Rock"){
            console.log("You lose this round! Computer played " + computerSelection.toLowerCase() + "." + " You played " + playerSelection + ".");
            updateScore("computerWin"); 
        }
        else{
            console.log("You win this round! Computer played " + computerSelection.toLowerCase() + "." + " You played " + playerSelection + ".");
            updateScore("playerWin");
        }
    }
    if (checkWinner(playerPoints, computerPoints)){
        playerPoints = 0;
        computerPoints = 0;
        player.textContent = playerPoints;
        computer.textContent = computerPoints;
        gamesPlayed ++;
        totalGames.textContent = gamesPlayed; 
        totalWin.textContent = gamesWon;
    }

}
function checkWinner(playerPoints, computerPoints){
    if (playerPoints == 5){
        result.textContent = ("You won the game! You reached 5 points first. Play again!")
        gamesWon++; 
        return true;
    }
    if (computerPoints == 5){
        result.textContent = ("You lost the game. The computer won 5 points before you did. Play again!");
        return true; 
    }
}

