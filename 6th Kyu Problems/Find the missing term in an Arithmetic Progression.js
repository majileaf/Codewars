/*
An Arithmetic Progression is defined as one in which there is a constant 
difference between the consecutive terms of a given series of numbers. 
You are provided with consecutive elements of an Arithmetic Progression. 
There is however one hitch: exactly one term from the original series is
missing from the set of numbers which have been given to you. The rest 
of the given series is the same as the original AP. Find the missing term.

You have to write a function that receives a list, list size will always 
be at least 3 numbers. The missing term will never be the first or last one.

Example
findMissing([1, 3, 5, 9, 11]) == 7
*/

// initial solution:
// const findMissing = list => {  
//     const diff1 = list[1] - list[0];
//     const diff2 = list[2] - list[1];

//     if (list[0] + diff2 === list[1] - diff2) {
//         return list[0] + diff2;
//     } else if (list[1] + diff1 === list[2] - diff1) {
//         return list[1] + diff1;
//     }

//     let i = 0;
//     while (list[i] + diff1 === list[i + 1]) i++;

//     return list[i] + diff1;
// }

// alternatively:
// const findMissing = list => {  
//     const diff = (list[list.length - 1] - list[0]) / list.length;

//     let i = 0;
//     while (list[i] + diff === list[i + 1]) i++;
    
//     return list[i] + diff;
// }

// using Arithmetic Series Formula:
const findMissing = list => ((list[0] + list[list.length - 1]) * (list.length + 1)) / 2 - list.reduce((sum, n) => sum + n, 0);

console.log(findMissing([ -1, 25, 38 ])) // 12
console.log(findMissing([ 0, -1, -3 ])) // -2
console.log(findMissing([1, 3, 4])) // 2
console.log(findMissing([1, 3, 5, 9, 11])) // 7
console.log(findMissing([1, 2, 3, 4, 5, 7])) // 6