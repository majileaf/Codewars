/* Average Scores
Create a function that returns the average of an array of numbers ("scores"), rounded to the nearest whole number. 
You are not allowed to use any loops (including for, for/in, while, and do/while loops).

The array will never be empty.
*/

const average = scores => Math.round(scores.reduce((sum, n) => sum + n, 0) / scores.length);

console.log(average([49,3,5,300,7])) // 73
console.log(average([90,98,89,100,100,86,94])) // 94