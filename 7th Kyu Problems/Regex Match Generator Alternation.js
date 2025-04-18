/* Regex Match Generator: Alternation
Intro
In regular expression, there is a meta-character called alternation, written as |. 
This meta-character behaves like an OR operator that matches either of the sides.

For example: abc|123 will match either "abc" or "123". They can also match empty string.

Task
Write a function called regexMatches(regex). Given a regex pattern, return a list of all possible matches.

Examples
let pattern1 = = /abc|123/
regexMatches(pattern1) # -> should output ["abc", "123"]

let pattern2 = = /abc|def|ghi/
regexMatches(pattern2) # -> should output ["abc", "def", "ghi"]

let pattern3 = = /1|2|3|4|5/
regexMatches(pattern3) # -> should output ["1", "2", "3", "4", "5"]

let pattern4 = = /a/
regexMatches(pattern3) # -> should output ["a"]

let pattern5 = = /|empty/
regexMatches(pattern3) # -> should output ["", "empty"]

Hint
You can use regex.source to get the string representation of the regex.

Input
The regex pattern will only consist of digits, lowercase letters, and the alternation meta-character |. The alternation can be at the very start or at the very end.
*/

const regexMatches = regex => regex.source.split('|');

console.log(regexMatches(/abc|123/)) // ["abc", "123"]
console.log(regexMatches(/abc|def|ghi/)) // ["abc", "def", "ghi"]
console.log(regexMatches(/1|2|3|4|5/)) // ["1", "2", "3", "4", "5"]
console.log(regexMatches(/a/)) // ["a"]
console.log(regexMatches(/|empty/)) // ["", "empty"]