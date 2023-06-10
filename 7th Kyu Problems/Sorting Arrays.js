/* Sorting Arrays
Given two arrays, a1 and a2, sort the elements of a2 based on the the index of the word in a1 that begins with the same letter.

Example 1
a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino']
a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus']

returns ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']
Example 2
a1 = ['jellyfish', 'koi', 'caribou', 'owl', 'dolphin']
a2 = ['ostrich', 'jaguar', 'deer', 'camel', 'kangaroo']

returns ['jaguar', 'kangaroo', 'camel', 'ostrich', 'deer']
Each element in the arrays will start with a unique letter so there will only be a single match for each element.
*/

const sortArray = (a1, a2) => {
    const order = a1.reduce((sum, n, i) => (sum[n[0]] = i, sum), {});
    let arr = [...Array(a2.length)];

    for (let i = 0; i < a2.length; i++) {
        arr[order[a2[i][0]]] = a2[i];
    }
    return arr;
}

let a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino'];
let a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus'];
console.log(sortArray(a1, a2)) // ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']

a1 = ['jellyfish', 'koi', 'caribou', 'owl', 'dolphin'];
a2 = ['ostrich', 'jaguar', 'deer', 'camel', 'kangaroo'];
console.log(sortArray(a1, a2)) // ['jaguar', 'kangaroo', 'camel', 'ostrich', 'deer']

a1 = ['newt', 'lizard', 'snail', 'tapir', 'rabbit'];
a2 = ['tortoise', 'narwhal', 'llama', 'raven', 'sloth'];
console.log(sortArray(a1, a2)) // ['narwhal', 'llama', 'sloth', 'tortoise', 'raven']