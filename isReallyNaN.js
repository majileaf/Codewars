/* isReallyNaN
I've hit a few bugs in my Java/Type/Coffee-script code recently, and I've traced the problem back to 
the global isNaN function I was using. I had expected it to be more discerning, but it's returning true 
for undefined right now.

Write a function isReallyNaN that returns true only if passed in an argument that evalutes to NaN, 
and returns false otherwise.

Any solution is acceptable!
*/

const isReallyNaN = val => Number.isNaN(val);

// alternatively:
// const isReallyNaN = Number.isNaN;

console.log(isReallyNaN(37)) // false
console.log(isReallyNaN('37')) // false
console.log(isReallyNaN(NaN)) // true
console.log(isReallyNaN(undefined)) // false