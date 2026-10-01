/* Extract Values and Units
Given a string representing a numerical value and a unit, e.g. "12px", return the value and units like so:

input: "12px"
output: {val: 12, units: "px"}

Assume all inputs have a numerical value, but not necessarily any specified units.

There may also be space(s) between the value and the unit, in which case ignore them.
*/

const valAndUnits = s => ({val: parseFloat(s), units: (s.match(/[^\d\s\.-]+/i) || [''])[0]});

console.log(valAndUnits('12px')) // {val: 12, units: 'px'}
console.log(valAndUnits('12.5KG')) // {val: 12.5, units: 'KG'}
console.log(valAndUnits('-1rem')) // {val: -1, units: 'rem'}
console.log(valAndUnits('13')) // {val: 13, units: ''}