/* Transformation iteration
Write
function transform(source, target){}

that takes in 2 strings and transforms source into the target string.

For example

transform('car','see') === ["car", "sar", "ser", "see"]
transform('floor','brake') === ["floor", "bloor", "broor", "braor", "brakr", "brake"]
transform('kata','math') === ["kata", "mata", "math"]

source and target will always be of the same length
*/

const transform = (source, target) => {
    const arr = [];
    const arrSource = source.split('');

    for (let i = 0; i < source.length; i++) {
        if (arrSource[i] !== target[i]) {
            arrSource[i] = target[i];
            arr.push(arrSource.join(''));
        } 
    }
    return [source, ...arr];
}

console.log(transform('car','see')) // ["car", "sar", "ser", "see"]
console.log(transform('floor','brake')) // ["floor", "bloor", "broor", "braor", "brakr", "brake"]
console.log(transform('kata','math')) // ["kata", "mata", "math"]
console.log(transform('deer','beer')) // ['deer','beer']
console.log(transform('a fall to the floor', 'braking the door in')) // ['a fall to the floor','b fall to the floor','brfall to the floor','braall to the floor','brakll to the floor','brakil to the floor','brakin to the floor','brakingto the floor','braking o the floor','braking t the floor','braking ththe floor','braking thehe floor','braking the e floor','braking the d floor','braking the dofloor','braking the dooloor','braking the dooroor','braking the door or','braking the door ir','braking the door in']
console.log(transform('Codewars','programs')) // ["Codewars", "podewars", "prdewars", "proewars", "progwars", "progrars", "programs"]