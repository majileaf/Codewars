/* Square and Cubic Factors
Task:
Your job here is to implement a function factors, which takes a number n, and outputs an array of arrays comprised 
of two parts, sq and cb. The part sq will contain all the numbers that, when squared, yield a number which is 
a factor of n, while the cb part will contain all the numbers that, when cubed, yield a number which is a factor of n. 
Discard all 1s from both arrays.

Both sq and cb should be sorted in ascending order.

What it looks like:
factors(Number) #=> [
  sq (all the numbers that can be squared to give a factor of n) : Array,
  cb (all the numbers that can be cubed   to give a factor of n) : Array
]
Some examples:
factors(1) #=> [[], []]
  # ones are discarded from outputs

factors(4) #=> [[2], []]
  # 2 squared is 4;   4 is a factor of 4

factors(16) #=> [[2, 4], [2]]
  # 2 squared is  4;  4 is a factor of 16
  # 4 squared is 16; 16 is a factor of 16
  # 2 cubed is    8;  8 is a factor of 16

factors(81) #=> [[3, 9], [3]]
  # 3 squared is  9;  9 is a factor of 81
  # 9 squared is 81; 81 is a factor of 81
  # 3 cubed is   27; 27 is a factor of 81
*/

const factors = n => {
  const [sq, cb] = [[], []];

  for (let i = 2; i ** 2 <= n; i++) {
      if (n % i ** 2 === 0) sq.push(i);
      if (n % i ** 3 === 0) cb.push(i);
  }
  return [sq, cb];
}

console.log(factors(1)) // [[], []]
console.log(factors(4)) // [[2], []]
console.log(factors(16)) // [[2, 4], [2]]
console.log(factors(81)) // [[3, 9], [3]]
console.log(factors(80)) // [[2, 4], [2]]
console.log(factors(100)) //[[2, 5, 10], []]
console.log(factors(5)) // [[], []]
console.log(factors(120)) // [[2], [2]]
console.log(factors(18)) // [[3], []]
console.log(factors(8)) // [[2], [2]]