/* Possible side lengths of a triangle excluding right triangles.
DESCRIPTION:
Your strict math teacher is teaching you about right triangles, and the Pythagorean Theorem: 
a² + b² = c² whereas 𝑎 and 𝑏 are the legs of the right triangle and 𝑐 is the hypotenuse of the right triangle. 
On the test however, the question asks: What are the possible integer lengths for the other side of the 
triangle given two sides 𝑎 and 𝑏, but since you never learned anything about that in class, you realize 
she meant What are the possible integer lengths for the other side of the right triangle given two sides 
𝑎 and 𝑏.

Because you want to address the fact that she asked the wrong question and the fact that you're smart at math, 
you've decided to answer all the possible values for the third side EXCLUDING the possibilities for 
a right triangle in increasing order.

EXAMPLES:
side_len(1, 1) --> [1]
side_len(3, 4) --> [2, 3, 4, 6]
side_len(4, 6) --> [3, 4, 5, 6, 7, 8, 9]

RETURN:
Return your answer as a list of all the possible third side lengths of the triangle without 
the right triangles in increasing order.

NOTE:
When given side_len(x, y), y will always be greater than or equal to x. 
Also, if a right triangle's legs are passed in, exclude the hypotenuse. 
If a right triangle's leg and hypotenuse are passed in, exclude the other leg.
*/

const sideLen = (x, y) => {
  const arr = [];
  for (let i = y - x + 1; i < x + y; i++) {
      if (x ** 2 + y ** 2 !== i ** 2 && x ** 2 + i ** 2 !== y ** 2) arr.push(i);
  }
  return arr;
}

console.log(sideLen(1, 1)) // [1]
console.log(sideLen(3, 4)) // [2, 3, 4, 6]
console.log(sideLen(4, 6)) // [3, 4, 5, 6, 7, 8, 9]
console.log(sideLen(5, 12)) // [8, 9, 10, 11, 12, 14, 15, 16]
console.log(sideLen(8, 10)) // [3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], "[6, 8, 10] is a right triangle"