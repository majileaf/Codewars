/* Word a10n (abbreviation)
The word i18n is a common abbreviation of internationalization in the developer community, 
used instead of typing the whole word and trying to spell it correctly. 
Similarly, a11y is an abbreviation of accessibility.

Write a function that takes a string and turns any and all "words" (see below) within that 
string of length 4 or greater into an abbreviation, following these rules:

    1. A "word" is a sequence of alphabetical characters. By this definition, any other character 
       like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two words 
       (eg. "elephant" and "ride").
    2. The abbreviated version of the word should have the first letter, then the number of 
       removed characters, then the last letter (eg. "elephant ride" => "e6t r2e").

Example
abbreviate("elephant-rides are really fun!")
//          ^^^^^^^^*^^^^^*^^^*^^^^^^*^^^*
// words (^):   "elephant" "rides" "are" "really" "fun"
//                123456     123     1     1234     1
// ignore short words:               X              X

// abbreviate:    "e6t"     "r3s"  "are"  "r4y"   "fun"
// all non-word characters (*) remain in place
//                     "-"      " "    " "     " "     "!"
=== "e6t-r3s are r4y fun!"
*/

const abbreviate = string => string.replace(/([a-z])([a-z]{2,})([a-z])/gi, (_, first, middle, last) => first + middle.length + last);

console.log(abbreviate("internationalization")) // "i18n"
console.log(abbreviate("accessibility")) // "a11y"
console.log(abbreviate("Accessibility")) // "A11y"
console.log(abbreviate("elephant-ride")) // "e6t-r2e"
console.log(abbreviate("elephant-rides are really fun!")) // "e6t-r3s are r4y fun!"