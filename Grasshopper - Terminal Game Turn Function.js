/*
Terminal game turn function
You are creating a text-based terminal version of your favorite board game. 
In the board game, each turn has six steps that must happen in this order: 
roll the dice, move, combat, get coins, buy more health, and print status.

You are using a library (Game.Logic in C#) that already has the functions below. 
Create a function named doTurn/DoTurn/do_turn that calls the functions in the 
proper order as described in the paragraph above.

- combat
- buyHealth
- getCoins
- printStatus
- rollDice
- move
*/

// initital solution
// function doTurn () {
//     const array_of_functions = [
//       function() { rollDice() },
//       function() { move() },
//       function() { combat() },
//       function() { getCoins() },
//       function() { buyHealth() },
//       function() { printStatus() }
//     ]
    
//     for (i = 0; i < array_of_functions.length; i++) {
//       array_of_functions[i]();
//     }
// }

// alternatively:
// const doTurn = () => {
//     rollDice();
//     move();
//     combat();
//     getCoins();
//     buyHealth();
//     printStatus();
// }

const doTurn = () => {
    const arr = [rollDice, move, combat, getCoins, buyHealth, printStatus].forEach(func => func());
}