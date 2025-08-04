/* Sum Strings as Numbers
Given the string representations of two integers, return the string representation of the sum of those integers.

For example:
sumStrings('1','2') // => '3'

A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

I have removed the use of BigInteger and BigDecimal in java

Python: your solution need to work with huge numbers (about a milion digits), converting to int will not work.
*/

const sumStrings = (a, b) => { 
    const maxLength = Math.max(a.length, b.length) + 1;
    a = a.padStart(maxLength, '0').split('').map(Number);
    b = b.padStart(maxLength, '0').split('').map(Number);
    let sum = [...Array(maxLength)].fill(0);
    
    for (let i = maxLength - 1; i >= 0; i--) {
        let num = a[i] + b[i];
        if ((sum[i] + num) > 9) sum[i - 1] += 1;
        sum[i] = (sum[i] + num) % 10;
    }
    return sum.join('').replace(/^0+/, '');
}

console.log(sumStrings('123','456')) // '579'