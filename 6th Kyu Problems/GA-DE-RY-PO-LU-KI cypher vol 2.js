/* GA-DE-RY-PO-LU-KI cypher vol 2
Introduction
The GADERYPOLUKI is a simple substitution cypher used in scouting to encrypt messages. 
The encryption is based on short, easy to remember key. The key is written as paired letters, 
which are in the cipher simple replacement.

The most frequently used key is "GA-DE-RY-PO-LU-KI".
 G => A
 g => a
 a => g
 A => G
 D => E
  etc.

The letters, which are not on the list of substitutes, stays in the encrypted text without changes.

Other keys often used by Scouts:
PO-LI-TY-KA-RE-NU
KA-CE-MI-NU-TO-WY
KO-NI-EC-MA-TU-RY
ZA-RE-WY-BU-HO-KI
BA-WO-LE-TY-KI-JU
RE-GU-LA-MI-NO-WY

Task
Your task is to help scouts to encrypt and decrypt thier messages. Write the Encode and Decode functions.

Input/Output
The function should have two parameters.
The message input string consists of lowercase and uperrcase characters and whitespace character.
The key input string consists of only lowercase characters.
The substitution has to be case-sensitive.

Example
 encode("ABCD", "agedyropulik");             // => GBCE 
 encode("Ala has a cat", "gaderypoluki");    // => Gug hgs g cgt 
 decode("Dkucr pu yhr ykbir","politykarenu") // => Dance on the table
 decode("Hmdr nge brres","regulaminowy")  // => Hide our beers
*/

const createDict = key => {
    const map = {};
    key.match(/../g).map(e => e.split('')).forEach(([l1, l2]) => (
            map[l1] = l2, 
            map[l2] = l1, 
            map[l1.toUpperCase()] = l2.toUpperCase(),
            map[l2.toUpperCase()] = l1.toUpperCase()));
    return map;
}

const encode = (str, key) => {
    const dict = createDict(key);
    return str.replace(/./g, char => dict[char] || char);
}

const decode = encode;

console.log(encode("Ala has a cat", "gaderypoluki")) // 'Gug hgs g cgt'
console.log(decode("Gug hgs g cgt", "gaderypoluki")) // "Ala has a cat"
console.log(encode("ABCD", "gaderypoluki")) // "GBCE"
console.log(encode("Dkucr pu yhr ykbir","politykarenu")) // "Dance on the table"
console.log(decode("agedyropulik", "gaderypoluki")) // "gaderypoluki"
console.log(decode("Hmdr nge brres","regulaminowy")) // "Hide our beers"