/* Simple Fun #30: Strings Construction
Task
How many strings equal to A can be constructed using letters from the string B? 
Each letter can be used only once and in one string only.

Example
For A = "abc" and B = "abccba", the output should be 2.

We can construct 2 strings A with letters from B.

Input/Output
[input] string A
String to construct, A contains only lowercase English letters.
Constraints: 3 ≤ A.length ≤ 9.
[input] string B
String containing needed letters, B contains only lowercase English letters.
Constraints: 3 ≤ B.length ≤ 50.
[output] an integer
*/

const stringsConstruction = (A, B) => {
    const countB = [...B].reduce((sum, n) => (sum[n] = (sum[n] || 0) + 1, sum), {});
    const countA = [...A].reduce((sum, n) => (sum[n] = (sum[n] || 0) + 1, sum), {});
    let count = 0;
    
    const check = (countA, countB) => Object.keys(countA).every(e => {
        if (countB[e] >= countA[e]) {
          countB[e] = countB[e] - countA[e];
          return true;
        } else {
          return false;
        }
    });

    while (check(countA, countB)) {
        count++;
    }

    return count;
}

console.log(stringsConstruction("abc","abccba")) // 2
console.log(stringsConstruction("hnccv","hncvohcjhdfnhonxddcocjncchnvohchnjohcvnhjdhihsn")) // 3
console.log(stringsConstruction("abc","def")) // 0
console.log(stringsConstruction("zzz","zzzzzzzzzzz")) // 3