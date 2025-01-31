/* Finish Guess the Number Game
Imagine you are creating a game where the user has to guess the correct number. 
But there is a limit of how many guesses the user can do.

If the user tries to guess more than the limit, the function should throw an error.
If the user guess is right it should return true.
If the user guess is wrong it should return false and lose a life.
Can you finish the game so all the rules are met?
*/

class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }
  
  guess(n) {
    if (this.lives <= 0) throw new Error('already dead')

    if (n === this.number) {
        return true;
    } else {
        this.lives -= 1;
        return false;
    }
  }
}

// 'Correct guess should return true'
let guesser = new Guesser(10, 2);
console.log(guesser.guess(10))
console.log(guesser.guess(10))
console.log(guesser.guess(10))
console.log(guesser.guess(10))
console.log(guesser.guess(10))

// 'Wrong guess should return false'
guesser = new Guesser(10, 2);
console.log(guesser.guess(1))
console.log(guesser.guess(1))

// 'Lives ran out should throw'
guesser = new Guesser(10, 2);
console.log(guesser.guess(1))
console.log(guesser.guess(2))
console.log(guesser.guess(2))