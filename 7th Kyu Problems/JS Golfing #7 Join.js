/* JS Golfing #7: Join
Task:
Return an array as string with no more than 13 characters. The delimiter should be an empty string, e.g. [123, "456"] 
should be stringified into "123456"

Note that: undefined and null are shown as empty string.
*/

// x=a=>a.join('')
x=a=>a.join``

console.log(x([1,2,3,4,5])) // '12345'
console.log(x(['a','b','c','d'])) // 'abcd'
console.log(x(['1','2'])) // '12'
console.log(x([undefined,null])) // ''