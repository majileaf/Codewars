/* Emily's Eccentric Encoding
Emily believes that her bosses may be spying on her communications at work. This is not good because Emily is applying for new jobs and 
she doesn't want her bosses to know. To try and deceive the eavesdropping company, she has devised an encoding scheme with the recruiter 
to encode all of their communication.

The encoding replaces all lower case letters in a string with the opposite letter in the alphabet. 
In other words: a -> z, b -> y, c -> x, d -> w, etc. All other characters remain the same. 
The two parties have agreed on the encoding and they have generated encoded messages like:

"I dlfow orpv gl rmgviervd lm Mlmwzb nlimrmt!"

which decodes to:
"I would like to interview on Monday morning!"

Your job is to write a method called decode that takes an encoded string as input and returns the decoded string as output.
*/

const decode = str => str.replace(/[a-z]/g, e => String.fromCharCode(219 - e.charCodeAt()));

console.log(decode("I dlfow orpv gl rmgviervd lm Mlmwzb nlimrmt!")) // "I would like to interview on Monday morning!"