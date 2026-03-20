/* replaceAll(input, find, replace)
Isn't it annoying how "string".replace("find", "replace"); only replaces the first match of the find string? 
Write a function, replaceAll(input, find, replace); that will replace all matches of the given find string 
with the given replace string.

The function will always be called with three strings, so don't worry about validating the arguments.

As with the original "string".replace(find, replace), if find is an empty string, it should match 
in-between each character, effectively inserting replace in-between each character, including the start and 
end of the string. I've given you some tests for this to make it a little clearer.
*/

const replaceAll = (input, find, replace) => input.replace(new RegExp(`${find}`.split('').map(e => /[^\w]/.test(e) ? '\\' + e : e).join(''), 'g'), replace);

console.log(replaceAll("string-string", "ing", "!")) // "str!-str!", "Matches found"
console.log(replaceAll("", "", "-")) // "-", "Empty input, empty find"
console.log(replaceAll("1", "", "-")) // "-1-", "Single-character input, empty find"
console.log(replaceAll("123", "", "-")) // "-1-2-3-", "Empty string as find"