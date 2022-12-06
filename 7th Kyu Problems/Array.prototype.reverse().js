/* Array.prototype.reverse()
The Array's reverse() method has gone missing! Re-write it, quick-sharp!

When this method is called, it reverses the order of the items in the original array. 
Then then it returns that same, original array. No new arrays should need to be created 
to pass this kata.

Here's an example:
var input = [1, 2, 3, 4];
input.reverse(); // == [4, 3, 2, 1]  // returned by .reverse()
input;           // == [4, 3, 2, 1]  // items reordered in the original array
*/

Array.prototype.reverse = function() {
  let copy; 
  for (let i = 0; i < this.length / 2; i++) {
      copy = this[i];
      this[i] = this[this.length - 1 - i];
      this[this.length - 1 - i] = copy;
  }
  return this;
}

console.log([1, 2, 3, 4].reverse()) // [4,3,2,1]
console.log(["a", "b", "c"].reverse()) // ["c", "b", "a"]