/* Find the Middle of the Product
Given a string of characters, I want the function findMiddle()/find_middle() to return the middle number in the product of each digit in the string.

Example: 's7d8jd9' -> 7, 8, 9 -> 7*8*9=504, thus 0 should be returned as an integer.

Not all strings will contain digits. In this case and the case for any non-strings, return -1.

If the product has an even number of digits, return the middle two digits

Example: 1563 -> 56
NOTE: Remove leading zeros if product is even and the first digit of the two is a zero. Example 2016 -> 1
*/

const findMiddle = str => {
    if (typeof str !== 'string') return -1;
    const n = str.replace(/[^\d]/g, '');
    if (n === '') return -1;
    const prod = [...n].reduce((sum, n) => sum * n, 1).toString();
    if (prod < 100) return +prod;
    const mid = prod.length / 2;
    const midNum = prod.length % 2 ? prod[Math.floor(mid)] : prod.slice(mid - 1, mid + 1);
    return +midNum || 0;
}

console.log(findMiddle('s7d8jd9')) // 0
console.log(findMiddle('58jd9fgh/fgh6s.,sdf')) // 16