/* Split by Mask
Given a xs and a mask (a list of lengths), split the string into its parts accordingly.

Examples:
|     xs        |  Mask (lengths) |          Output           |
|---------------|-----------------|---------------------------|
|  "1234567890" |  [3, 3, 4]      |  ["123", "456", "7890"]   |
|  "codewars"   |  [4, 4]         |  ["code", "wars"]         |

Notes:
    The mask only contains strictly positive integers.
    A mask is valid if and only if the sum of the lengths is equal to the length of the string.
    Otherwise, return None.
*/

const split = (string, mask) => {
    if (string.length !== mask.reduce((sum, n) => sum + n, 0)) return null;
    const arr = [];
    let add = 0;

    for (let i = 0; i < mask.length; i++) {
        arr.push(string.slice(add, mask[i] + add));
        add += mask[i];
    }
    return arr;
}

console.log(split("1234567890",[3,3,4])) // ["123","456","7890"]
console.log(split("codewars",[4,4])) // ["code","wars"]
console.log(split("",[])) // []
console.log(split("",[1])) // null
console.log(split("codewars",[4,4,4])) // null