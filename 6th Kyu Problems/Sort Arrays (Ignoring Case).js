/* Sort Arrays (Ignoring Case)
Sort the given array of strings in alphabetical order, case insensitive. For example:

["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"]
*/

// input: names - unsorted strings
// output: case-agnostic sort
const sortme = names => names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

console.log(sortme(["Hello","there","I'm","fine"])) // ["fine", "Hello", "I'm", "there"]
console.log(sortme(["C", "d", "a", "B"])) // ["a", "B", "C", "d"]
console.log(sortme(["CodeWars"])) // ["CodeWars"]
console.log(sortme([])) // []

console.log(sortme(["young","able","Own","Feel","Own","feel","Or","Will","day","And","Use","Have","Year"]))
// ["able","And","day","Feel","feel","Have","Or","Own","Own","Use","Will","Year","young"]