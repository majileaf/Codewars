/* Simple Fun #215: Properly Closed Bracket Word
Task
We call letter x a counterpart of letter y, if x is the ith letter of the English alphabet, and 
y is the (27 - i)th for each valid i (1-based). For example, 'z' is the counterpart of 'a' and 
vice versa, 'y' is the counterpart of 'b', and so on.

A properly closed bracket word (PCBW) is such a word that its first letter is the counterpart 
of its last letter, its second letter is the counterpart of its last by one letter, and so on.

Determine if the given word is a PCBW or not.

Input/Output
[input] string word

A string consisting of lowercase letters.
0 < word.length ≤ 30

[output] a boolean value
true if word is a PCBW, false otherwise.

Example
For word = "abiryz", the output should be true.
'a' is the counterpart of 'z';
'b' <-> 'y'
'i' <-> 'r'

For word = "aibryz", the output should be false.
For word = "abitryz", the output should be false.
*/

const closedBracketWord = word => {
  if (word.length % 2) return false;
  let [a, b] = [0, 0];

  for (let i = 0; i < word.length / 2; i++) {
      a = word[i].charCodeAt() - 96;
      b = word[word.length - 1 - i].charCodeAt() - 96;
      if (a !== 27 - b) return false;
  }
  return true;
}

// alternatively:
// const closedBracketWord = word => {
//     if (word.length % 2) return false;
//     for (let i = 0; i < word.length / 2; i++) {
//         if (word.charCodeAt(i) + word.charCodeAt(word.length - i - 1) !== 219) return false;
//     }
//     return true;
// }

console.log(closedBracketWord("abiryz")) // true
console.log(closedBracketWord("aibryz")) // false
console.log(closedBracketWord("abitryz")) // false
console.log(closedBracketWord("zhuazfsa")) // true
console.log(closedBracketWord("baby")) // false
console.log(closedBracketWord("grit")) // true
console.log(closedBracketWord("foul")) // false