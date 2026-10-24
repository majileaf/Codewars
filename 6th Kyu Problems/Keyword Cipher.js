/* Keyword Cipher
Third day at your new cryptoanalyst job and you come across your toughest assignment yet. 
Your job is to implement a simple keyword cipher. A keyword cipher is a type of monoalphabetic substitution 
where two parameters are provided as such (string, keyword). The string is encrypted by taking the keyword, 
dropping any letters that appear more than once. The rest of the letters of the alphabet that aren't used are 
then appended to the end of the keyword.

For example, if your string was "hello" and your keyword was "wednesday", your encryption key would be 
"wednsaybcfghijklmopqrtuvxz".

To encrypt "hello" you'd substitute as follows:
              abcdefghijklmnopqrstuvwxyz
  hello ==>   |||||||||||||||||||||||||| ==> bshhk
              wednsaybcfghijklmopqrtuvxz

"hello" encrypts into "bshhk" with the keyword "wednesday".

    If there are uppercase letters in the string, convert them to lowercase before encrypting them.
    If there are non-alphabetic characters in the string, leave them as-is in the result.
    The keyword will entirely consist of lowercase letters.

Good Luck.
*/

const keywordCipher = (string, keyword) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const cipher = [...new Set(keyword + alphabet)].join('');
    const encode = [...alphabet].reduce((sum, _, i) => (sum[alphabet[i]] = cipher[i], sum), {});
    return [...string.toLowerCase()].map(e => encode[e] || e).join('');
}

console.log(keywordCipher("Welcome home","secret")) // "wticljt dljt"
console.log(keywordCipher("hello","wednesday")) // "bshhk"
console.log(keywordCipher("HELLO","wednesday")) // "bshhk"
console.log(keywordCipher("HeLlO","wednesday")) // "bshhk"
console.log(keywordCipher("WELCOME HOME", "gridlocked")) // "wlfimhl kmhl"
console.log(keywordCipher("alpha bravo charlie", "delta")) // "djofd eqdvn lfdqjga"
console.log(keywordCipher("Home Base", "seven")) // "dlja esqa"
console.log(keywordCipher("basecamp", "covert")) // "ocprvcil"
console.log(keywordCipher("one two three", "rails")) // "mks twm tdpss"
console.log(keywordCipher("Test", "unbuntu")) // "raqr"