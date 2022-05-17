/*
Combine strings function
Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.

Example:

combineNames('James', 'Stevens')
returns:

'James Stevens'
*/

const combineNames = (str1, str2) => `${str1} ${str2}`;

console.log(combineNames('James', 'Stevens')) // 'James Stevens'