/* Failed Filter - Bug Fixing #3
Oh no, Timmy's filter doesn't seem to be working? Your task is to fix the Filter Number function to remove 
all the numbers from the string.
*/

// let filterNumbers = function(str) {
//   return str.split('').filter(c => !parseInt(c)).join('');
// }

let filterNumbers = function(str) {
  return str.split('').filter(c => c != 0 && !parseInt(c)).join('');
}

console.log(filterNumbers("test123")) // 'test'
console.log(filterNumbers("a1b2c3")) // 'abc'
console.log(filterNumbers("aa1bb2cc3dd")) // 'aabbccdd'