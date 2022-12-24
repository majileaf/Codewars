/* Return the first M multiples of N
Implement a function, multiples(m, n), which returns an array of the first m multiples 
of the real number n. Assume that m is a positive integer.

Ex.

multiples(3, 5.0)
should return

[5.0, 10.0, 15.0]
*/

const multiples = (m, n) => [...Array(m)].map((_, i) => n * (i + 1));

console.log(multiples(3, 5)) // [5, 10, 15]