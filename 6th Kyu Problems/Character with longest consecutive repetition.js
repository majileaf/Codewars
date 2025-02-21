/* Character with longest consecutive repetition
For a given string s find the character c (or C) with longest consecutive repetition and return:

[c, l]

where l (or L) is the length of the repetition. If there are two or more characters with the 
same l return the first in order of appearance.

For empty string return:
["", 0]
*/

const longestRepetition = s => {
  const found = (s.match(/(.)\1*/g) || []).sort((a, b) => b.length - a.length)[0] || '';
  return [found[0] || '', found.length];
}

console.log(longestRepetition("aaaabb")     ) // ["a",4]
console.log(longestRepetition("bbbaaabaaaa")) // ["a",4]
console.log(longestRepetition("cbdeuuu900") ) // ["u",3]
console.log(longestRepetition("abbbbb")     ) // ["b",5]
console.log(longestRepetition("aabb")       ) // ["a",2]
console.log(longestRepetition("")           ) // ["",0]
console.log(longestRepetition("ba")         ) // ["b",1]