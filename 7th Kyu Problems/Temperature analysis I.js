/* Temperature analysis I
You were given a string of integer temperature values. 
Create a function lowest_temp(t) and return the lowest value or 
None/null/Nothing if the string is empty.
*/

const lowestTemp = t => t.length ? Math.min(...t.split(' ')) : null;

console.log(lowestTemp('')) // null
console.log(lowestTemp('-1 50 -4 20 22 -7 0 10 -8')) // -8
console.log(lowestTemp('18 27 -42 16 17 -43 36 45 -25 -24 19 -14')) // -43