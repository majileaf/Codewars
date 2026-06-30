/* Last digit of a large number
Define a function that takes in two non-negative integers aaa and bbb and returns the last decimal digit of aba^bab. 
Note that aaa and bbb may be very large!

For example, the last decimal digit of 979^797 is 999, since 97=47829699^7 = 478296997=4782969. 
The last decimal digit of (2200)2300({2^{200}})^{2^{300}}(2200)2300, which has over 109210^{92}1092 decimal digits, is 666. 
Also, please take 000^000 to be 111.

You may assume that the input will always be valid.

Examples
lastDigit(4n, 1n)            // returns 4n
lastDigit(4n, 2n)            // returns 6n
lastDigit(9n, 7n)            // returns 9n  
lastDigit(10n,10000000000n)  // returns 0n
*/

const lastDigit = (n, m) => m ? (n % 10n) ** (m % 4n || 4n) % 10n : 1n;

console.log(lastDigit(4n, 1n)) // 4n
console.log(lastDigit(4n, 2n)) // 6n
console.log(lastDigit(9n, 7n)) // 9n
console.log(lastDigit(10n,10000000000n)) // 0n
console.log(lastDigit(1606938044258990275541962092341162602522202993782792835301376n, 2037035976334486086268445688409378161051468393665936250636140449354381299763336706183397376n)) // 6n
console.log(lastDigit(3715290469715693021198967285016729344580685479654510946723n, 68819615221552997273737174557165657483427362207517952651n)) // 7n