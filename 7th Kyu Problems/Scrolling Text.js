/* Scrolling Text
Let's create some scrolling text!

Your task is to complete the function which takes a string, 
and returns an array with all possible rotations of the 
given string, in uppercase.

Example
scrollingText("codewars") should return:

[ "CODEWARS",
  "ODEWARSC",
  "DEWARSCO",
  "EWARSCOD",
  "WARSCODE",
  "ARSCODEW"
  "RSCODEWA",
  "SCODEWAR" ]
*/

const scrollingText = text => {
    text = text.toUpperCase();
    return [...Array(text.length)].map((_, i) => text.slice(i) + text.slice(0, i));
}

console.log(scrollingText("abc")) // ["ABC","BCA","CAB"]
console.log(scrollingText("codewars")) 
// [ "CODEWARS",
//   "ODEWARSC",
//   "DEWARSCO",
//   "EWARSCOD",
//   "WARSCODE",
//   "ARSCODEW"
//   "RSCODEWA",
//   "SCODEWAR" ]