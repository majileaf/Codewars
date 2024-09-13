/* Graceful Tipping
Adding tip to a restaurant bill in a graceful way can be tricky, thats why you need make a function for it.

The function will receive the restaurant bill (always a positive number) as an argument. 
You need to 1) add at least 15% in tip, 2) round that number up to an elegant value and 3) return it.

What is an elegant number? It depends on the magnitude of the number to be rounded. 
Numbers below 10 should simply be rounded to whole numbers. 

Numbers 10 and above should be rounded like this:
10 - 99.99... ---> Round to number divisible by 5
100 - 999.99... ---> Round to number divisible by 50
1000 - 9999.99... ---> Round to number divisible by 500
And so on...

Good luck!

Examples
 1  -->    2
 7  -->    9
12  -->   15
86  -->  100
*/

// initial solution:
// const gracefulTipping = bill => {
//   const tip = bill * 1.15;
//   if (tip < 10) return Math.ceil(tip);
//   const digits = Math.max(Math.floor(Math.log10(Math.abs(tip))), 0) + 1;
//   const div = 5 * 10 ** (digits - 2);
//   return Math.ceil(tip / div) * div;
// }

// alternative:
const gracefulTipping = bill => {
  const tip = bill * 1.15;
  if (tip < 10) return Math.ceil(tip);
  const div = 5 * 10 ** (Math.floor(Math.log10(tip) - 1));
  return Math.ceil(tip / div) * div;
}

console.log(gracefulTipping(1.09)) // 2
console.log(gracefulTipping(7)) // 9
console.log(gracefulTipping(11.99)) // 15

console.log(gracefulTipping(1)) // 2
console.log(gracefulTipping(12)) // 15
console.log(gracefulTipping(86)) // 100