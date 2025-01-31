/*
Your Task
Given an array of Boolean values and a logical operator, 
return a Boolean result based on sequentially applying the 
operator to the values in the array.

Examples
1. booleans = [True, True, False], operator = "AND"
True AND True -> True
True AND False -> False
return False

2. booleans = [True, True, False], operator = "OR"
True OR True -> True
True OR False -> True
return True

3. booleans = [True, True, False], operator = "XOR"
True XOR True -> False
False XOR False -> False
return False

Input
an array of Boolean values (1 <= array_length <= 50)
a string specifying a logical operator: "AND", "OR", "XOR"

Output
A Boolean value (True or False).
*/

// initital solution:
// const logicalCalc = (array, op) => 
//     array.reduce((sum, n) => 
//         op === 'AND' ? sum && n : 
//         op === 'OR' ? sum || n : 
//         Boolean(sum ^ n));

const operations = {
    AND: (a, b) => a && b,
    OR: (a, b) => a || b,
    XOR: (a, b) => a !== b
}

const logicalCalc = (array, op) => array.reduce(operations[op]);

console.log(logicalCalc([true, true, true, false], "AND")) // false
console.log(logicalCalc([true, true, true, false], "OR")) // true
console.log(logicalCalc([true, true, true, false], "XOR")) // true
console.log(logicalCalc([true, true, false, false], "AND")) // false
console.log(logicalCalc([true, true, false, false], "OR")) // true
console.log(logicalCalc([true, true, false, false], "XOR")) // false
console.log(logicalCalc([true, false, false, false], "AND")) // false
console.log(logicalCalc([true, false, false, false], "OR")) // true
console.log(logicalCalc([true, false, false, false], "XOR")) // true