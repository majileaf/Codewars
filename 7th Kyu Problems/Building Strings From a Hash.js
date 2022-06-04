/*
Complete the solution so that it takes the object (JavaScript/CoffeeScript)
or hash (ruby) passed in and generates a human readable string from its 
key/value pairs.

The format should be "KEY = VALUE". Each key/value pair should be 
separated by a comma except for the last pair.

Example:
solution({a: 1, b: '2'}) // should return "a = 1,b = 2"
*/

// initial solution:
// const solution = pairs => {
//     let str = ""
//     for (key in pairs) {
//         str += `${key} = ${pairs[key]}` + ',';
//     }
//     return str.slice(0, -1);
// }

// alternatively:
// const solution = pairs => Object.keys(pairs)
//     .map((e, i, arr) => `${e} = ${pairs[e]}` + (i === arr.length ? ',' : ''))
//     .join()

const solution = pairs => Object.keys(pairs)
    .map(e => `${e} = ${pairs[e]}`)
    .join(',')

solution({a: 1, b: '2'}) // should return "a = 1,b = 2"