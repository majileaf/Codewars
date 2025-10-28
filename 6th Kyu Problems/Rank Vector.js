/* Rank Vector
Given an array (or list) of scores, return the array of ranks for each value in the array. 
The largest value has rank 1, the second largest value has rank 2, and so on. 
Ties should be handled by assigning the same rank to all tied values. 

For example:
    array = [9,3,6,10] --> ranks = [2,4,3,1]
    array = [3,3,3,3,3,5,1] --> ranks = [2,2,2,2,2,1,7]
    because there is one 1st place value, a five-way tie for 2nd place, and one in 7th place.
*/

const ranks = a => {
    const count = a.slice().sort((a, b) => b - a).reduce((sum, n, i) => (sum[n] = (sum[n] || i + 1), sum), {});
    return a.map(e => count[e]);
}

console.log(ranks([])) // []
console.log(ranks([2])) // [1]
console.log(ranks([2, 2])) // [1, 1]
console.log(ranks([1, 2, 3])) // [3, 2, 1]
console.log(ranks([5, 2, 3, 5, 5, 4, 9, 8, 0])) // [3, 8, 7, 3, 3, 6, 1, 2, 9]