/* Double Trouble
Given an array of integers (x), and a target (t), you must find out if 
any two consecutive numbers in the array sum to t. If so, remove the second number.

Example:
x = [1, 2, 3, 4, 5]
t = 3

1+2 = t, so remove 2. No other pairs = t, so rest of array remains:
[1, 3, 4, 5]

Work through the array from left to right.
Return the resulting array.
*/

/* from a comment:
It is unclear what "removing an element" means. As I thought first a case like a=[2, 6, 2], n=8 should 
return [2] because the comparisons would be 2 + 6 == 8 and 6 + 2 == 8 (6 is removed but we still check 
if a[1] + a[2] == n), while the correct comparisons are 2 + 6 == 8, 2 + 2 == 8 (6 is removed so we 
check a[0] + a[2] == n instead), and the correct result is [2, 2].
*/

const trouble = (x, t) => x.reduce((sum, n, i) => (i !== x.length - 1 && t !== sum[sum.length - 1] + x[i + 1] ? sum.push(x[i + 1]) : sum, sum), [x[0]]);

console.log(trouble([1, 3, 5, 6, 7, 4, 3],7)) // [1, 3, 5, 6, 7, 4]
console.log(trouble([4, 1, 1, 1, 4],2)) // [4, 1, 4]
console.log(trouble([2, 2, 2, 2, 2, 2], 4)) // [2]
console.log(trouble([2, 6, 2], 8)) // [2, 2]