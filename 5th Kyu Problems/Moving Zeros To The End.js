/*
Write an algorithm that takes an array and moves all of the zeros to the end, 
preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

// initial solution: 
// const moveZeros = arr => {
//     const filtered = arr.filter(e => e !== 0)
//     return filtered.concat([...Array(arr.length - filtered.length)].fill(0));
// }

// alt1:
// const moveZeros = arr => {
//     const arrays = Object.values(arr.reduce((sum, n) => (n !== 0 ? sum.filtered.push(n) : sum.zeros.push(n), sum), {filtered: [], zeros: []}));
//     return arrays[0].concat(arrays[1]);
// }

// alt2:
// const moveZeros = arr => {
//     const arrays = arr.reduce((sum, n) => (n !== 0 ? sum.filtered.push(n) : sum.zeros.push(n), sum), {filtered: [], zeros: []});
//     return arrays.filtered.concat(arrays.zeros);
// }

// alt3:
const moveZeros = arr => {
    let array = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        arr[i] !== 0 ? array.unshift(arr[i]) : array.push(arr[i]);
    }
    return array;
}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1])) // [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]