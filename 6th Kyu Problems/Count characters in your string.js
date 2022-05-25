/*
The main idea is to count all the occurring characters in a string. 
If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/

const count = string => string.split('').reduce((sum, n) => ((sum[n] ? sum[n]++ : sum[n] = 1), sum), {});

console.log(count("aba")) // { a: 2, b: 1 }
console.log(count("")) // {}