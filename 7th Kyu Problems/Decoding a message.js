/* Decoding a message
You have managed to intercept an important message and you are trying to read it.

You realise that the message has been encoded and can be decoded by switching each letter with a corresponding letter.

You also notice that each letter is paired with the letter that it coincides with when the alphabet is reversed.

For example: "a" is encoded with "z", "b" with "y", "c" with "x", etc

You read the first sentence:

"r slkv mlylwb wvxlwvh gsrh nvhhztv"

After a few minutes you manage to decode it:

"i hope nobody decodes this message"

Create a function that will instantly decode any of these messages

You can assume no punctuation or capitals, only lower case letters, but remember spaces!
*/

const decode = message => message.replace(/[a-z]/g, char => String.fromCharCode(219 - char.charCodeAt()));

console.log(decode("sr")) // "hi"
console.log(decode("svool")) // "hello"
console.log(decode("r slkv mlylwb wvxlwvh gsrh nvhhztv")) // "i hope nobody decodes this message"