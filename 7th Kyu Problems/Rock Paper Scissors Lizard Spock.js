/* Rock Paper Scissors Lizard Spock
In this kata, your task is to implement an extended version of the famous rock-paper-scissors game. 

The rules are as follows:
Scissors cuts Paper
Paper covers Rock
Rock crushes Lizard
Lizard poisons Spock
Spock smashes Scissors
Scissors decapitates Lizard
Lizard eats Paper
Paper disproves Spock
Spock vaporizes Rock
Rock crushes Scissors

Task:
Given two values from the above game, return the Player result as "Player 1 Won!", "Player 2 Won!", or "Draw!".

Inputs
Values will be given as one of "rock", "paper", "scissors", "lizard", "spock".
*/

const rpsls = (pl1, pl2) => {
    const dic = {
        scissors: ['paper', 'lizard'],
        paper: ['rock', 'spock'],
        rock: ['lizard', 'scissors'],
        lizard: ['spock', 'paper'],
        spock: ['scissors', 'rock']
    }

    return dic[pl1].includes(pl2) ? 'Player 1 Won!' :
           dic[pl2].includes(pl1) ? 'Player 2 Won!' :
           'Draw!';
}

console.log(rpsls('rock', 'lizard')) // 'Player 1 Won!'
console.log(rpsls('paper', 'rock')) // 'Player 1 Won!'
console.log(rpsls('scissors', 'lizard')) // 'Player 1 Won!'
console.log(rpsls('lizard', 'paper')) // 'Player 1 Won!'
console.log(rpsls('spock', 'rock')) // 'Player 1 Won!'
console.log(rpsls('lizard','scissors')) // 'Player 2 Won!'
console.log(rpsls('spock','lizard')) // 'Player 2 Won!'
console.log(rpsls('paper','lizard')) // 'Player 2 Won!'
console.log(rpsls('scissors','spock')) // 'Player 2 Won!'
console.log(rpsls('rock','spock')) // 'Player 2 Won!'
console.log(rpsls('rock', 'rock')) // 'Draw!'
console.log(rpsls('spock', 'spock')) // 'Draw!'