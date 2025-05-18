/* Colorful Number
Problem
Determine whether a non-negative integer number is colorful or not.

263 is a colorful number because [2, 6, 3, 2*6, 6*3, 2*6*3] are all different; whereas
236 is not colorful, because [2, 3, 6, 2*3, 3*6, 2*3*6] has 6 twice.

So take all consecutive subsets of digits, take their products, and ensure all the products are different.

Examples
263  -->  true
236  -->  false
*/

const multNum = str => [...str].reduce((sum, n) => sum * n, 1);
const colourful = number => {
    number = String(number);
    const arr = [];
    let n = '';
    
    for (let i = 1; i <= number.length; i++) {
        for (let j = 0; j < Math.ceil(number.length / i); j++) {
            n = number.slice(i - 1, i + j);
            if (n.length > 1) n = multNum(n);
            arr.push(+n);
        }
    }
    return arr.length === new Set(arr).size;
}

console.log(colourful(5)) // true
console.log(colourful(23)) // true
console.log(colourful(263)) // true
console.log(colourful(235789)) // true
console.log(colourful(50)) // false
console.log(colourful(13)) // false
console.log(colourful(236)) // false
console.log(colourful(2357893)) // false