/* Sum and Length

In this kata you must return a string value, where the first part is the sum of positive numbers and 
the second part is the number of negative numbers.

Knowing that the first 0 is negative, the second is positive, the third is negative, and so on...

Examples
[-1,2,3,4,0,1,0,-2,0,-3]

==> '10 5'

sum of positives: 10 = 2 + 3 + 4 + 0 (second) + 1
count of negatives: 5 ( -1, 0 (first), -2, 0 (third), -3 )
*/

const sumLength = array => {
    let j = -Infinity;
    let sum = 0;
    let neg = 0;

    for (let i = 0; i < array.length; i++) {
        if (!array[i]) array[i] = j, j = -j;
        if (array[i] !== Infinity && array[i] > 0) sum += array[i];
        else if (array[i] < 0) neg++;
    }
    return [sum, neg].join(' ');
}

console.log(sumLength([1,2,3,4,-1,-2,-3])) // '10 3'
console.log(sumLength([1,2,3,4,0,-1,-2,-3])) // '10 4'
console.log(sumLength([-1,2,3,4,0,1,0,-2,0,-3])) // '10 5'
console.log(sumLength([-1,-2,-3,-4,0,-1,0,-2,0,-3])) // '0 9'
console.log(sumLength([1,2,3,4,1,2,3])) // '16 0'
console.log(sumLength([0,0,0,0,0,0,0])) // '0 4'
console.log(sumLength([])) // '0 0'