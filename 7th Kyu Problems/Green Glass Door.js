/* Green Glass Door
Step through my green glass door.
You can take the moon, but not the sun.
You can take your slippers, but not your sandals.
You can go through yelling, but not shouting.
You can't run through fast, but you can run with speed.
You can take a sheet, but not your blanket.
You can wear your glasses, but not your contacts.
Have you figured it out? Good! Then write a program that can figure it out as well.
*/

const stepThroughWith = s => [...s].some((_, i) => s[i] === s[i + 1]);

console.log(stepThroughWith("moon")) // true, "You can take the moon, but not the sun"
console.log(stepThroughWith("test")) // false, "You can take a challenge, but not a test"
console.log(stepThroughWith("glasses")) // true, "You can take your glasses, but not your contacts"
console.log(stepThroughWith("airplane")) // false, "You can take a balloon, but not an airplane"
console.log(stepThroughWith("free")) // true, "You can be free, but not in chains"
console.log(stepThroughWith("branch")) // false, "You can take the tree or the wood, but not a branch"