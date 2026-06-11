/* Who let the dogs out?
I wanted to write some classes for dogs. In my model dogs either bark or sleep. 
I know that it is popular practice to set default values like this

var value = value || DEFAULT_VALUE

And so i did. But something is wrong, and I don't know why. Can you help me out?
*/

var BARK  = 'woof woof';
var SLEEP = 'zzzzzzzzz....';

function dog_bark_by_default(bark = true){
  return bark ? BARK : SLEEP;
}

function dog_bark_only_if_told_so(bark = false){
  return bark ? BARK : SLEEP;
}

function dog_dont_bark_by_default(dont_bark = true){
  return !dont_bark ? BARK : SLEEP;
}

function dog_dont_bark_only_if_told_so(dont_bark = false){
  return !dont_bark ? BARK : SLEEP;
}

console.log(dog_bark_only_if_told_so(true)) // BARK, 'Should bark only if told so'
console.log(dog_bark_only_if_told_so(false)) // SLEEP, 'Should bark only if told so'
console.log(dog_bark_only_if_told_so()) // SLEEP, 'Should bark only if told so'

console.log(dog_dont_bark_only_if_told_so(true)) // SLEEP, 'Should NOT bark only if told so'
console.log(dog_dont_bark_only_if_told_so(false)) // BARK, 'Should NOT bark only if told so'
console.log(dog_dont_bark_only_if_told_so()) // BARK, 'Should NOT bark only if told so'

console.log(dog_dont_bark_by_default()) // SLEEP, 'Should NOT bark by default'
console.log(dog_dont_bark_by_default(false)) // BARK, 'Should NOT bark if told so'

console.log(dog_bark_by_default()) // BARK, 'Should bark by default'
console.log(dog_bark_by_default(false)) // SLEEP, 'Should NOT bark if told so'