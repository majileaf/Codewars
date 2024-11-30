/* Offspring Traits
A population of bears consists of black bears, brown bears, and white bears.
The input is an array of two elements.

Determine whether the offspring of the two bears will 
return 'black', 'brown', 'white', 'dark brown', 'grey', 'light brown', or 'unknown'.

Elements in the the array will always be a string.

Examples:
bear_fur(['black', 'black'])  returns 'black'
bear_fur(['brown', 'brown'])  returns 'brown'
bear_fur(['white', 'white'])  returns 'white'
bear_fur(['black', 'brown'])  returns 'dark brown'
bear_fur(['black', 'white'])  returns 'grey'
bear_fur(['brown', 'white'])  returns 'light brown'
bear_fur(['yellow', 'magenta'])  returns 'unknown'
*/

const bearDic = {
  black: {
      black: 'black',
      brown: 'dark brown',
      white: 'grey',
  },
  brown: {
      brown: 'brown',
      black: 'dark brown',
      white: 'light brown'
  },
  white: {
      white: 'white',
      black: 'grey',
      brown: 'light brown'
  }
};

const bearFur = bears => bearDic[bears[0]]?.[bears[1]] || 'unknown';

console.log(bearFur(['black', 'black']))     //  'black'
console.log(bearFur(['brown', 'brown']))     //  'brown'
console.log(bearFur(['white', 'white']))     //  'white'
console.log(bearFur(['black', 'brown']))     //  'dark brown'
console.log(bearFur(['black', 'white']))     //  'grey'
console.log(bearFur(['brown', 'white']))     //  'light brown'
console.log(bearFur(['yellow', 'magenta']))  //  'unknown'