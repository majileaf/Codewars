/* Easy Time Convert
This kata requires you to convert minutes (int) to hours and minutes in the format hh:mm (string).
If the input is 0 or negative value, then you should return "00:00"

Hint: use the modulo operation to solve this challenge. The modulo operation simply returns the remainder after a division. 
For example the remainder of 5 / 2 is 1, so 5 modulo 2 is 1.

Example
If the input is 78, then you should return "01:18", because 78 minutes converts to 1 hour and 18 minutes.
*/

const timeConvert = num => num = num < 0 ? '00:00' : `${Math.floor(num / 60)}`.padStart(2, '00') + ':' + `${num % 60}`.padStart(2, '00');

console.log(timeConvert(0)) // "00:00"
console.log(timeConvert(-6)) // "00:00"
console.log(timeConvert(8)) // "00:08"
console.log(timeConvert(32)) // "00:32"
console.log(timeConvert(75)) // "01:15"
console.log(timeConvert(63)) // "01:03"
console.log(timeConvert(134)) // "02:14"
console.log(timeConvert(180)) // "03:00"
console.log(timeConvert(970)) // "16:10"
console.log(timeConvert(565757)) // "9429:17"