/*
Finish the solution so that it sorts the passed in array of numbers.
If the function passes in an empty array or null/nil value then it 
should return an empty array.

For example:
solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []
*/

// initial solution:
// const solution = nums => {
//     if (!nums) return [];
//     let arr = nums.slice();
//     return arr.sort((a, b) => a - b);
// }

const solution = nums => Array.isArray(nums) ? nums.sort((a, b) => a - b) : [];

console.log(solution([1,2,3,10,5])) // [1,2,3,5,10]
console.log(solution(null)) // []
console.log(solution([])) // []
console.log(solution([20, 2, 10])) // [2,10,20]
console.log(solution([2, 20, 10])) // [2,10,20]