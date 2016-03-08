////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
       if (move == null){
	       move = getInput();
       }
	       return move;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.

       if (move == null){
	       move = randomPlay();
    }
	  return move;
}

function getWinner(playerMove,computerMove) {
    // There are 6 different possible outcomes that are possible
    // with one clear winner. All outcome are listed in an if else
    // statement. If none of the conditions are met, then the game
    // will result in a tie.
var winner;
       if (playerMove == "rock" && computerMove == "paper"){
         winter = "Computer";
     }
        else if(playerMove == "rock" && computerMove == "scissors"){
         winner = "Player"];
     }
        else if(playerMove == "paper" && computerMove == "scissors"){
         winner = "Computer";
     }
        else if(playerMove == "paper" && computerMove == "rock"){
         winter = "Player";
     }
        else if(playerMove == "scissors" && computerMove == "rock"){
         winner = "Computer";
     }
        else if(playerMove == "scissors" && computerMove == "paper"){
         winner = "Player";
     }
        else{
         winner = "Tie";
     }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");

    var playerWins = 0;
    var computerWins = 0;

  while (playerWins < 5 && computerWins < 5){
    playerMove = getPlayerMove();
    computerMove = getComputerMove();
    winner = getWinner(playerMove, computerMove);

     if (winner == "player"){
	       playerWins ++;
               console.log(["Player has won " + playerWins, "Computer has won " + computerWins];
	   }
	   else {
	       computerWins ++;
               console.log(["Player has won " + playerWins, "Computer has won " + computerWins];
	   }
	  }
	   if (playerWins == 5){
	       console.log("Player has won");
	       }
	   else
	       console.log("Computer has won");
	   }
	 return [playerWins, computerWins];
}

