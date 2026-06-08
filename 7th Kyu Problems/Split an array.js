/* Split an array
Split an array of objects into 2 arrays based on truthiness of a provided property. 
The return value should be an array whose first element is an array of the truthy values, 
and whose second element is an array of the falsey values.

Javascript example:
var obj1 = { prop: true },
    obj2 = { prop: false };
    
split([obj1, obj2], 'prop');
// [[obj1], [obj2]]

CoffeeScript example:
obj1 = { prop: true }
obj2 = { prop: false }

split [obj1, obj2], 'prop'
# [[obj1], [obj2]]
*/

const split = (arr, prop) => [arr.filter(e => e[prop]), arr.filter(e => !e[prop])];

const obj1 = { prop: true }, obj2 = { prop: false }; 
const values = split([obj1, obj2], 'prop');

console.log(values) // [[obj1], [obj2]]
console.log(values[0].length) // 1, 'Should be one truthy value'
console.log(values[1].length) // 1, 'Should be one falsy value'
console.log(values[0][0]) // obj1, 'obj1 should be in truthy array'
console.log(values[1][0]) // obj2, 'obj2 should be in falsy array'

console.log(split([ { test: true }, { test: false }, { test: [] }, { test: 0 }, { test: 'great' } ]), 'prop') 
// [[], [ { test: true }, { test: false }, { test: [] }, { test: 0 }, { test: 'great' } ]]