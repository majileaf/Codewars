/* GA-DE-RY-PO-LU-KI cypher vol 4 - Missing key madness
Introduction
The GADERYPOLUKI is a simple substitution cypher used in scouting to encrypt messages. 
The encryption is based on short, easy to remember key. The key is written as paired letters, 
which are in the cipher simple replacement.

The most frequently used key is "GA-DE-RY-PO-LU-KI".
 g => a
 a => g
 d => e
 e => d
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
Our scouts had party yestarday and they had too much milk and cookies. As the result all of them forgot the key. 
Your task is to help scouts to find the key that they used for encryption. Fortunately they have some messages 
that are already encoded. However they like order and cleanup. So they sorted all messages and encrytpted messages 
in alphabethic order. But... it means they do not know what encrypts to what...
Help the scouts to find their key.

Input
The function accepts two arrays.
The messages string array consists of lowercase characters. The strings on the messages array are scout's messages before encrytption.
The secrets string array consists of lowercase characters.
The strings on the secrets array are scout's messages after encrytption.
All strings in the messages and secrets have the same lenght (up to 20 characters).
The number of elements in the messages and secrets is equal and less than 6.
Every string from messages array after encoding is equal to one of elements in the secrets array (i.e. the 1st string from messages array
afer encoding is equal to 5th string in the secrets array, the 2nd string from messages array afer encoding is equal to 3th string in the 
secrets array, etc.).

Output
Return string should consists of lowercase characters only. The pairs of substitution should be ordered by the first letter 
of substitution. The letters in each pair should be in alphabethic order.

ga => incorret output (error: g is after a )
ag => correct output  
deag => incorrect output  (error: de is after ag)
agde => correct output  

Example
 var messages = [ "dance", "level", "right", "yours" ];
 var secrets =  [ "dkucr", "elghy", "irvri", "tpnes" ];
 searchForKey(messages, secrets);   //=> akerilnuopty
 
// because akerilnuopty can encode all secrets:
// messages[0] = encode( secrets[0], "akerilnuopty")
// messages[1] = encode( secrets[2], "akerilnuopty")
// messages[2] = encode( secrets[1], "akerilnuopty")
// messages[3] = encode( secrets[3], "akerilnuopty")

Suggestion
The key will have 12 letters. The brutal force may not work. 12 letters give us 4 626 053 752 320 000 combinations.
The performance of your solution may be the key to pass the kata. There will be 100 random tests to check your solution.
Try to solve the ohter katas from GADERYPOLUKI collection first. It will be easier for you to solve this kata.
*/

const findTheKey = (messages , secrets) => {
  const dict = {};
  for (let i = 0; i < messages.length; i++) {
      for (let j = 0; j < messages[i].length; j++) {
          if (messages[i][j] !== secrets[i][j] && dict[secrets[i][j]] !== messages[i][j]) dict[messages[i][j]] = secrets[i][j];
      }
  }
  return Object.keys(dict).map(e => [e, dict[e]].sort().join('')).sort().join('');
}

const permute = permutation => {
  let length = permutation.length,
    result = [permutation.slice()],
    c = new Array(length).fill(0),
    i = 1,
    k,
    p;

  while (i < length) {
    if (c[i] < i) {
      k = i % 2 && c[i];
      p = permutation[i];
      permutation[i] = permutation[k];
      permutation[k] = p;
      ++c[i];
      i = 1;
      result.push(permutation.slice());
    } else {
      c[i] = 0;
      ++i;
    }
  }
  return result;
}

const searchForKey = (mes, sec) => permute(sec).map(secs => findTheKey(mes, secs)).filter(key => key.length === 12)[0];

console.log(searchForKey(["dance", "level", "right", "yours"], ["tpnes", "irvri", "dkucr", "elghy"])) // "akerilnuopty"