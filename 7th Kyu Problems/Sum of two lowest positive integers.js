/*
Create a function that returns the sum of the two lowest 
positive numbers given an array of minimum 4 positive integers. 
No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], 
the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.
*/

// initial solution
// const sumTwoSmallestNumbers = numbers => {
//     const min = Math.min(...numbers);
//     return min + Math.min(...numbers.filter(e => e !== min));
// }

const sumTwoSmallestNumbers = numbers => {
    let min = Math.min(numbers[0], numbers[1]);
    let min2 = Math.max(numbers[0], numbers[1]);

    for (let i = 2; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min2 = min;
            min = numbers[i];
        } else if (numbers[i] < min2) {
            min2 = numbers[i];
        }
    }
    return min + min2;
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22])) // 13 , "Sum should be 13"
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43])) // 6 , "Sum should be 6"
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7])) // 10 , "Sum should be 10"
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1])) // 24 , "Sum should be 24"
console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4])) // 16 , "Sum should be 16")