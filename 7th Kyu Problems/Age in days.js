/* Age in days
Did you ever want to know how many days old are you? Complete the function which returns your age in days. 
The birthday is given in the following order: year, month, day.

For example if today is 30 November 2015 then

ageInDays(2015, 11, 1) returns "You are 29 days old"
The birthday is expected to be in the past.
*/

const ageInDays = (year, month, day) => {
  let start = new Date(year, month - 1, day);
  let end = new Date();
  let days = Math.floor((end.getTime() - start.getTime()) / (1e3 * 60 * 60 * 24));
  return `You are ${days} days old`;
}

var birthday = new Date();
birthday.setDate(birthday.getDate() - 2);
console.log(ageInDays(birthday.getFullYear(), birthday.getMonth()+1, birthday.getDate())) // "You are 2 days old"

var birthday = new Date();
birthday.setDate(birthday.getDate() - 365);
console.log(ageInDays(birthday.getFullYear(), birthday.getMonth()+1, birthday.getDate())) // "You are 365 days old"