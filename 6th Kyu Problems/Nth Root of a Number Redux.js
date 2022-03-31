/*
Task
Given two numbers x and n, calculate the nth root of x, e.g. r such that r^n = x. However, you're working with some kind of legacy API that doesn't contain a helpful function for this task (see end of the description).

Examples
root(4, 2);   // 2
root(8, 3);   // 2
root(256, 4); // 4
root(9, 2);   // 3

Disabled functions
The power function of your language (e.g. Math.pow in JavaScript, ** in Haskell) has been disabled. Good luck.
*/

const root = (x,n) => x ** (1/n)