/* Dan's great power generator
Dan likes to find the nth power of number. But he doesn't like it when the result is odd!
Return the nth power of each number, unless the result is odd, in which case round the result to the nearest 10.

Eg. if number = 7, and power = 2, result = 50.
*/

const danspower = (num, power) => {
    const res = num ** power;
    return res % 2 ? Math.round(res / 10) * 10 : res;
}

console.log(danspower(5,0)) // 0
console.log(danspower(2,0)) // 0
console.log(danspower(8,1)) // 8
console.log(danspower(3,1)) // 0
console.log(danspower(7,2)) // 50
console.log(danspower(9,2)) // 80
console.log(danspower(4,2)) // 16
console.log(danspower(0,2)) // 0
console.log(danspower(5,2)) // 30
console.log(danspower(0,3)) // 0
console.log(danspower(5,3)) // 130
console.log(danspower(6,4)) // 1296
console.log(danspower(3,4)) // 80
console.log(danspower(6,9)) // 10077696
console.log(danspower(3,10)) // 59050