/* Return String of First Characters
In this exercise, a string is passed to a method and a new string has 
to be returned with the first character of each word in the string.

For example:
"This Is A Test" ==> "TIAT"
Strings will only contain letters and spaces, with exactly 1 space between 
words, and no leading/trailing spaces.
*/

// initial solution: 
// const makeString = s => s.split(' ').map(e => e[0]).join('');

const makeString = s => s.split(' ').reduce((sum, n) => sum + n[0], '');

console.log(makeString("sees eyes xray yoat")) // "sexy"
console.log(makeString("brown eyes are nice")) // "bean"
console.log(makeString("cars are very nice")) // "cavn"
console.log(makeString("kaks de gan has a big head")) // "kdghabh"