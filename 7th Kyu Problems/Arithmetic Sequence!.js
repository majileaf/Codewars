/* Arithmetic Sequence!
Introduction
A sequence is usually a set or an array of numbers that has a strict way for moving from the nth term to the (n+1)th term.
If f(n) = f(n-1) + c where c is a constant value, then f is an arithmetic sequence.
An example would be (where the first term is 0 and the constant is 1) is [0, 1, 2, 3, 4, 5, ... and so on]
Else if f(n) = f(n-1) * c where c is a constant value, then f is a geometric sequence.

Example where the first term is 2 and the constant is 2 will be [2, 4, 8, 16, 32, 64, ... to infinity ... ]
There are some other sequences that aren't arithmetic nor are they geometric.
Here is a link to feed your brain! : Sequence (http://en.wikipedia.org/wiki/Sequence)

Task
You're going to write a function that's going to return the value in the nth index of an arithmetic sequence. 
(That is, adding a constant to move to the next element in the "sequence").

The function takes three inputs first,n,c where:
first is the first value in the index 0.
n is the index of the value we want.
c is the constant added between each term.

Remember that first is in the index 0 .. just saying ...
*/

const nthterm = (first, n, c) => {
  let res = first;
  for (let i = 1; i <= n; i++) {
      res += c;
  }
  return res;
}

console.log(nthterm(1, 2, 3)) // 7
console.log(nthterm(2, 2, 2)) // 6
console.log(nthterm(-50, 10, 20)) // 150