/*
Write a function which calculates the average 
of the numbers in a given list.

Note: Empty arrays should return 0.
*/

const find_average = array => array.length === 0 ? 0 : array.reduce((sum,n) => sum + n, 0) / array.length;
