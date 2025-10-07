/* Implementing Array.prototype.groupBy method
Add a groupBy method to Array.prototype so that elements in an array could be grouped by the result of evaluating 
a function on each element.

The method should return an object, in which for each different value returned by the function there is a property 
whose value is the array of elements that return the same value.

If no function is passed, the element itself should be taken.

Example:
[1,2,3,2,4,1,5,1,6].groupBy()
{
  1: [1, 1, 1],
  2: [2, 2],
  3: [3],
  4: [4],
  5: [5],
  6: [6]
}

[1,2,3,2,4,1,5,1,6].groupBy(function(val) { return val % 3;} )
{
  0: [3, 6],
  1: [1, 4, 1, 1],
  2: [2, 2, 5]
}
*/

Object.defineProperty(
    Array.prototype,
    'groupBy',
    {value:
        function groupBy(hashFunc = function(n) {return n}) {
            const res = {};
            for (let item of this) {
                let hash = hashFunc(item);
                if (!res[hash]) res[hash] = [];
                res[hash].push(item);
            }
            return res;
        }
    }
);

console.log(([1,2,3,2,4,1,5,1,6]).groupBy()) // {1:[1,1,1],2:[2,2],3:[3],4:[4],5:[5],6:[6]});
console.log(([1,2,3,2,4,1,5,1,6]).groupBy()) // {0:[3,6],1:[1,4,1,1],2:[2,2,5]}, function mod3(n) {return n % 3;});
console.log((['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']).groupBy()) 
// {3:["one","two","six","ten"],4:["four","five","nine"],5:["three","seven","eight"]}, function getLength(xs) { return xs.length; });