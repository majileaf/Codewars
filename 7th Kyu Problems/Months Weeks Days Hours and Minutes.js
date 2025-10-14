/* Months, Weeks, Days, Hours and Minutes
Given a number of minutes, translate it into a readible human timestamp.

For example: 100 minutes equals "1 hour 40 minutes" And: 52874 minutes equals "1 month 1 week 1 day 17 hours 14 minutes"

Given that each month has 28 days.

The largest amount of minutes you'll have to test for is under a year so you'll have to translate it to 
Months, Weeks, Days, Hours and Minutes.
*/

const displayValue = value => {
    let [months, weeks, days, hours, minutes] = [0, 0, 0, 0, 0];
    minutes = value % 60;
    hours =   Math.floor(value / 60 % 24);
    days =    Math.floor(value / 60 / 24 % 7);
    weeks =   Math.floor(value / 60 / 24 / 7 % 4);
    months =  Math.floor(value / 60 / 24 / 7 / 4);

    return [months  ? `${months} month${months > 1 ? 's' : ''}` : '', 
            weeks   ? `${weeks} week${weeks > 1 ? 's' : ''}` : '', 
            days    ? `${days} day${days > 1 ? 's' : ''}` : '', 
            hours   ? `${hours} hour${hours > 1 ? 's' : ''}` : '',
            minutes ? `${minutes} minute${minutes > 1 ? 's' : ''}` : ''].filter(e => e !== '').join(' ');
}

console.log(displayValue(1)) //  "1 minute"
console.log(displayValue(100)) //  "1 hour 40 minutes"
console.log(displayValue(40321)) //  "1 month 1 minute"
console.log(displayValue(52874)) //  "1 month 1 week 1 day 17 hours 14 minutes"