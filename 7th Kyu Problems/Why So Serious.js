/* Why So Serious?
"Introduce a little anarchy. Upset the established order and everything becomes chaos…" – Joker

"The city needs you, Batman! The Kings and Queens are being held for ransom and our only lead is a package we just 
received from the Joker: half a pack of cards, a jumble of numbers and letters, and a smile emoji. 
We have an hour... can you find him?" – Gotham City PD
Task
Why So Serious?
Help Gotham City PD decode the puzzle below. If all the letters of the Joker's name are encoded in the string of cards, 
return true. If not, return false. Note the input is a string of shuffled cards i.e. "6s5s4cAs4s2c7s..." and the name 
can be found in any order.

Card-letter correspondance

 Card | Letter

------+--------
  Jc  |   J
  7s  |   O
  5s  |   K
  As  |   E
  9c  |   R

Examples
"10s8s9c2s5s7c2c9s7sJc5cAs"  =>  true
"9s4s8c6s4c10c8sJs3s"        =>  false
*/

const jokerMap = {'Jc': 'J', '7s': 'O', '5s': 'K', 'As': 'E', '9c': 'R'};
const whySoSerious = str => [...new Set([...str]
    .reduce((sum, _, i) => sum + (jokerMap[str[i] + str[i + 1]] || ''), '')
    .split(''))]
    .sort()
    .join('') === 'EJKOR';

console.log(whySoSerious("3s10s3c10c5s2s5cJsAs9c4s8cAc8s6c6s9s4c")) // false
console.log(whySoSerious("4s8cJcJs6c6s9s7s9c4c5sAs2s")) // true
console.log(whySoSerious("10cJs8s6c6s")) // false
console.log(whySoSerious("9c8cAc3s3cAsJs9sJc4c5s2s7s")) // true
console.log(whySoSerious("Jc8cAc3s3cAsJs9sJc4c5s2s7s")) // false