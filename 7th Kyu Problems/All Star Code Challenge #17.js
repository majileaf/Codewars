/* All Star Code Challenge #17
Write a function that takes two arguments:
An integer representing a month of the year (0-11, where 0 is January and 11 is December).
An integer representing a day of the week (0-6, where 0 is Sunday and 6 is Saturday).

The function should return an integer representing the first year, from 2014 to 2050, 
where the first day of the given month falls on the specified day of the week.

If no such year can be found, the function should return 0.

Example 1:
Finding year where first day in December is a Tuesday:
input: month = 11, day = 2
output: 2015

Example 2:
input: month = 4, day = 55
output: 0

Hint:
Using a Date object can automatically figure out the day of the week for you
*/

const findYear = (month, dayOfWeek) => {
    if (dayOfWeek < 0 || dayOfWeek > 6) return 0;
    for (let year = 2014; year < 2050; year++) {
        let time = new Date(year, month, 1);
        if (time.getDay() === dayOfWeek) return year;
    }
    return 0;
}

// alternatively:
// const findYear = (month, dayOfWeek) => {
//     const time = new Date(2014, month, 1);
//     for (let year = 2014; year <= 2050; year++) {
//         date.setYear(year);
//         if (date.getDay() === dayOfWeek) return year;
//     }
//     return 0;
// }

console.log(findYear(11,2)) // 2015
console.log(findYear(4,55)) // 0