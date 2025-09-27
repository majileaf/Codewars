/* Shorten Me: Array Declaration IX (Variable Types)

Task
You have to write an array() function returning an array object with elements as follow:
[ 'array', 'boolean', 'function', 'number', 'object', 'string', 'undefined' ]

Coding Limitation:
Less than 60 characters
*/

array=_=>['array',...[!0,Set,0,{},'',_].map(e=>typeof e)]

console.log(array()) // [ 'array', 'boolean', 'function', 'number', 'object', 'string', 'undefined' ]