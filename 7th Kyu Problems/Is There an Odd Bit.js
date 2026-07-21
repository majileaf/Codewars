/* Is There an Odd Bit?
Return 1 when any odd bit of x equals 1; 0 otherwise.

Assume that:
    x is an unsigned, 32-bit integer;
    the bits are zero-indexed (the least significant bit is position 0)

Examples
  2  -->  1 (true) because at least one odd bit is 1 (2 = 0b10)
  5  -->  0 (false) because none of the odd bits are 1 (5 = 0b101)
170  -->  1 (true) because all of the odd bits are 1 (170 = 0b10101010)
*/

const anyOdd = x => +[...x.toString(2)].reverse().some((e, i) => +e && i % 2 !== 0);

console.log(anyOdd(2863311530)) // 1
console.log(anyOdd(128)) // 1
console.log(anyOdd(131)) // 1
console.log(anyOdd(2)) // 1
console.log(anyOdd(24082)) // 1
console.log(anyOdd(0)) // 0
console.log(anyOdd(85)) // 0
console.log(anyOdd(1024)) // 0
console.log(anyOdd(1)) // 0
console.log(anyOdd(1365)) // 0