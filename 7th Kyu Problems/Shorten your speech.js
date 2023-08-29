/* Shorten your speech
You are given a String of one or more words. Your task is to check the length of each word and 
if it's less than 4, you keep it unmodified otherwise you find out the first vowel which is 
coming after 3-rd character and replace vowel and rest of word with a dot. Finally, you should 
return the same string but shorten (only if the length of words is more then 3 characters).

Please note :
1) You are not asked to trim anything.
2) Apostrophes are part of words.
3) Commas following shortened words are considered characters and should be removed.

Examples:
shortenSpeech( "Hello, do you want a coffee ? " ) => returns "Hell. do you want a coff. ? "
shortenSpeech( "Hey fellow warriors !" ) => returns "Hey fell. warr. !"
shortenSpeech( "This is a test") => returns "This is a test"
*/

const shortenSpeech = str => str.split(' ').map(e => e.length < 4 ? e : cutStr(e)).join(' ');

const cutStr = str => {
    const vowelIndex = [...str.slice(3)].findIndex(isVowel);
    return vowelIndex !== - 1 ? str.slice(0, vowelIndex + 3) + '.' : str;
}

const isVowel = vowel => 'aeiou'.includes(vowel);

console.log(shortenSpeech("Hello, do you want a coffee ? ")) // "Hell. do you want a coff. ? "
console.log(shortenSpeech("Did you bring your computer ?")) // "Did you bring your comp. ?"
console.log(shortenSpeech("I've just finished my first kata")) //"I'v. just fin. my first kat."