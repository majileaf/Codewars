/* Test Your Knowledge Of Function Scope
Write a function that adds from two invocations.

All inputs will be integers.

add(3)(4)  // 7
add(12)(20) // 32
*/

//Write you solution here.
const add = a => b => a + b;

console.log(add(2)(5)) // 7
console.log(add(14)(25)) // 39