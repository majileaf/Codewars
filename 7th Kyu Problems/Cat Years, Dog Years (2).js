/* Cat Years, Dog Years (2)
Kata Task
I have a cat and a dog which I got as kitten / puppy.
I forget when that was, but I do know their current ages as catYears and dogYears.
Find how long I have owned each of my pets and return as a list [ownedCat, ownedDog]

NOTES:
Results are truncated whole numbers of "human" years

Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that

Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
*/

const ownedCatAndDog = (catYears, dogYears) => [getYearsOwned(catYears, 'cat'), getYearsOwned(dogYears, 'dog')];
const getYearsOwned = (years, type) => {
    const animal = {cat: 4, dog: 5};
    return years >= 15 && years < 24 ? 1 
         : years >= 24 ? Math.floor((years - 24) / animal[type] + 2)
         : 0;
}

console.log(ownedCatAndDog(15,15)) // [1,1]
console.log(ownedCatAndDog(24,24)) // [2,2]
console.log(ownedCatAndDog(56,64)) // [10,10]

console.log(ownedCatAndDog(9, 7)) // [0, 0]
console.log(ownedCatAndDog(18, 21)) // [1, 1]
console.log(ownedCatAndDog(50, 19)) // [8, 1]