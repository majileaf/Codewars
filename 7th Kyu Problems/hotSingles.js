/* noobCode 04: HOT SINGLES...compare two arrays, return the unpaired items !
Write a function that takes two array arguments, and returns a new array populated with the elements that 
appear in either array, but not in both. Elements should only appear once in the returned array.

The order of the elements in the result should follow what appears in the first array, then the second one.

Examples
[1, 2, 3, 3], [3, 2, 1, 4, 5] --> [4, 5]
["tartar", "blanket", "cinnamon"], ["cinnamon", "blanket", "domino"] --> ["tartar", "domino"]
[77, "ciao"], [78, 42, "ciao"] --> [77, 78, 42]
[1, 2, 3, 3], [3, 2, 1, 4, 5, 4] --> [4,5]
[1, 2, 3] , [3, 3, 2, 1] --> []
*/

const hotSingles = (arr1, arr2) => [...new Set([...arr1, ...arr2])].filter(e => !arr1.includes(e) || !arr2.includes(e));

console.log(hotSingles([1, 2, 3, 3], [3, 2, 1, 4, 5])) // [4,5]
console.log(hotSingles(["tartar", "blanket", "domino"], ["blanket"])) // ["tartar", "domino"]
console.log(hotSingles([77, "basketweave"], [78, 42, "basketweave"])) // [77, 78, 42]
console.log(hotSingles([100, 45, "ciao"], [100, 2, 3, 45, 5])) // ["ciao", 2, 3, 5]
console.log(hotSingles([10, 200, 30], [10, 20, 3, 4, 5, 200])) // [30, 20, 3, 4, 5]
console.log(hotSingles([1, 2, 3], [3, 3, 2, 1])) // []
console.log(hotSingles([], [])) // []
console.log(hotSingles([1, 2, 3, 3], [])) // [1, 2, 3]