/* esreveR
Write a function reverse which reverses a list (or in clojure's case, 
any list-like data structure)

(the dedicated builtin(s) functionalities are deactivated)
*/

// initial solution:
// reverse = function(array) {
//     let arr = [];
//     for (let i = array.length - 1; i >= 0; i--) arr.push(array[i]);
//     return arr;
// }

const reverse = array => array.reduceRight((sum, n) => (sum.push(n) , sum), []);

// alternatively:
// const reverse = array =>
//   array.reduce((sum, n) => [n, ...sum], []);

console.log(reverse([1,2,3])) // [3,2,1] 
console.log(reverse([1,null,14,"two"])) // ["two",14,null,1] 