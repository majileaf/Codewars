/* Simple Fun #318: Sort String
Task
Your task is to sort the characters in a string according to the following rules:
- Rule1: English alphabets are arranged from A to Z, case insensitive.
  ie. "Type" --> "epTy"
- Rule2: If the uppercase and lowercase of an English alphabet exist
  at the same time, they are arranged in the order of oringal input.
  ie. "BabA" --> "aABb"
- Rule3: non English alphabet remain in their original position.
  ie. "By?e" --> "Be?y"

Input/Output
[input] string s
A non empty string contains any characters(English alphabets or non English alphabets).

[output] a string
A sorted string according to the rules above.

Example
For s = "cba", the output should be "abc".
For s = "Cba", the output should be "abC".
For s = "cCBbAa", the output should be "AaBbcC".
For s = "c b a", the output should be "a b c".
For s = "-c--b--a-", the output should be "-a--b--c-".
For s = "Codewars", the output should be "aCdeorsw".
*/

const sortString = s => {
  const sortedLetters = [...s].filter(e => /[a-z]/i.test(e)).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
  return s.replace(/[a-z]/gi, char => sortedLetters.shift());
}

// alternatively:
// const sortString = s => {
//   const sortedLetters = s.match(/[a-z]/gi).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
//   return s.replace(/[a-z]/gi, _ => sortedLetters.shift());
// }

console.log(sortString("cba")) // "abc"
console.log(sortString("Cba")) // "abC"
console.log(sortString("cCBbAa")) // "AaBbcC"
console.log(sortString("c b a")) // "a b c"
console.log(sortString("-c--b--a-")) // "-a--b--c-"
console.log(sortString("Codewars")) // "aCdeorsw"
console.log(sortString(" MkWD{RB=//k-^ J@,xH Vfi uAz+$ kV _[ }a!}%pSBwn !kKB (b  q PQF +}wS  .kfU r wFNEs#NsR UVMdG")) 
                    // " AaBB{Bb=//D-^ d@,Ef FfF GHi+$ Jk _[ }k!}%kkKkM !MnN (N  p PqQ +}Rr  .RSS s suUUV#VVW wwwxz")