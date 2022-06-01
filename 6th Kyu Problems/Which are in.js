/* Which are in?
Given two arrays of strings a1 and a2 return a sorted array r in lexicographical 
order of the strings of a1 which are substrings of strings of a2.

Example 1:
a1 = ["arp", "live", "strong"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
returns ["arp", "live", "strong"]

Example 2:
a1 = ["tarp", "mice", "bull"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
returns []

Notes:
Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
Beware: r must be without duplicates.
*/

const inArray = (array1, array2) => [...new Set(array1)].filter(e1 => array2.some(e2 => e2.includes(e1))).sort();

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

console.log(inArray(["xyz", "live", "strong"], a2)) // ["live", "strong"]
console.log(inArray(["live", "strong", "arp"], a2)) // ["arp", "live", "strong"]
console.log(inArray(["tarp", "mice", "bull"], a2)) // []