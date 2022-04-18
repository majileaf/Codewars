/*
Issue
Looks like some hoodlum plumber and his brother has been running 
around and damaging your stages again.

The pipes connecting your level's stages together need to be 
fixed before you receive any more complaints. Each pipe should 
be connecting, since the levels ascend, you can assume every number 
in the sequence after the first index will be greater than the 
previous and that there will be no duplicates.

Task
Given the a list of numbers, return the list so that the values 
increment by 1 for each index up to the maximum value.

Example
Input: 1,3,5,6,7,8

Output: 1,2,3,4,5,6,7,8
*/

// initial:
// const pipeFix = numbers => {
//     let i = 0;
//     while (i < numbers.length && numbers[i + 1]) {
//         if (Math.abs(numbers[i + 1] - numbers[i]) !== 1) numbers.splice(i + 1, 0, numbers[i] + 1);
//         i++;
//     }
//     return numbers;
// }

const pipeFix = numbers => {
    const min = numbers[0];
    const max = numbers[numbers.length - 1]; 
    return [...Array(max + 1 - min)].map((_, i) => min + i);
}

console.log(pipeFix([1,2,3,5,6,8,9])) // [1,2,3,4,5,6,7,8,9]
console.log(pipeFix([1,2,3,12])) // [1,2,3,4,5,6,7,8,9,10,11,12]
console.log(pipeFix([6,9])) // [6,7,8,9]
console.log(pipeFix([-1,4])) // [-1,0,1,2,3,4]
console.log(pipeFix([1,2,3])) // [1,2,3]