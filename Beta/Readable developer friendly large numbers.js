/* Readable developer-friendly large numbers
Summary
Add support for easily creating large numbers using orders of magnitude:
    hundred
    thousand
    million
    billion
    trillion
    quadrillion
    quintillion
    sextillion
    septillion
    octillion
    nonillion
    decillion

Do this by extending the built-in Number class.

Examples
// should return 100
Number(1).hundred();

// should return 10000000
Number(10).million();

Notes
    Your solution should work for integers and floats.
    Use the short scale numbering system (1,000,000,000 is a billion).
*/

Number.prototype.hundred     = function() {return this * 1E2;}
Number.prototype.thousand    = function() {return this * 1E3;}
Number.prototype.million     = function() {return this * 1E6;}
Number.prototype.billion     = function() {return this * 1E9;}
Number.prototype.trillion    = function() {return this * 1E12;}
Number.prototype.quadrillion = function() {return this * 1E15;}
Number.prototype.quintillion = function() {return this * 1E18;}
Number.prototype.sextillion  = function() {return this * 1E21;}
Number.prototype.septillion  = function() {return this * 1E24;}
Number.prototype.octillion   = function() {return this * 1E27;}
Number.prototype.nonillion   = function() {return this * 1E30;}
Number.prototype.decillion   = function() {return this * 1E33;}

console.log(Number(1).hundred()) //       100
console.log(Number(2.5).thousand()) //   2500
console.log(Number(10).million()) // 10000000