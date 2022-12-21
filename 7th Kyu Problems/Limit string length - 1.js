/* Limit string length - 1
The function must return the truncated version of the given string 
up to the given limit followed by "..." if the result is shorter 
than the original. Return the same string if nothing was truncated.

Example:
solution('Testing String', 3) --> 'Tes...'
solution('Testing String', 8) --> 'Testing ...'
solution('Test', 8)           --> 'Test'
*/

const solution = (string, limit) => string.slice(0, limit) + (limit >= string.length ? "" : '...');

console.log(solution('Testing String', 3)) // 'Tes...'
console.log(solution('Testing String', 8)) // 'Testing ...'
console.log(solution('Test', 8)) // 'Test'