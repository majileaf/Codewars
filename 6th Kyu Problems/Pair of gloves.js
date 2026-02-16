/* Pair of gloves

Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves 
you can constitute from the gloves you have in your drawer.

Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves 
of the same color can form pairs.

Examples:
input = ["red", "green", "red", "blue", "blue"]
result = 2 (1 red pair + 1 blue pair)

input = ["red", "red", "red", "red", "red", "red"]
result = 3 (3 red pairs)
*/

const numberOfPairs = gloves => {
    const count = gloves.reduce((sum, n) => (sum[n] = (sum[n] || 0) + 1, sum), {});
    return Object.values(count).reduce((sum, n) => sum + Math.floor(n / 2), 0);
}

console.log(numberOfPairs(['red','red'])) // 1
console.log(numberOfPairs(['red','green','blue'])) // 0
console.log(numberOfPairs(['gray','black','purple','purple','gray','black'])) // 3
console.log(numberOfPairs(["red", "green", "red", "blue", "blue"])) // 2
console.log(numberOfPairs(["red", "red", "red", "red", "red", "red"])) // 3