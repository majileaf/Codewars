/* The Speed of Letters
Given a string as input, return a new string with each letter pushed to the right by its respective index in the alphabet.

We all know that A is a slow and Z is a fast letter. This means that Z gets shifted to the right by 25 spaces, 
A doesn't get shifted at all, and B gets shifted by 1 space.

You can assume the following things about your input:
    It will only contain uppercase letters from A to Z, no whitespaces or punctuation;
    Input strings will not exceed 100 characters (although your output string might!)

Note that if 2 or more letters fall onto the same space after shifting, the latest character will be used. 
For example: "BA" -> " A"

Examples
"AZ"   -->  "A                         Z"
"ABC"  -->  "A B C"
"ACE"  -->  "A  C  E"
"CBA"  -->  "  A"
"HELLOWORLD"  -->  "     E H    DLL   OLO   R  W"
*/

const speedify = input => {
    const arr = []

    for (let i = 0; i < input.length; i++) {
        arr[i + input[i].charCodeAt() - 65] = input[i];
    }

    for (let j = 0; j < arr.length; j++) {
        if (!arr[j]) arr[j] = ' ';
    }
    return arr.join('');
}

console.log(speedify("AZ")) // "A                         Z"
console.log(speedify("ABC")) // "A B C"
console.log(speedify("ACE")) // "A  C  E"
console.log(speedify("CBA")) // "  A"
console.log(speedify("HELLOWORLD")) // "     E H    DLL   OLO   R  W