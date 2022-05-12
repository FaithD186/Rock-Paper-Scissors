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

function updateScore(roundResult, playerSelection, computerSelection){
    computerSelection = computerSelection.toLowerCase();
    if (roundResult == "playerWin"){
        playerPoints ++; 
        player.textContent = playerPoints;
        result.textContent = ("You win this round! You played " + playerSelection + " and computer played " + computerSelection + ".");
    }
    else if(roundResult == "computerWin"){
        computerPoints++; 
        computer.textContent = computerPoints; 
        result.textContent = ("You lose this round. You played " + playerSelection + " and computer played " + computerSelection + ".");
    }
    else{
        result.textContent = ("It's a tie! You played " + playerSelection + " and computer played " + computerSelection + ".");
    }
}


function computerPlay(){
    const items = ["Rock", "Paper", "Scissors"];
    return items[Math.floor(Math.random() * 3)];
}
function playRound(playerSelection, computerSelection){
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        console.log("It's a tie! Computer played " + computerSelection.toLowerCase() + "." + " You played " + playerSelection + ".");
        updateScore("tie", playerSelection, computerSelection); 
        return; 
    }
    if (playerSelection.toLowerCase()==="rock"){
        if (computerSelection === "Paper"){
            console.log("You lose this round! Computer played " + computerSelection.toLowerCase() + "." + " You played " + playerSelection + ".");
            updateScore("computerWin", playerSelection, computerSelection); 
        }
        else{
            console.log("You win this round! Computer played " + computerSelection.toLowerCase() + "." + " You played " + playerSelection + ".");
            updateScore("playerWin", playerSelection, computerSelection);
        }
    }
    if (playerSelection.toLowerCase() === "paper"){
        if (computerSelection === "Scissors"){
            console.log("You lose this round! Computer played " + computerSelection.toLowerCase() + "." + " You played " + playerSelection + ".");
            updateScore("computerWin", playerSelection, computerSelection); 
        }
        else{
            console.log("You win this round! Computer played " + computerSelection.toLowerCase() + "." + " You played " + playerSelection + ".");
            updateScore("playerWin", playerSelection, computerSelection);
        }
    }
    if (playerSelection.toLowerCase() === "scissors"){
        if (computerSelection === "Rock"){
            console.log("You lose this round! Computer played " + computerSelection.toLowerCase() + "." + " You played " + playerSelection + ".");
            updateScore("computerWin", playerSelection, computerSelection); 
        }
        else{
            console.log("You win this round! Computer played " + computerSelection.toLowerCase() + "." + " You played " + playerSelection + ".");
            updateScore("playerWin", playerSelection, computerSelection);
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

