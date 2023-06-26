/* Transpose two strings in an array
You will be given an array that contains two strings. Your job is to create a function 
that will take those two strings and transpose them, so that the strings go from top 
to bottom instead of left to right.

e.g. transposeTwoStrings(['Hello','World']);

should return
H W  
e o  
l r  
l l  
o d
A few things to note:

There should be one space in between the two characters
You don't have to modify the case (i.e. no need to change to upper or lower)
If one string is longer than the other, there should be a space where the character would be
*/

function transposeTwoStrings (array) {
	return '';
}

console.log(transposeTwoStrings(['Hello', 'World'])) // "H W\ne o\nl r\nl l\no d"
console.log(transposeTwoStrings(['joey', 'louise'])) // "j l\no o\ne u\ny i\n  s\n  e"
console.log(transposeTwoStrings(['a', 'cat'])) // "a c\n  a\n  t"
console.log(transposeTwoStrings(['cat', ''])) // "c  \na  \nt  "
console.log(transposeTwoStrings(['!a!a!', '?b?b'])) // "! ?\na b\n! ?\na b\n!  "