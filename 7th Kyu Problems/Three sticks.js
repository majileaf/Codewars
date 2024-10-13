/* Three sticks
Imagine that you are given two sticks. You want to end up with three sticks of equal length. 
You are allowed to cut either or both of the sticks to accomplish this, and can throw away leftover pieces.

Write a function, maxlen, that takes the lengths of the two sticks (L1 and L2, both positive values), 
that will return the maximum length you can make the three sticks.
*/

const maxlen = (l1, l2) => {
  const n = Math.floor(Math.max(l1, l2) / Math.min(l1, l2));
  return n === 2 ? Math.min(l1, l2) :
         n === 1 ? Math.max(l1, l2) / 2 :
         n > 2   ? Math.max(l1, l2) / 3 :
         Math.floor((l1 + l2) / 3);     
}

console.log(maxlen(5, 12)) // 5
console.log(maxlen(12, 5)) // 5
console.log(maxlen(5, 17)) // 5.666666666666667