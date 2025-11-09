/* Inertial Array
An array is defined to be inertialif the following conditions hold:

a. it contains at least one odd value  
b. the maximum value in the array is even 
c. every odd value is greater than every even value that is not the maximum value.

eg:-

So [11, 4, 20, 9, 2, 8] is inertial because 
a. it contains at least one odd value [11,9] 
b. the maximum value in the array is 20 which is even 
c. the two odd values (11 and 9) are greater than all the even values that are not equal to 20 (the maximum), i.e., [4, 2, 8]

Write a function called is_inertial that accepts an integer array and returns true if the array is inertial; 
otherwise it returns false.
*/

/*
  function name:- isInertial
  input:- integer array
  ouput:- true if array is inertial false otherwise.
*/

const isInertial = arr => {
    const max = Math.max(...arr);
    const minOdd = Math.min(...arr.filter(e => e % 2 !== 0));
    const maxEven = Math.max(...arr.filter(e => e % 2 === 0 && e !== max));
    return arr.some(e => e % 2 !== 0) && max % 2 === 0 && minOdd > maxEven;
}

console.log(isInertial([
    -8,  205,  229, -524,
  -397,  229, -189,  -75,
   511, -476,  508,  -42,
   182,  540, -192, -430,
   226
])) // false
console.log(isInertial([11, 4, 20, 9, 2, 8])) // true