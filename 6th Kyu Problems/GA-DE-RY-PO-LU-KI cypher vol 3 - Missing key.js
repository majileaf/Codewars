/* GA-DE-RY-PO-LU-KI cypher vol 3 - Missing key
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
Our scouts had party yesterday and they had too much milk and cookies. As the result all of them forgot the key. 
Your task is to help scouts to find the key that they used for encryption. Fortunately they have some messages 
that are already encoded.

Input
The function accepts has two arrays.
The messages string array consists of lowercase characters and whitespace characters. 
The strings on the messages array are scout's messages before encryption.
The secrets string array consists of lowercase characters and whitespace characters. 
The strings on the secrets array are scout's messages after encryption.

Output
Return string should consists of lowercase characters only. 
The pairs of substitution should be ordered by the first letter of substitution. 
The letters in each pair should be in alphabetic order.

ga => incorrect output (error: g is after a )
ag => correct output  
deag => incorrect output  (error: de is after ag)
agde => correct output  

Example
 var messages = [ "dance on the table", "hide my beers", "scouts rocks" ];
 var secrets =  [ "egncd pn thd tgbud" ,"hked mr bddys" ,"scplts ypcis" ];
 findTheKey(messages, secrets);   //=> agdeikluopry
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

console.log(findTheKey(["dance on the table", "hide my beers", "scouts rocks"], ["egncd pn thd tgbud" ,"hked mr bddys" ,"scplts ypcis"])) // "agdeikluopry"