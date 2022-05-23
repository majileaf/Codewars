/* Strings Mix
Given two strings s1 and s2, we want to visualize how different the two strings are. 
We will only take into account the lowercase letters (a to z). First let us count the 
frequency of each lowercase letters in s1 and s2.

s1 = "A aaaa bb c"
s2 = "& aaa bbb c d"

s1 has 4 'a', 2 'b', 1 'c'
s2 has 3 'a', 3 'b', 1 'c', 1 'd'

So the maximum for 'a' in s1 and s2 is 4 from s1; the maximum for 'b' is 3 from s2. 
In the following we will not consider letters when the maximum of their occurrences 
is less than or equal to 1.

We can resume the differences between s1 and s2 in the following string: "1:aaaa/2:bbb" 
where 1 in 1:aaaa stands for string s1 and aaaa because the maximum for a is 4. In the 
same manner 2:bbb stands for string s2 and bbb because the maximum for b is 3.

The task is to produce a string in which each lowercase letters of s1 or s2 appears as 
many times as its maximum if this maximum is strictly greater than 1; these letters will 
be prefixed by the number of the string where they appear with their maximum value and :. 
If the maximum is in s1 as well as in s2 the prefix is =:.

In the result, substrings (a substring is for example 2:nnnnn or 1:hhh; it contains the 
prefix) will be in decreasing order of their length and when they have the same length 
sorted in ascending lexicographic order (letters and digits - more precisely sorted by 
codepoint); the different groups will be separated by '/'. See examples and "Example Tests".

Hopefully other examples can make this clearer.

s1 = "my&friend&Paul has heavy hats! &"
s2 = "my friend John has many many friends &"
mix(s1, s2) --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
mix(s1, s2) --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1="Are the kids at home? aaaaa fffff"
s2="Yes they are here! aaaaa fffff"
mix(s1, s2) --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"
Note for Swift, R, PowerShell
The prefix =: is replaced by E:

s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
mix(s1, s2) --> "1:mmmmmm/E:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/E:ee/E:ss"
*/
// initial solution:
// const count = str => str.split('').reduce((sum, n) => {
//     if (n >= 'a' && n < 'z') sum[n] ? sum[n]++ : sum[n] = 1;
//     return sum;
// }, {})

// const mix = (s1, s2) => {
//     // count all valid letter occurences
//     const obj1 = count(s1);
//     const obj2 = count(s2);

//     // create array of obj1 + obj2, filter out duplicates and occurrences less than 2
//     const allLetters = new Set(Object.keys(obj1).concat(Object.keys(obj2)));
//     let arr = [];

//     for (const key of allLetters) {
//         if (obj1[key] > 1 || obj2[key] > 1) {
//             if (obj1[key] > obj2[key]) {
//                 arr.push({'prefix': 1, 'letter': [key][0], 'count': obj1[key]}) 
//             } else if (obj1[key] < obj2[key]) {
//                 arr.push({'prefix': 2, 'letter': [key][0], 'count': obj2[key]}) 
//             } else if (obj1[key] === obj2[key]) {
//                 arr.push({'prefix': 3, 'letter': [key][0], 'count': obj1[key]}) 
//             } else if (obj1[key]) {
//                 arr.push({'prefix': 1, 'letter': [key][0], 'count': obj1[key]}) 
//             } else if (obj2[key]) {
//                 arr.push({'prefix': 2, 'letter': [key][0], 'count': obj2[key]}) 
//             }
//         }
//     }

//     // sort by frequency > prefix ("1" > "2" > "=") > character alphabetically
//     arr.sort((a, b) => {
//         if (b.count > a.count) {
//             return 1;
//         } else if (b.count < a.count) {
//             return -1;
//         } else {
//             if (b.prefix > a.prefix) {
//                 return -1;
//             } else if (b.prefix < a.prefix) {
//                 return 1;
//             } else {
//                 if (b.letter > a.letter) {
//                     return -1;
//                 } else if (b.letter < a.letter) {
//                     return 1;
//                 } else {
//                     return 0;
//                 }
//             }
//         }
//     });

//     // create string
//     let strArr = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].prefix === 3) arr[i].prefix = '=';
//         strArr.push(`${arr[i].prefix}:${arr[i].letter.repeat(arr[i].count)}`);
//     }
//     return strArr.join('/');
// }

///////////////////////////////////////////////////////////////////////////

// shortened
// const count = str =>
//   str.split('').reduce((sum, n) => {
//     if (n >= 'a' && n < 'z') sum[n] ? sum[n]++ : (sum[n] = 1);
//     return sum;
//   }, {});

// const mix = (s1, s2) => {
//   // count all valid letter occurences
//   const obj1 = count(s1);
//   const obj2 = count(s2);

//   // create array of obj1 + obj2, filter out duplicates and occurrences less than 2
//   const allLetters = new Set(Object.keys(obj1).filter(e => obj1[e] > 1).concat(Object.keys(obj2).filter(e => obj2[e] > 1)));

//   let arr = [];
//   for (const key of allLetters) {
//     arr.push({prefix: (obj1[key] === obj2[key] ? 3 : obj1[key] > (obj2[key] || 0) ? 1 : 2), letter: [key][0], count: obj1[key] > (obj2[key] || 0) ? obj1[key] : obj2[key]})
//   }

//   // sort by frequency > prefix ("1" > "2" > "=") > character alphabetically
//   arr.sort((a, b) => b.count - a.count || a.prefix - b.prefix || a.letter.localeCompare(b.letter));

//   // create string
//   return arr.map(e => `${(e.prefix === 3) ? e.prefix = '=' : e.prefix}:${e.letter.repeat(e.count)}`).join('/');
// };

///////////////////////////////////////////////////////////////////////////

// should probably stop here:
const count = str =>
  str.split('').reduce((sum, n) => {
    if (n >= 'a' && n < 'z') sum[n] ? sum[n]++ : (sum[n] = 1);
    return sum;
  }, {});

const mix = (s1, s2) => {
  const obj1 = count(s1);
  const obj2 = count(s2);
  
  return [...new Set(Object.keys(obj1).filter(e => obj1[e] > 1).concat(Object.keys(obj2).filter(e => obj2[e] > 1)))]
    .map(key => ({prefix: (obj1[key] === obj2[key] ? 3 : obj1[key] > (obj2[key] || 0) ? 1 : 2), letter: [key][0], count: obj1[key] > (obj2[key] || 0) ? obj1[key] : obj2[key]}))
    .sort((a, b) => b.count - a.count || a.prefix - b.prefix || a.letter.localeCompare(b.letter))
    .map(e => `${(e.prefix === 3) ? e.prefix = '=' : e.prefix}:${e.letter.repeat(e.count)}`)
    .join('/');
};

s1 = "my&friend&Paul has heavy hats! &"
s2 = "my friend John has many many friends &"
console.log(mix(s1, s2)); // "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
console.log(mix(s1, s2)); // "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1 = "Are the kids at home? aaaaa fffff"
s2 = "Yes they are here! aaaaa fffff"
console.log(mix(s1, s2)); // "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"