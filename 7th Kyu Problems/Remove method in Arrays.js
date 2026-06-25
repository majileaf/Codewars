/* Remove method in Arrays
Some people really wonder why JavaScript arrays don't have a remove function to remove an element.

Go ahead and make one.

var someArray = [1, 2, 3];
someArray.remove(1);

This should remove the element on index 1 making someArray = [1, 3]

You also need to handle invalid inputs: If index is not a number or out of bounds, return the array unchanged.
*/

Array.prototype.remove = function(index) {
    if (Number.isInteger(index) && index >= 0 && index < this.length) this.splice(index, 1);
    return this;
};

console.log([1,2,3].remove(1)) // [1,3]
console.log([1,2,3].remove("a")) // [1,2,3]
console.log([1,2,3].remove(-1)) // [1,2,3]