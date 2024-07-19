/* Next Featured Number Higher than a Given Value
Make a function that receives a value, val and outputs the smallest higher number than the given value, 
and this number belong to a set of positive integers that have the following properties:

their digits occur only once
they are odd
they are multiple of three

nextNumb(12) == 15
nextNumb(13) == 15
nextNumb(99) == 105
nextNumb(999999) == 1023459
nextNumber(9999999999) == "There is no possible number that
fulfills those requirements"
*/

const checkNumb = n => [...new Set(String(n))].join('') == n && !!(n % 2) && n % 3 === 0;
const nextNumb = val => {
    if (val > 9876543201) return 'There is no possible number that fulfills those requirements';
    for (let i = val + 1; i <= 9876543201; i++) {
        if (checkNumb(i)) return i;
    }
}

console.log(nextNumb(12)) // 15
console.log(nextNumb(13)) // 15
console.log(nextNumb(99)) // 105
console.log(nextNumb(999999)) // 1023459
console.log(nextNumb(9999999999)) // "There is no possible number that fulfills those requirements"