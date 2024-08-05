/* Sort by Example
Given an Array and an Example-Array to sort to, write a function that sorts the Array following the Example-Array.

Assume Example Array catalogs all elements possibly seen in the input Array. 
However, the input Array does not necessarily have to have all elements seen in the Example.

Example:
Arr: [1,3,4,4,4,4,5]

Example Arr: [4,1,2,3,5]
Result: [4,4,4,4,1,3,5]
*/

const exampleSort = (arr, exampleArr) => {
    const count = arr.reduce((sum, n) => (sum[n] = (sum[n] || 0) + 1, sum), {});
    return exampleArr
        .map(e => [...Array(count[e] || 0)].fill(e))
        .flat();
}

console.log(exampleSort([1,2,3,4,5],[2,3,4,1,5])) // [2,3,4,1,5]
console.log(exampleSort([1,2,3,3,3,4,5],[2,3,4,1,5])) // [2,3,3,3,4,1,5]
console.log(exampleSort([1,2,3,3,3,5],[2,3,4,1,5])) // [2,3,3,3,1,5]
console.log(exampleSort([1,2,3,3,3,5],[3,4,5,6,9,11,12,13,1,7,8,2,10])) // [3,3,3,5,1,2]