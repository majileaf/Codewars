/*
I love Fibonacci numbers in general, but I must admit I love some more than others.

I would like for you to write me a function that when given a number (n) returns 
the n-th number in the Fibonacci Sequence.

For example:
nthFibo(4) == 2
Because 2 is the 4th number in the Fibonacci Sequence.

For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and 
each subsequent number is the sum of the previous two.
*/

const nthFibo = n => n === 1 ? 0 : n === 2 ? 1 : nthFibo(n - 1) + nthFibo(n - 2);

console.log(nthFibo(1)) // 0
console.log(nthFibo(2)) // 1
console.log(nthFibo(3)) // 1
console.log(nthFibo(4)) // 2