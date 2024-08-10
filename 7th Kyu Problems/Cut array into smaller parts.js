/* Cut array into smaller parts
Write function makeParts or make_parts (depending on your language) that will take an array as argument and the size of the chunk.

Example: if an array of size 123 is given and chunk size is 10 there will be 13 parts, 12 of size 10 and 1 of size 3.
*/

const makeParts = (arr, chunkSize) => {
    const res = [];
    for (let i = 0; i < Math.max(1, Math.floor(arr.length / chunkSize)); i++) {
        res.push(arr.slice(0 + i * chunkSize, chunkSize + i * chunkSize));
    }
    
    if (arr.length > chunkSize  && arr.length % chunkSize !== 0) res.push(arr.slice(-arr.length % chunkSize));
    return res;
}

// alternatively:
// const makeParts = (arr, chunkSize) => {
//     const res = [];
//     for (let i = 0; i < arr.length; i += chunkSize) {
//         res.push(arr.slice(i, i + chunkSize));
//     }
//     return res;
// }

console.log(makeParts([1,2,3,4,5], 2)) // [[1,2],[3,4],[5]]
console.log(makeParts([1,2,3], 1)) // [[1],[2],[3]]
console.log(makeParts([1,2,3,4,5], 10)) // [[1,2,3,4,5]]