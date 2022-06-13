/*
The two oldest ages function/method needs to be completed. 
It should take an array of numbers as its argument and return 
the two highest numbers within the array. The returned value 
should be an array in the format [second oldest age, oldest age].

The order of the numbers passed in could be any order. The array 
will always include at least 2 items. If there are two or more 
oldest age, then return both of them in array format.

For example (Input --> Output):

[1, 2, 10, 8] --> [8, 10]
[1, 5, 87, 45, 8, 8] --> [45, 87]
[1, 3, 10, 0]) --> [3, 10]
*/

const twoOldestAges = ages => ages.reduce((sum, n) => {
    if (n > sum[1]) {
        sum[0] = sum[1];
        sum[1] = n;
    } else if (n > sum[0]) {
        sum[0] = n;
    } 
    return sum;
}, [-Infinity, -Infinity])

// alternatively:
// const twoOldestAges = ages => ages.sort((a, b) => a - b).slice(-2)

let results1 = twoOldestAges([1,5,87,45,8,8]);
let results2 = twoOldestAges([6,5,83,5,3,18]);

console.log(twoOldestAges(results1)) // [45, 87]
console.log(twoOldestAges(results2)) // [18, 83]
