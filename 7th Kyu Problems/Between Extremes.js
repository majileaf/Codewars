/* Between Extremes
Given an array of numbers, return the difference between the largest and smallest values.

For example:
[23, 3, 19, 21, 16] should return 20 (i.e., 23 - 3).
[1, 434, 555, 34, 112] should return 554 (i.e., 555 - 1).

The array will contain a minimum of two elements. 
Input data range guarantees that max-min will cause no integer overflow.
*/

const betweenExtremes = numbers => {
    const arr = numbers.slice().sort((a, b) => a - b);
    const [max, min] = [arr.at(-1), arr.at(0)];
    return max - min;
}

// alternatively:
// const betweenExtremes = numbers => Math.max(...numbers) - Math.min(...numbers);

// alternatively #2:
// const betweenExtremes = numbers => {
//     let max = numbers[0];
//     let min = numbers[0];
//     for (let i = 1; i < numbers.length; i++) {
//         if (numbers[i] > max) max = numbers[i]
//         else if (numbers[i] < min) min = numbers[i]
//     }
//     return max - min;
// }

console.log(betweenExtremes([21, 34, 54, 43, 26, 12])) // 42
console.log(betweenExtremes([-1, -41, -77, -100])) // 99