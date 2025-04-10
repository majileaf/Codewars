/* Missing Alphabet
In this Kata you have to create a function,named insertMissingLetters,that takes in a string and 
outputs the same string processed in a particular way.

The function should insert only after the first occurrence of each character of the input string, 
all the alphabet letters that:

-are NOT in the original string
-come after the letter of the string you are processing

Each added letter should be in uppercase, the letters of the original string will always be in lowercase.

Example:
input: "holly"
missing letters: "a,b,c,d,e,f,g,i,j,k,m,n,p,q,r,s,t,u,v,w,x,z"
output: "hIJKMNPQRSTUVWXZoPQRSTUVWXZlMNPQRSTUVWXZlyZ"

You don't need to validate input, the input string will always contain a certain amount of lowercase letters (min 1 / max 50).

*/

const insertMissingLetters = str => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const uniqueStr = [...new Set(str)].join('');
    const regex = new RegExp(`[${uniqueStr}]`);
    const newAlphabet = [...alphabet].map(e => regex.test(e) ? '' : e);
    const count = [...uniqueStr].reduce((sum, n) => (sum[n] = (sum[n] || 0) + 1, sum), {});
    let newStr = '';

    for (let i = 0; i < str.length; i++) {
        if (count[str[i]]) {
            newStr += str[i] + newAlphabet.slice(alphabet.indexOf(str[i]) + 1).join('').toUpperCase();
            count[str[i]]--;
        } else {
            newStr += str[i];
        }
    }
    return newStr;
}

console.log(insertMissingLetters("hello")) // "hIJKMNPQRSTUVWXYZeFGIJKMNPQRSTUVWXYZlMNPQRSTUVWXYZloPQRSTUVWXYZ"
console.log(insertMissingLetters("holly")) // "hIJKMNPQRSTUVWXZoPQRSTUVWXZlMNPQRSTUVWXZlyZ"