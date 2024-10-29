/* Write out expression!
Math hasn't always been your best subject, and these programming symbols always trip you up! 
I mean, does ** mean "Times, Times" or "To the power of"? 
Luckily, you can create the function to write out the expressions for you!

The operators you'll need to use are:

"+"   -->  "Plus"
"-"   -->  "Minus"
"*"   -->  "Times"
"/"   -->  "Divided By"
"**"  -->  "To The Power Of"
"="   -->  "Equals"
"!="  -->  "Does Not Equal"

Notes:
the input will always be given as a string, in the following format: number space operator space number; 
for example: "1 + 3" or "2 - 10"

the numbers used will be 1 to 10
the valid operators and the relevant texts are stored in the preloaded dictionary/hash OPERATORS
invalid operators will also be tested, to which you should return "That's not an operator!"

Examples
"4 ** 9"  -->  "Four To The Power Of Nine"
"10 - 5"  -->  "Ten Minus Five"
"2 = 2"   -->  "Two Equals Two"
"2 x 3"   -->  "That's not an operator!"
*/

const OPERATORS = {
  '+': 'Plus ',
  '-': 'Minus ',
  '*': 'Times ',
  '/': 'Divided By ',
  '**': 'To The Power Of ',
  '=': 'Equals ',
  '!=': 'Does Not Equal '
}

const NUMBERS = {
  1: 'One',
  2: 'Two',
  3: 'Three',
  4: 'Four',
  5: 'Five',
  6: 'Six',
  7: 'Seven',
  8: 'Eight',
  9: 'Nine',
  10: 'Ten',
}

const expressionOut = expr => {
 const [n1, op, n2] = expr.split(' ');
 return OPERATORS[op] && `${NUMBERS[n1]} ${OPERATORS[op]}${NUMBERS[n2]}` || "That's not an operator!";
}

console.log(expressionOut("1 + 3")) // "One Plus Three"
console.log(expressionOut("2 - 10")) // "Two Minus Ten"
console.log(expressionOut("6 ** 9")) // "Six To The Power Of Nine"
console.log(expressionOut("5 = 5")) // "Five Equals Five"
console.log(expressionOut("7 * 4")) // "Seven Times Four"
console.log(expressionOut("2 / 2")) // "Two Divided By Two"
console.log(expressionOut("8 != 5")) // "Eight Does Not Equal Five"