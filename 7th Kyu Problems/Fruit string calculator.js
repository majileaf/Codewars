/* Fruit string calculator
You are given a string of words and numbers. Extract the expression including:

the operator: either addition ("gains") or subtraction ("loses")
the two numbers that we are operating on
Return the result of the calculation.

Notes:

"loses" and "gains" are the only two words describing operators
No fruit debts nor bitten apples = The numbers are integers and no negatives
Examples
"Panda has 48 apples and loses 4"  -->  44
"Jerry has 34 apples and gains 6"  -->  40
*/

const calculate = string => {
  const [num1, num2, operation] = string
      .split(' ')
      .reduce(([n1, n2, op], n) => 
          Number.isInteger(+n) && n1 === null ? [n, n2, op] : 
          Number.isInteger(+n) && n2 === null ? [n1, n, op] :
          n === 'gains' ? [n1, n2, 'gains'] :
          n === 'loses' ? [n1, n2, 'loses'] :
      [n1, n2, op], [null, null, null]);

  return op[operation](+num1, +num2);
}

const op = {
  gains: (a, b) => a + b,
  loses: (a, b) => a - b
}

console.log(calculate("Panda has 48 apples and loses 4")) // 44
console.log(calculate("Jerry has 34 apples and gains 6")) // 40