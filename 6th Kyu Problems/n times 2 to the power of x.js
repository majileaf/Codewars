/* n times 2 to the power of x
You are given a function puzzle that accepts 2 positive integers (very important!) in the specified order, n and x, 
and returns the result of n * Math.pow(2, x). Sounds easy, right? Well, there is only one condition - you must shorten 
the code so it meets the strict character count requirements (without altering how the function behaves for 
positive integers of course).
*/

// Note: your code will be run in strict mode, so you cannot use
// undeclared variables.

let puzzle=(n,x)=>n<<x

console.log(puzzle(1, 1)) // 2
console.log(puzzle(3, 4)) // 48
console.log(puzzle(4, 3)) // 32
console.log(puzzle(7, 9)) // 3584
console.log(puzzle(9, 7)) // 1152
console.log(puzzle(13, 16)) // 851968
console.log(puzzle(16, 13)) // 131072