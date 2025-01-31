/*
Time to test your basic knowledge in functions! 

Return the odds from a list:
[1, 2, 3, 4, 5]  -->  [1, 3, 5]
[2, 4, 6]        -->  []
*/

const odds = values => values.filter(e => e % 2);

console.log(odds([])) // []
console.log(odds([2, 4, 6])) // []
console.log(odds([1, 3, 5])) // [1, 3, 5]
console.log(odds([1, 2, 3, 4, 5, 6])) // [1, 3, 5]