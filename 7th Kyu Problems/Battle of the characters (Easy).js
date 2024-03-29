/* Battle of the characters (Easy)
Description:
Groups of characters decided to make a battle. Help them to figure out which group is more powerful. 
Create a function that will accept 2 strings and return the one who's stronger.

Rules:
Each character have its own power: A = 1, B = 2, ... Y = 25, Z = 26
Strings will consist of uppercase letters only
Only two groups to a fight.
Group whose total power (A + B + C + ...) is bigger wins.
If the powers are equal, it's a tie.

Examples:
  battle("ONE", "TWO"); // => "TWO"`
  battle("ONE", "NEO"); // => "Tie!"
*/

const battle = (x, y) => {
  switch(true) {
      case countChar(x) > countChar(y) : return x;
      case countChar(x) < countChar(y) : return y;
      default: return 'Tie!'
  };
};

const countChar = str => [...str].reduce((sum, n) => sum + n.charCodeAt() - 64, 0);

console.log(battle("AAA", "Z")) // "Z"
console.log(battle("ONE", "TWO")) // "TWO"
console.log(battle("ONE", "NEO")) // "Tie!"
console.log(battle("FOUR", "FIVE")) // "FOUR"