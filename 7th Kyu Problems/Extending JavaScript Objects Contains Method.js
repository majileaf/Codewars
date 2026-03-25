/* Extending JavaScript Objects: Contains Method
Your task is to extend JavaScript String object with a .contains(substr) method, so you can check if the string contains a substring.

By default, it has to be a case-insensitive check. But you also have to provide a second optional bool parameter, so the method would be able to do a case-sensitive check as well.

'Hello, World!'.contains('Hel');         // true
'Hello, World!'.contains('wor');         // true
'Hello, World!'.contains('wor', true);   // false (case-sensitive check)
'Hello, World!'.contains('a');           // false
*/

String.prototype.contains = function(word, caseIn = false) {
    return caseIn ? this.includes(word) : this.toLowerCase().includes(word.toLowerCase());
}

console.log('Hello, World!'.contains('Hel')) // true
console.log('Hello, World!'.contains('wor')) // true
console.log('Hello, World!'.contains('wor', true)) // false
console.log('Hello, World!'.contains('a')) // false