/* Number encrypting: decypher
Part II of Number encrypting Katas
Introduction
Back then when the internet was coming up, most search functionalities simply looked for keywords in text to show relevant documents. 
Hackers weren't very keen on having their information displayed on websites, bulletin boards, newsgroups or any other place, 
so they started to replace certain letters in words. It started out with simple vowel substitutions like a 4 instead of an A, or a 3 
instead of an E. This meant that topics like cracking or hacking remained undetected.

Here we will use a reduced version of the Leet Speak alphabet, but you can find more information here or at Wikipedia.

Task
You will receive a string cyphered according to the Kata Number encrypting: cypher. You will have to return the decyphered version of 
that string.

As a summary of how a string is cyphered, you have the following information.

The numbers corresponding to each letter are represented at the table below. Notice that different letters can share the same number. 
In those cases, one letter will be upper case and the other one lower case.

            1	2	3	4	5	6	7	8	9	0
Upper case	I	R	E	A	S	G	T	B		O
Lower case	l	z	e	a	s	b	t		g	o

Any character that is not at the table, does not change when cyphered.

NOTE: When cyphering, two letters can have the same number, therefore when decyphering one number can have two letters. 
To be able to select the correct letter for that number, you have to take into account the following RULES:

1. The first letter of the decyphered string will always be in Upper Case. (see example test #6)
2. Any letter placed after a period will always be in Upper Case. Between the period and the following letter, 
   there will always be a space. (see example text #3, '. Good...')
3. Any letter 'i' followed and preceded by a space, will always be Upper Case (see example test #3, '...else I can...'). 
   It will also be Upper Case if it is preceded by a space and followed by a character different than a letter (see exaple tests #4 and #5)
4. In any other case where a number must be converted into a letter, the letter will be lower case. That is to say, if the cyphered string 
   has an Upper Case letter, it remains Upper Case, as it doesn't have to be transformed (see 'W' in the first example).

Examples
Input: "H3110 W0r1d". Output: "Hello World"
Input: "1 4m y0ur f47h3r". Output: "I am your father"
Input: "1 d0 n07 kn0w wh47 3153 1 c4n 7357. 83 c001. 600d 1uck". Output: "I do not know what else I can test. Be cool. Good luck"
Input: "N3i7h3r d0 1". Output: "Neither do I"
Input: "1, 1. 1 m34n 13773r 1". Output: "I, I. I mean letter I"
Input: "60475 4nd 60475". Output: "Goats and Boats"
*/

const decypher = string => {
   const lowDict = {1: 'l', 2: 'z', 3: 'e', 4: 'a', 5: 's', 6: 'b', 7: 't', 8: 'B', 9: 'g', 0: 'o'};
   const upDict  = {1: 'I', 2: 'R', 3: 'E', 4: 'A', 5: 'S', 6: 'G', 7: 'T', 8: 'B', 9: 'g', 0: 'O'};
   const str = [...string];

   for (let i = 0; i < str.length; i++) {
       if (/[\d]/g.test(str[i])) {
           if (i === 0) str[i] = upDict[str[i]];
           else if (str[i - 2] === '.' && str[i - 1] === ' ') str[i] = upDict[str[i]];
           else if (str[i] === '1' && str[i - 1] === ' ' && str[i + 1] === ' ') str[i] = upDict[str[i]];
           else if (str[i] === '1' && str[i - 1] === ' ' && (/[^a-z\d]/.test(str[i + 1]) || str[i + 1] === undefined)) str[i] = upDict[str[i]];
           else str[i] = lowDict[str[i]];
       }
   }
   return str.join('');
}

console.log(decypher("H3110 W0r1d")) // "Hello World"
console.log(decypher("1 4m y0ur f47h3r")) // "I am your father"
console.log(decypher("1 d0 n07 kn0w wh47 3153 1 c4n 7357. 83 c001. 600d 1uck")) // "I do not know what else I can test. Be cool. Good luck"
console.log(decypher('N3i7h3r d0 1')) // "Neither do I"
console.log(decypher('1, 1. 1 m34n 13773r 1')) // "I, I. I mean letter I"
console.log(decypher("60475 4nd 60475")) // "Goats and boats"
console.log(decypher('814h 614h 1, 614h 614h')) // "Blah blah I, blah blah"