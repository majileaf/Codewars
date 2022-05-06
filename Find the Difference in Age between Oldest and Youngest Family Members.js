/* 
At the annual family gathering, the family likes to find the 
oldest living family member’s age and the youngest family 
member’s age and calculate the difference between them.

You will be given an array of all the family members' ages, 
in any order. The ages will be given in whole numbers, so a 
baby of 5 months, will have an ascribed ‘age’ of 0. 

Return a new array (a tuple in Python) with 
[youngest age, oldest age, difference between the youngest and oldest age].
*/

// initial solution: 
// const differenceInAges = ages => [Math.min(...ages), Math.max(...ages), Math.max(...ages) - Math.min(...ages)];

// alternatively: 
// const differenceInAges = ages => {
//     const min = Math.min(...ages);
//     const max = Math.max(...ages);
//     return [min, max, max - min];
// }

const differenceInAges = ages => {
    let min = Infinity;
    let max = 0;

    for (let i = 0; i < ages.length; i++) {
        if (ages[i] < min) min = ages[i];
        if (ages[i] > max) max = ages[i];
    }
    return [min, max, max - min];
}

console.log(differenceInAges([82, 15, 6, 38, 35])) // [6, 82, 76]
console.log(differenceInAges([57, 99, 14, 32])) // [14, 99, 85]