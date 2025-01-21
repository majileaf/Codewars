/* Repeated Substring
For a given nonempty string s find a minimum substring t and the maximum number k, such that the entire string s 
is equal to t repeated k times.

The input string consists of lowercase latin letters.

Your function should return :
a tuple (t, k) (in Python)
an array [t, k] (in Ruby and JavaScript)
in C, return k and write to the string t passed in parameter

Examples:
"ababab" ---> (t = "ab", k = 3)
"abcde" ---> (t = "abcde", k = 1)
because for this string, the minimum substring 't'
such that 's' is 'k' times 't', is 's' itself.
*/

const f = s => {
  const len = [...Array(s.length).keys()].slice(1).find(e => s.slice(0, e).repeat(s.length / s.slice(0, e).length) === s) || s.length;
  return [s.slice(0, len), s.length / len];
}

console.log(f("ababab")) // ["ab", 3]
console.log(f("abcde")) // ["abcde", 1]