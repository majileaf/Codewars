/* Clothes size number converter
Description
You have clothes international size as text (xs, s, xxl).
Your goal is to return European number size as a number from that size.
Notice that there is arbitrary amount of modifiers (x), excluding m size, and input can be any string.

Linearity
Base size for medium (m) is 38.
(then, small (s) is 36, and large (l) is 40)
The scale is linear; modifier x continues that by adding or subtracting 2 from resulting size.
(For sizes where x modifier makes total size negative, treat that as OK, and return negative size)

Invalid cases
Function should handle wrong/invalid sizes.
Valid input has any base size (s/m/l) and any amount of modifiers (x) before base size (like xxl).
Notice that you cannot apply modifier for m size, consider that case as invalid!
Anything else is disallowed and should be considered as invalid (None for Python, 0, false for Go, null for JavaScript).
Invalid examples: xxx, sss, xm, other string

Valid Examples
xs: 34
s: 36
m: 38
l: 40
xl: 42 
*/

const sizeMap = {x: 2, s: -36, m: 38, l: 40};
const sizeToNumber = size => /^(x*[sl]|m)$/.test(size)
    ? [...size].reduce((sum, n) => sum + Math.sign(sizeMap[size.at(-1)]) * sizeMap[n], 0)
    : null;

// Basic tests
console.log(sizeToNumber("s")) // 36
console.log(sizeToNumber("m")) // 38
console.log(sizeToNumber("l")) // 40
console.log(sizeToNumber("xl")) // 42
console.log(sizeToNumber("xs")) // 34

// Extra modifier tests
console.log(sizeToNumber("xxxs")) // 30
console.log(sizeToNumber("xxxl")) // 46

// Invalid/wrong sizes/input
console.log(sizeToNumber("")) // null - Blank string is invalid
console.log(sizeToNumber("xm")) // null - Cannot apply modifier for medium size
console.log(sizeToNumber("xxxm")) // null - Cannot apply modifier for medium size
console.log(sizeToNumber("xxxx")) // null - No base size provided
console.log(sizeToNumber("ssss")) // null - Only one base size is allowed
console.log(sizeToNumber("hello world")) // null - Any other text is invalid
console.log(sizeToNumber("sm")) // null - Cannot have two bases
console.log(sizeToNumber("ml")) // null - Cannot have two bases
console.log(sizeToNumber("lm")) // null - Cannot have two bases