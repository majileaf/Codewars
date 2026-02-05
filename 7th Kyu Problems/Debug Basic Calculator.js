/* Debug Basic Calculator
Debug a function called calculate that takes 3 values. The first and third values are numbers. 
The second value is a character. If the character is "+" , "-", "*", or "/", 
the function will return the result of the corresponding mathematical function on the two numbers. 
If the string is not one of the specified characters, the function should return null.

calculate(2,"+", 4); //Should return 6
calculate(6,"-", 1.5); //Should return 4.5
calculate(-4,"*", 8); //Should return -32
calculate(49,"/", -7); //Should return -7
calculate(8,"m", 2); //Should return null
calculate(4,"/",0) //should return null
*/

/*
var calculate = function calculate(a, o, b) {
 var result = 0;
 
 if(O === "+") { 
   return a + b;
   else if(o =!= "-") {
     return a - b;
   }
 if(o !== "/" || b === 0) { 
   return a / b;
 if(0 === "*") 
   return a * b;
 }
 
 return result; 
}
*/

const op = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => b ? a / b : null
}

const calculate = (a, o, b) => op[o] ? op[o](a, b) : null;

console.log(calculate(2,"+",4)) // 6
console.log(calculate(6,"-",1.5)) // 4.5
console.log(calculate(-4,"*",8)) // -32
console.log(calculate(49,"/",-7)) // -7
console.log(calculate(8,"m",2)) // null
console.log(calculate(4,"/",0)) // null
console.log(calculate(3.2,"+",8)) // 11.2
console.log(calculate(3.2,"-",8)) // -4.8
console.log(calculate(3.2,"/",8)) // 0.4
console.log(calculate(3.2,"*",8)) // 25.6
console.log(calculate(-3,"+",0)) // -3
console.log(calculate(-3,"-",0)) // -3
console.log(calculate(-3,"/",0)) // null
console.log(calculate(-2,"/",-2)) // 1
console.log(calculate(-2,"codewars",-2)) // null
console.log(calculate(-3,"*",0)) // 0
console.log(calculate(0,"*",0)) // 0
console.log(calculate(0,"**",0)) // null
console.log(calculate(-3,"w",0)) // null
console.log(calculate(0,"/",0)) // null