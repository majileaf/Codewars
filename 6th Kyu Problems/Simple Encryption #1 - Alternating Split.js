/*
Implement a pseudo-encryption algorithm which given a string S and 
an integer N concatenates all the odd-indexed characters of S with 
all the even-indexed characters of S, this process should be 
repeated N times.

Examples:
encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
Together with the encryption function, you should also implement a 
decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive, 
return the first argument without changes.
*/

const getEven = str => str.split('').filter((_, i) => i % 2 === 0).join('');
const getOdd = str => str.split('').filter((_, i) => i % 2 !== 0).join('');

const encrypt = (text, n) => {
    if (text === '' || n <= 0 || text === null) return text;

    for (let i = 0; i < n; i++) {
        text = getOdd(text).concat(getEven(text));
    }   
    return text;
}

const processing = str => {
    let arr = [...Array(str.length)];
    let i = 0;
    str = str.split('');
    const pos = str.length - (str.length % 2 === 0 ? 2 : 1);

    while (str.length !== 0) {
        if (i % 2 !== 0) {
            arr[i] = str[0];
            str.shift();
        } else if (i % 2 === 0) {
            arr[pos - i] = str[str.length - 1];
            str.pop();
        } 
        i++;
    } 
    return arr.join('');
}

const decrypt = (encryptedText, n) => {
    if (encryptedText === '' || n <= 0 || encryptedText === null) return encryptedText;  
    for (let i = 0; i < n; i++) {
        encryptedText = processing(encryptedText);
    }   
    return encryptedText;    
}

console.log(encrypt("This is a test!", 0)) // "This is a test!"
console.log(encrypt("This is a test!", 1)) // "hsi  etTi sats!"
console.log(encrypt("This is a test!", 2)) // "s eT ashi tist!"
console.log(encrypt("This is a test!", 3)) // " Tah itse sits!"
console.log(encrypt("This is a test!", 4)) // "This is a test!"
console.log(encrypt("This is a test!", -1)) // "This is a test!"
console.log(encrypt("This kata is very interesting!", 1)) // "hskt svr neetn!Ti aai eyitrsig"

console.log(decrypt("This is a test!", 0)) // "This is a test!"
console.log(decrypt("hsi  etTi sats!", 1)) // "This is a test!"
console.log(decrypt("s eT ashi tist!", 2)) // "This is a test!"
console.log(decrypt(" Tah itse sits!", 3)) // "This is a test!"
console.log(decrypt("This is a test!", 4)) // "This is a test!"
console.log(decrypt("This is a test!", -1)) // "This is a test!"
console.log(decrypt("hskt svr neetn!Ti aai eyitrsig", 1)) // "This kata is very interesting!"

console.log(encrypt("", 0)) // ""
console.log(decrypt("", 0)) // ""
console.log(encrypt(null, 0)) // null
console.log(decrypt(null, 0)) // null