/*
Build a pyramid-shaped tower given a positive integer number of floors. 
A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:
[
  "  *  ",
  " *** ", 
  "*****"
]

And a tower with 6 floors looks like this:
[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/

const towerBuilder = nFloors => {
  let str = "";
  let arr = [];

  for (let i = 0; i < nFloors; i++) {
      str = " ".repeat(0 + i) + "*".repeat(1 + (nFloors - 1) * 2 - i * 2) + " ".repeat(0 + i);
      arr.push(str);
  }
  return arr.reverse();
}

console.log(towerBuilder(1)) // ["*"]
console.log(towerBuilder(2)) // [" * ","***"]
console.log(towerBuilder(3)) // ["  *  "," *** ","*****"]