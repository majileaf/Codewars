/* Most valuable character
In this Kata, you will be given a string and your task is to return the most valuable character. 
The value of a character is the difference between the index of its last occurrence and the 
index of its first occurrence. Return the character that has the highest value. 

If there is a tie, return the alphabetically lowest character. [For Golang return rune]

All inputs will be lower case.

For example:
solve('a') = 'a'
solve('ab') = 'a'. Last occurrence is equal to first occurrence of each character. Return lexicographically lowest.
solve("axyzxyz") = 'x'
*/

const solve = st => {
   const count = {};
   st = [...st];
   for (let i = 0; i < st.length; i++) {
       count[st[i]] = st.lastIndexOf(st[i]) - st.indexOf(st[i]);
   }
   return Object.keys(count).sort((a, b) => count[b] - count[a] || a.localeCompare(b))[0];
}

console.log(solve('a')) // 'a'
console.log(solve('aa')) // 'a'
console.log(solve('bcd')) // 'b'
console.log(solve('axyzxyz')) // 'x'
console.log(solve('aabccc')) // 'c'