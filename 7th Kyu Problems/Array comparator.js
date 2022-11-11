/* Array comparator
You have two arrays in this kata, every array contains unique elements only. 
Your task is to calculate number of elements in the first array which are also 
present in the second array.
*/

const matchArrays = (v, r) => v.filter(e => r.includes(e)).length;

console.log(matchArrays(['Perl','Closure','JavaScript'], ['Go', 'C++','Erlang'])) // 0
console.log(matchArrays(['incapsulation','OOP','array'], ['time', 'propert','paralelism','OOP'])) // 1
console.log(matchArrays([1,2,3,4,5], [2,3,4,5,6])) // 4