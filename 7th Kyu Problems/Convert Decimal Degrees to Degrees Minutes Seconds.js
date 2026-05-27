/* Convert Decimal Degrees to Degrees, Minutes, Seconds
Remember: 1 degree = 60 minutes; 1 minute = 60 seconds.

Input: Positive number.

Output: Array [degrees, minutes, seconds]. E.g [30, 25, 25]

Trailing zeroes should be omitted in the output. E.g

convert (50) 
//correct output -> [50] 
//wrong output -> [50, 0, 0]

convert(80.5)
//correct output -> [ 80, 30 ]
//wrong output -> [80, 30, 0]

convert(0.0001388888888888889)
//correct output -> [ 0, 0, 1 ]
//wrong output -> [1]

Round the seconds to the nearest integer.
*/

const convert = degrees => {
    const total = Math.round(degrees * 3600);
    const dd = Math.floor(total / 60 / 60);
    const mm = Math.floor(total / 60 % 60);
    const ss = total % 60;
    
    return ss ? [dd, mm, ss] : mm ? [dd, mm] : [dd];
}

console.log(convert(0)) // [0]
console.log(convert(40.567)) // [40, 34, 1]
console.log(convert(80.5)) // [ 80, 30 ]
console.log(convert(70.234).length) // 3
console.log(convert(20.999)) // [20, 59, 56]
console.log(convert(33.333)[1]) // 19
console.log(convert(50)) // [50]
console.log(convert(0.0001388888888888889)) // [ 0, 0, 1 ]
console.log(convert(0.0001388888888888888)) // [ 0 ]
console.log(convert(91.33333333333333)) // [91, 20]
console.log(convert(69.36666666666666)) // [69, 22]
console.log(convert(262.21666666666664)) // [262, 13]
console.log(convert(0.99999999)) // [1]