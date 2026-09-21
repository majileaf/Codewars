/* Get array elements with specified keys
Create a function that lets people easily grab only the array elements with given keys.

For example:

var array = ['a', 'b', 'c', 'd', 'e'];
array2 = array.only([0, 3]);
// at this point array2 should be ['a', 'd']

Note: The order of the elements should be preserved in the resulting array.
*/

Array.prototype.only = function(keys) {
    return keys.sort((a, b) => a - b).map(e => this[e]);
}

console.log(['a', 'b', 'c', 'd', 'e'].only([0, 3])) // ['a', 'd']
console.log(['a', 'b', 'c', 'd', 'e'].only([1])) // ['b']
console.log(['a', 'b', 'c', 'd', 'e'].only([0,1,3,4])) // ['a', 'b', 'd', 'e']
console.log(['a', 'b', 'c', 'a', 'b'].only([0, 1, 3])) // ['a', 'b', 'a']
console.log(['a', 'b', 'c', 'a', 'b'].only([1, 2, 3, 4])) // ['b','c','a','b']