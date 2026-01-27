/* Binary Zoo
Oh no!
The new zookeeper has lost track of how many animals are in the zoo because the last person to do the count 
thought it would be funny to do it in binary.

Write a function that can help the zookeper convert the binary count.
Input will be an object where key:value-pairs will represent an animal and a binary number.
Output should be an integer that equals the sum of all the animals in the zoo.
*/

const countTheAnimals = animals => Object.values(animals).reduce((sum, n) => sum + parseInt(n, 2), 0);

console.log(countTheAnimals({aardvark: '1101', tiger: '1100', donkey: '1100', emu: '1010'})) // 47
console.log(countTheAnimals({aardvark: '11010', tiger: '11001', donkey: '10011', emu: '10110'})) // 92
console.log(countTheAnimals({aardvark: '1101', tiger: '1110', donkey: '1111', emu: '1010'})) // 52