/* Heron's formula
Write function heron which calculates the area of a triangle with sides a, b, and c 
(x, y, z in COBOL).

Heron's formula:
SQRT(s∗(s−a)∗(s−b)∗(s−c))

where
s = (a+b+c) / 2
​
Output should have 2 digits precision.
*/

const heron = (a, b, c) => {
  const s = (a + b + c) / 2;
  return +Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(2);
}

console.log(heron(3, 4, 5)) // 6
console.log(heron(6, 8, 10)) // 24