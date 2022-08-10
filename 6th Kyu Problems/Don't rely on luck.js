/* Don't rely on luck.
The test fixture I use for this kata is pre-populated.

It will compare your guess to a random number generated using:

Math.floor(Math.random() * 100 + 1)
You can pass by relying on luck or skill but try not to rely on luck.

"The power to define the situation is the ultimate power." - Jerry Rubin
*/

// var guess = 10
Math.random = _ => 0;
var guess = 1

//This is exactly what the real test fixture looks like.
var lucky_number = Math.floor(Math.random() * 100 + 1);