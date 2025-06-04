/* Largest product in a series
Complete the method so that it'll find the greatest product of five consecutive digits in the given string of digits.

For example: the greatest product of five consecutive digits in the string "123834539327238239583" is 3240.

The input string always has more than five digits.

Adapted from Project Euler.
*/

const greatestProduct = input => {
    let current = 1;
    let max = 0;
    let count = 0;

    for (let i = 0; i < input.length; i++) {
        if (input[i] == 0) {
            i++;
            current = 1;
            count = 0;
            continue;
        }
        current *= input[i];
        count++;
        if (count > 5) current /= input[i - 5];
        if (count >= 5 && current > max) max = current;
    }
    return max;
}

console.log(greatestProduct("123834539327238239583")) // 3240
console.log(greatestProduct("92494737828244222221111111532909999")) // 5292
console.log(greatestProduct("02494037820244202221011110532909999")) // 0