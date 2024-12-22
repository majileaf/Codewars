/* Hungarian Vowel Harmony (easy)
Vowel harmony (https://en.wikipedia.org/wiki/Vowel_harmony) is a phenomenon in some languages. 
It means that "A vowel or vowels in a word are changed to sound the same (thus "in harmony.")" (https://en.wikipedia.org/wiki/Vowel_harmony#Hungarian). 
This kata is based on vowel harmony in Hungarian. (https://en.wikipedia.org/wiki/Vowel_harmony#Hungarian)

Task:
Your goal is to create a function dative() (Dative() in C#) which returns the valid form of a valid Hungarian word w 
in dative case (http://www.hungarianreference.com/Nouns/nak-nek-dative.aspx) i. e. append the correct suffix nek or nak to the word w based on vowel harmony rules.

Vowel Harmony Rules (simplified)
When the last vowel in the word is

a front vowel (e, é, i, í, ö, ő, ü, ű) the suffix is -nek
a back vowel (a, á, o, ó, u, ú) the suffix is -nak

Examples:
dative("ablak") == "ablaknak"
dative("szék") == "széknek"
dative("otthon") == "otthonnak"

Preconditions:
To keep it simple: All words end with a consonant :)
All strings are unicode strings.
There are no grammatical exceptions in the tests.
*/

const dative = word => {
    const lastVowel = word.match(/[eéiíöőüűaáoóuú]/g).pop();
    return (/[eéiíöőüű]/.test(lastVowel)) ? word + 'nek'
         : (/[aáoóuú]/.test(lastVowel))   ? word + 'nak' 
         : word;
}

console.log(dative("ablak")) // "ablaknak"
console.log(dative("tükör")) // "tükörnek"
console.log(dative("keret")) // "keretnek"
console.log(dative("otthon")) // "otthonnak"
console.log(dative("virág")) // "virágnak"
console.log(dative("tett")) // "tettnek"
console.log(dative("rokkant")) // "rokkantnak"
console.log(dative("rossz")) // "rossznak"
console.log(dative("gonosz")) // "gonosznak"