/* Shift Left
You are given two strings. In a single move, you can choose any of them, 
and delete the first (i.e. leftmost) character.

For Example:
By applying a move to the string "where", the result is the string "here".
By applying a move to the string "a", the result is an empty string "".
Implement a function that calculates the minimum number of moves that 
should be performed to make the given strings equal.

Notes
Both strings consist of lowercase latin letters.
If the string is already empty, you cannot perform any more delete operations.
*/

const shiftLeft = (s, t) => {
  let count = 0;
  while (s !== t) {
      s.length > t.length ? s = s.slice(1) : t = t.slice(1);
      count++;
  }
  return count;
}

console.log(shiftLeft("test", "west")) // 2
console.log(shiftLeft("test", "yes")) // 7
console.log(shiftLeft("b", "ab")) // 1