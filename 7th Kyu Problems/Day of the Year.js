/* Day of the Year
Work out what number day of the year it is.

toDayOfYear([1, 1, 2000]) => 1
The argument passed into the function is an array with the format [D, M, YYYY], 
e.g. [1, 2, 2000] for February 1st, 2000 or [22, 12, 1999] for December 22nd, 1999.

Don't forget to check for whether it's a leap year! Three criteria must be taken 
into account to identify leap years:

The year can be evenly divided by 4;
If the year can be evenly divided by 100, it is NOT a leap year, unless;
The year is also evenly divisible by 400. Then it is a leap year.
*/

const isLeapYear = year => year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);

const toDayOfYear = arr => {
  const [day, month, year] = arr;
  const months = [31, 28 + isLeapYear(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const daysFromMonths = months.slice(0, month - 1).reduce((sum, n) => sum + n, 0);
  
  return day + daysFromMonths;
}

// alternatively:
// const toDayOfYear = arr => {
//   let [day, month, year] = arr;
//   for (let i = 1; i < month; i++)
//       day += new Date(year, i, 0).getDate();
//   return day;
// }

console.log(toDayOfYear([25, 12, 2017])) // 359,
console.log(toDayOfYear([31, 10, 1991])) // 304
console.log(toDayOfYear([1, 5, 3000])) // 121
console.log(toDayOfYear([14, 3, 1066])) // 73
console.log(toDayOfYear([5, 11, 1604])) // 310

console.log(toDayOfYear([31, 12, 2000])) // 366
console.log(toDayOfYear([31, 12, 2001])) // 365
console.log(toDayOfYear([31, 12, 2004])) // 366
console.log(toDayOfYear([31, 12, 2100])) // 365