/* Name Array Capping
Create a method that accepts an array of names, and returns an array of each 
name with its first letter capitalized.

example
capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']
*/

const capMe = names => names.map(e => e[0].toUpperCase() + e.slice(1).toLowerCase());

console.log(capMe(['jo', 'nelson', 'jurie'])) // returns ['Jo', 'Nelson', 'Jurie']
console.log(capMe(['KARLY', 'DANIEL', 'KELSEY'])) // returns ['Karly', 'Daniel', 'Kelsey']