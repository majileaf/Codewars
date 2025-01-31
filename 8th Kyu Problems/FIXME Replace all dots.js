/*
The code provided is supposed replace all the 
dots . in the specified String str with dashes -

But it's not working properly.

Task
Fix the bug so we can all go home early.

Notes
String str will never be null.
*/

// initial solutions:
// const replaceDots = str => str.replaceAll('.', '-');
// const replaceDots = str => str.split('.').join('-');

const replaceDots = str => str.replace(/[.]/g, '-');

console.log(replaceDots("one.two.three")) // "one-two-three"