/* Enumerable Magic #20 - Cascading Subsets
Create a method each_cons that accepts a list and a number n, and 
returns cascading subsets of the list of size n, like so:

each_cons([1,2,3,4], 2)
  #=> [[1,2], [2,3], [3,4]]

each_cons([1,2,3,4], 3)
  #=> [[1,2,3],[2,3,4]]
  
As you can see, the lists are cascading; ie, they overlap, but never out of order.
*/

// initial solution:
// const eachCons = (array, n) => {
//     if (array.length === 0 || array.length < n) return [];
//     const arr = [];

//     for (let i = 0; i < array.length; i++) {
//         arr[i] = [];
//         for (let j = i; j < i + n; j++) {
//             arr[i].push(array[j]);
//             if (j === array.length - 1) return arr;
//         }
//     }
// }

const eachCons = (array, n) => {
  const numberOfArrays = array.length - n + 1;
  const arr = [];

  for (let i = 0; i < numberOfArrays; i++) {
      arr.push(array.slice(i, i + n));
  }
  return arr;
}

const lst = [3, 5, 8, 13];

console.log(eachCons(lst, 1), [[3], [5], [8], [13]]);
console.log(eachCons(lst, 2), [[3,5], [5,8], [8,13]]);
console.log(eachCons(lst, 3), [[3,5,8], [5,8,13]]);
console.log(eachCons([], 3), []);
console.log(eachCons([6, 4, 6, 16, 7, 6, 19, 19], 10)) // []
console.log(eachCons([6, 4, 6, 16, 7, 6, 19, 19], 2)) // [ [ 6, 4 ], [ 4, 6 ], [ 6, 16 ], [ 16, 7 ], [ 7, 6 ], [ 6, 19 ], [ 19, 19 ] ]