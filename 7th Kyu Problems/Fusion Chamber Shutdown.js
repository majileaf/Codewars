/* Fusion Chamber Shutdown
A laboratory is testing how atoms react in ionic state during nuclear fusion. 
They introduce different elements with Hydrogen in high temperature and pressurized chamber. 
Due to unknown reason the chamber lost its power and the elements in it started precipitating

Given the number of atoms of Carbon [C],Hydrogen[H] and Oxygen[O] in the chamber. 
Calculate how many molecules of Water [H2O], Carbon Dioxide [CO2] and Methane [CH4] 
will be produced following the order of reaction affinity below

1. Hydrogen reacts with Oxygen   = H2O
2. Carbon   reacts with Oxygen   = CO2
3. Carbon   reacts with Hydrogen = CH4

FOR EXAMPLE:
(C,H,O) = (45,11,100)
return no. of water, carbon dioxide and methane molecules

Output should be like:
(5,45,0)
*/

const burner = (c, h, o) => {
  const atoms = [c, h, o];
  const molecules = [[0, 2, 1], [1, 0, 2], [1, 4, 0]];
  const arr = [];

  for (let i = 0; i < 3; i++) {
      arr.push(Math.floor(Math.min(...molecules[i].map((e, i) => !e && !atoms[i] ? Infinity : atoms[i] / e))));
      for (let j = 0; j < 3; j++) {
          atoms[j] -= molecules[i][j] * arr[i];
      }
  }
  return arr;
}

console.log(burner(45, 11, 100)) // [5, 45, 0]
console.log(burner(354, 1023230, 0)) // [0, 0, 354]
console.log(burner(939, 3, 694)) // [1, 346, 0]
console.log(burner(215, 41, 82100)) // [20, 215, 0]
console.log(burner(113, 0, 52)) // [0, 26, 0]