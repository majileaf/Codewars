/* Milk and Cookies for Santa
Happy Holidays fellow Code Warriors!
It's almost Christmas Eve, so we need to prepare some milk and cookies for Santa! 
Wait... when exactly do we need to do that?

Time for Milk and Cookies
Complete the function function that accepts a Date object, and returns true if 
it's Christmas Eve (December 24th), false otherwise.

Keep in mind Javascript's Date month is 0 based!

Examples
timeForMilkAndCookies(new Date(2013, 11, 24))  // true
timeForMilkAndCookies(new Date(2013, 0, 23))   // false
timeForMilkAndCookies(new Date(3000, 11, 24))  // true
*/

const timeForMilkAndCookies = date => {
  const [month, day] = [date.getMonth() + 1, date.getDate()];
  return month === 12 && day === 24;
}

// alternatively:
// const timeForMilkAndCookies = date => date.getMonth() + 1 === 12 && date.getDate() === 24;

console.log(timeForMilkAndCookies(new Date(2013, 11, 24)))  // true
console.log(timeForMilkAndCookies(new Date(2013, 0, 23)))   // false
console.log(timeForMilkAndCookies(new Date(3000, 11, 24)))  // true