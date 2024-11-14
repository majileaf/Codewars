/* Grid index
You are given an n by n ( square ) grid of characters, for example:
[['m', 'y', 'e'], 
 ['x', 'a', 'm'], 
 ['p', 'l', 'e']]

You are also given a list of integers as input, for example:
[1, 3, 5, 8]

You have to find the characters in these indexes of the grid if you think of the indexes as:
[[1, 2, 3], 
 [4, 5, 6], 
 [7, 8, 9]]

Remember that the indexes start from one and not zero.

Then you output a string like this:
"meal"
All inputs will be valid.
*/

const gridIndex = (grid, indices) => {
    const str = grid.flat();
    return indices.reduce((sum, n) => sum + str[n - 1], '');
}

console.log(gridIndex([['m', 'y', 'e'], ['x', 'a', 'm'], ['p', 'l', 'e']], [1, 2, 3, 4, 5, 6, 7, 8, 9])) // 'myexample'
console.log(gridIndex([['m', 'y', 'e'], ['x', 'a', 'm'], ['p', 'l', 'e']], [1, 5, 6])) // 'mam'
console.log(gridIndex([['m', 'y', 'e'], ['x', 'a', 'm'], ['p', 'l', 'e']], [1, 3, 7, 8])) // 'mepl'
console.log(gridIndex([['h', 'e', 'l', 'l'], ['o', 'c', 'o', 'd'], ['e', 'w', 'a', 'r'], ['r', 'i', 'o', 'r']], [5, 7, 9, 3, 6, 6, 8, 8, 16, 13])) // 'ooelccddrr'