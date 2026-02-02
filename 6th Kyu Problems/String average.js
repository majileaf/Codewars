/* String average
You are given a string of numbers between 0-9. Find the average of these numbers and return it as a floored whole number 
(ie: no decimal places) written out as a string. Eg:

"zero nine five two" -> "four"

If the string is empty or includes a number greater than 9, return "n/a"
*/

const strToNum = {'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9};
const numToStr = {0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine'};
const averageString = str => {
    const nums = str.split(' ').map(e => strToNum[e]);
    return numToStr[Math.floor(nums.reduce((sum, n) => sum + n, 0) / nums.length)] || 'n/a';
}

console.log(averageString("zero nine five two")) // "four"
console.log(averageString("four six two three")) // "three"
console.log(averageString("one two three four five")) // "three"
console.log(averageString("five four")) // "four"
console.log(averageString("zero zero zero zero zero")) // "zero"
console.log(averageString("one one eight one")) // "two"
console.log(averageString("")) // "n/a"