/*
For this kata you will have to forget how to add two numbers.

It can be best explained using the following meme:

Dayane Rivas adding up a sum while competing in the Guatemalan 
television show "Combate" in May 2016

In simple terms, our method does not like the principle of carrying 
over numbers and just writes down every number it calculates :-)

You may assume both integers are positive integers.

Examples
16 + 18 = 214
26 + 39 = 515 
122 + 81 = 1103
*/

const add = (num1, num2) => {
  num1 = num1.toString().split('').reverse();
  num2 = num2.toString().split('').reverse();

  return +[...Array(Math.max(num1.length, num2.length))].map((_, i) => Number(num1[i] || 0) + Number(num2[i] || 0)).reverse().join('')
}

console.log(add(2, 11)) // 13
console.log(add(0, 1)) // 1
console.log(add(0, 0)) // 0
console.log(add(16, 18)) // 214
console.log(add(26, 39)) // 515
console.log(add(122, 81)) // 1103
console.log(add(1222, 30277)) // 31499
console.log(add(1236, 30977)) // 31111013
console.log(add(38810, 1383)) // 391193
console.log(add(49999, 49999)) //  818181818