/* Milliseconds
In this kata you'll be given a value expressed in milliseconds. 
Your job is to convert this value to a nicely readable format like this "hh:mm:ss".

Some basic rules:
    Your answer should be returned as a string
    Don't use any leading zeros before your string, e.g.

"1:00:00" // is correct;
"1:00" // is correct;
"01:00" // is not correct;

    Always show the number of minutes and seconds, but don't show the hours if less than one hour

"0:59:00" // is not correct;
"59:00" // is correct;

    Always round down to the nearest whole second
    If the value is less than 1 hour, don't show the hours at all
    The highest possible value will be 86,400,000 milliseconds, i.e. 24 hours
*/

const toString = time => {
    time = time / 1000;
    const hh = Math.floor(time / (60 * 60));
    const mm = Math.floor(time % (60 * 60) / 60);
    const ss = Math.floor(time % 60);
    return (hh < 1 ? '' : hh + ':') + [String(mm).padStart(hh < 1 ? 1 : 2, '0'), String(ss).padStart(2, '00')].join(':');
}

console.log(toString(1)) // "0:00"
console.log(toString(3000)) // "0:03"
console.log(toString(180000)) // "3:00"
console.log(toString(3600000)) // "1:00:00"
console.log(toString(3780000)) // "1:03:00"
console.log(toString(3783000)) // "1:03:03"
console.log(toString(10800000)) // "3:00:00"
console.log(toString(43200999)) // "12:00:00"
console.log(toString(86400000)) // "24:00:00"