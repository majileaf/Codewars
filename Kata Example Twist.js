/*
This is an easy twist to the example kata (provided by 
Codewars when learning how to create your own kata).

Add the value "codewars" to the array websites/Websites 1,000 times.

var websites = []
*/

// add the value "codewars" to the websites array 1,000 times

// initial solution: (too slow compared to for loop or solution below)
// const websites = Array.from({length: 1000}, (e => 'codewars'));

const websites = Array(1000).fill('codewars');