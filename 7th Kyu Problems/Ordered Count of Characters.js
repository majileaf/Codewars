/*
Count the number of occurrences of each character and return it as a 
list of tuples in order of appearance. For empty output return an empty list.

Example:
orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
*/

const orderedCount = text => Array.from([...text].reduce((sum, n) => sum.set(n, (sum.get(n) || 0) + 1), new Map()));

console.log(orderedCount("abracadabra")) //  [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]],
console.log(orderedCount("Code Wars")) //   [['C', 1], ['o', 1], ['d', 1], ['e', 1], [' ', 1], ['W', 1], ['a', 1], ['r', 1], ['s', 1]]],
console.log(orderedCount("233312")) //  [['2', 2], ['3', 3], ['1', 1 ]]],