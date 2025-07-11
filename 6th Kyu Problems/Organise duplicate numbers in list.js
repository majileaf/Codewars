/* Organise duplicate numbers in list
Sam is an avid collector of numbers. Every time he finds a new number he throws it on the top of his number-pile. 
Help Sam organise his collection so he can take it to the International Number Collectors Conference in Cologne.

Given an array of numbers, your function should return an array of arrays, where each subarray contains 
all the duplicates of a particular number. Subarrays should be in the same order as the first occurence 
of the number they contain:

group([3, 2, 6, 2, 1, 3])
>>> [[3, 3], [2, 2], [6], [1]]

Assume the input is always going to be an array of numbers. If the input is an empty array, an empty array should be returned.
*/

const group = arr => {
    const count = arr.reduce((sum, n) => (sum[n] = ((sum[n] || 0) + 1), sum), {});
    return [...new Set(arr)].map(e => Array(count[e]).fill(e));
}

console.log(group([3, 2, 6, 2, 1, 3])) // [[3, 3], [2, 2], [6], [1]]
console.log(group([3, 2, 6, 2])) // [[3], [2, 2], [6]]