/* Frank's Sticky Calculator
Frank just bought a new calculator. But, this is no normal calculator. 
This is a 'Sticky Calculator.

Whenever you add add, subtract, multiply or divide two numbers the two numbers 
first stick together:

For instance:
50 + 12 becomes 5012

and then the operation is carried out as usual:
(5012) + 12 = 5024

Task
It is your job to create a function which takes 3 parameters:
stickyCalc(operation, val1, val2)

which works just like Frank's sticky calculator

Some Examples
stickyCalc('+', 50, 12)     // Output: (5012 + 12) = 5024
stickyCalc('-', 7, 5)       // Output: (75 - 5) = 70
stickyCalc('*', 13, 20)     // Output: (1320 * 20 ) = 26400
stickyCalc('/', 10, 10)     // Output: (1010 / 10) = 101

Note
The calculator only works for positive integers only.
The calculator rounds any non-integer before operating.
The calculator rounds any output to nearest integer.

For example:
stickyCalc('/', 12.1, 6.8), 18);   
12.1 and 6.8 are rounded to 12 and 7 respectively & they 'stick together' to make 127.
Although 127 / 7 = 18.1428 ; 18 is outputted instead.
*/

const stickyCalc = (operation, val1, val2) => {
    const op = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b
    }
    val1 = String(Math.round(val1));
    val2 = String(Math.round(val2));

    return Math.round(op[operation](+(op['+'](val1, val2)), +val2));
}

// alternative:
// const stickyCalc = (operation, val1, val2) => {
//     const op = {
//         '+': (a, b) => a + b,
//         '-': (a, b) => a - b,
//         '*': (a, b) => a * b,
//         '/': (a, b) => a / b
//     }
//     val2 = Math.round(val2);
//     val1 = +(String(Math.round(val1)) + val2);

//     return Math.round(op[operation](val1, val2));
// }

console.log(stickyCalc('+', 4, 7)) // 54
console.log(stickyCalc('-', 15, 10)) // 1500
console.log(stickyCalc('*', 5, 5)) // 275
console.log(stickyCalc('/', 10, 7)) // 15

// Note How numbers are rounded
console.log(stickyCalc('+', 4.2, 7)) // 54 // Output : (47) + 7 = 54 
console.log(stickyCalc('+', 4.7, 7)) // 64 // Output : (57) + 7 = 54

// Note that non-integer outputs are rounded
console.log(stickyCalc('/', 10, 7)) // 15 // Output : (107) / 7 = 15  Not 15.2857... 
// Added to prevent flooring result to pass    
console.log(stickyCalc('/', 433, 930)) // 467 