/* Mysterious Singularity Numbers
This is a rather simple but interesting kata. Try to solve it using logic. The shortest solution can be fit into one line.

Task
The point is that a natural number N (1 <= N <= 10^9) is given. You need to write a function which finds 
the number of natural numbers not exceeding N and not divided by any of the numbers [2, 3, 5].

Example
Let's take the number 5 as an example:
1 - doesn't divide integer by 2, 3, and 5
2 - divides integer by 2
3 - divides integer by 3
4 - divides integer by 2
5 - divides integer by 5

Answer: 1
because only one number doesn't divide integer by any of 2, 3, 5

Note
Again, try to think of a formula that will shorten your solution and help you pass big tests.
*/

function realNumbers(n){
  // your code here
}

console.log(realNumbers(5)) // 1
console.log(realNumbers(10)) // 2
console.log(realNumbers(20)) // 6
console.log(realNumbers(30)) // 8
console.log(realNumbers(40)) // 10
console.log(realNumbers(55)) // 15
console.log(realNumbers(66)) // 17
console.log(realNumbers(75)) // 20
console.log(realNumbers(100)) // 26