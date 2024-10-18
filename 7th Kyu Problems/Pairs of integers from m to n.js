/* Pairs of integers from m to n
Implement a function that receives two integers m and n and generates a sorted list of pairs (a, b) such that m <= a <= b <= n.

The input m will always be smaller than or equal to n (e.g., m <= n)

Example
m = 2
n = 4

result = [(2, 2), (2, 3), (2, 4), (3, 3), (3, 4), (4, 4)]
*/

const generatePairs = (m, n) => {
    const arr = [];
    for (let a = m; a <= n; a++) {
        for (let b = a; b <= n; b++) {
            arr.push([a, b]);
        }
    }
    return arr;
}

console.log(generatePairs(2, 4)) // [ [2, 2], [2, 3], [2, 4], [3, 3], [3, 4], [4, 4] ]