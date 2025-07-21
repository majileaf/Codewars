/* JS Golfing #5: A Million Times
Task:
Return the input number multiplied by a million with no more than 10 characters.
*/

// x=n=>n * 1_000_000
x=n=>n*1E6

console.log(x(1)) // 1_000_000
console.log(x(2)) // 2_000_000
console.log(x(3)) // 3_000_000
console.log(x(4)) // 4_000_000