/* Multiply Adjacent Digits
Multiply the adjacent digits which are not separated by a '-' or a '+' in a string, then do the sum.

For example:

"53+5"    ->   20, which is 5 * 3 + 5
"266-66"  ->   36, which is 2 * 6 * 6 - 6 * 6
"555"     ->  125, which is 5 * 5 * 5
*/

const multDigit = n => [...n].reduce((sum, n) => sum * n, 1);
const opDigit = {'+': (a, b) => a + b, '-': (a, b) => a - b};
const digitMultiplication = expr => {
    const num = expr.match(/[0-9]+/g).map(multDigit);
    const op = expr.match(/[^0-9]+/g);
    let sum = num[0];
    for (let i = 1; i < num.length; i++) {
        sum = opDigit[op[i - 1]](sum, num[i]);
    }
    return sum;
}

console.log(digitMultiplication("53+5")) // 20
console.log(digitMultiplication("266-66")) // 36
console.log(digitMultiplication("555")) // 125
console.log(digitMultiplication("10000345+77-2")) // 47
console.log(digitMultiplication("12345-11989+1231111")) // -522
console.log(digitMultiplication("2395")) // 270
console.log(digitMultiplication("3434343-12121212+4949494-122")) // 191788
console.log(digitMultiplication("13579+9+9+9-11")) // 971
console.log(digitMultiplication("6-3-3-3-4")) // -7