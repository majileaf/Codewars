/* Simple Substitution Cipher Helper
A simple substitution cipher replaces one character from an alphabet with a character from an alternate alphabet, 
where each character's position in an alphabet is mapped to the alternate alphabet for encoding or decoding.

E.g.
const abc1 = "abcdefghijklmnopqrstuvwxyz";
const abc2 = "etaoinshrdlucmfwypvbgkjqxz";
   
const sub = new SubstitutionCipher(abc1, abc2);
sub.encode("abc") // => "eta"
sub.encode("xyz") // => "qxz"
sub.encode("aeiou") // => "eirfg"
   
sub.decode("eta") // => "abc"
sub.decode("qxz") // => "xyz"
sub.decode("eirfg") // => "aeiou"

If a character provided is not in the opposing alphabet, simply leave it as be.
*/

class SubstitutionCipher {
    constructor(abc1, abc2) {
        this.abc1 = abc1;
        this.abc2 = abc2;
    }

    encode(plaintext) {
        return [...plaintext].map(letter => this.abc2[this.abc1.indexOf(letter)] || letter).join('');
    }

    decode(ciphertext) {
        return [...ciphertext].map(letter => this.abc1[this.abc2.indexOf(letter)] || letter).join('');
    }
}

// should encode and decode using first cipher
let abc1 = "abcdefghijklmnopqrstuvwxyz";
let abc2 = "etaoinshrdlucmfwypvbgkjqxz";
let sub = new SubstitutionCipher(abc1, abc2);
console.log(sub.encode("abc")) // "eta"
console.log(sub.encode("xyz")) // "qxz"
console.log(sub.encode("aeiou")) // "eirfg"
console.log(sub.decode("eta")) // "abc"
console.log(sub.decode("qxz")) // "xyz"
console.log(sub.decode("eirfg")) // "aeiou"

// should encode and decode using second cipher
abc1 = "abcdefghijklmnopqrstuvwxyz";
abc2 = 'tfozcivbsjhengarudlkpwqxmy';
sub = new SubstitutionCipher(abc1, abc2);
console.log(sub.encode('abc')) // 'tfo'
console.log(sub.decode('tfo')) // 'abc'
console.log(sub.encode('tjuukf')) // 'kjpphi'
console.log(sub.decode('kjpphi')) // 'tjuukf'
console.log(sub.decode('tjuukf')) // 'ajqqtb'
console.log(sub.encode('ajqqtb')) // 'tjuukf'

// should encode and decode with non-alpha characters
abc1 = "abcdefghijklmnopqrstuvwxyz";
abc2 = 'tfozcivbsjhengarudlkpwqxmy';
sub = new SubstitutionCipher(abc1, abc2);
console.log(sub.encode('a_bc&*83')) // 't_fo&*83'
console.log(sub.decode('t_fo*&83')) // 'a_bc*&83'