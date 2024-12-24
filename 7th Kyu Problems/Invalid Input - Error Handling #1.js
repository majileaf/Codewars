/* Invalid Input - Error Handling #1
Error Handling is very important in coding and seems to be overlooked or not implemented properly.

#Task
Your task is to implement a function which takes a string as input and return an object containing the properties vowels and consonants. 
The vowels property must contain the total count of vowels {a,e,i,o,u}, and the total count of consonants {a,..,z} - {a,e,i,o,u}. 
Handle invalid input and don't forget to return valid ones.

#Input

The input is any random string. You must then discern what are vowels and what are consonants and sum for each category their 
total occurrences in an object. However you could also receive inputs that are not strings. 

If this happens then you must return an object with a vowels and consonants total of 0 because the input was NOT a string. 
Refer to the Example section for a more visual representation of which inputs you could receive and the outputs expected. :)

Example:
Input: getCount('test')
Output: {vowels:1,consonants:3}

Input: getCount('tEst')
Output: {vowels:1,consonants:3}

Input getCount('    ')
Output: {vowels:0,consonants:0}

Input getCount()
Output: {vowels:0,consonants:0}

C#
A Counter class has been put in the preloaded section taking two parameters Vowels and Consonants this must be the Object you return!

public class Counter {
    public int Vowels { get; set; }
    public int Consonants { get; set; }
    public Counter(int vowels, int consonants)
    {
        Vowels = vowels;
        Consonants = consonants;
    }
}
*/

const getCount = words => typeof words === 'string' 
    ? [...words].reduce((sum, n) => (/[aeiou]/i.test(n) ? sum.vowels++ : /[b-df-hj-np-tv-z]/i.test(n) ? sum.consonants++ : sum, sum), {vowels: 0, consonants: 0})
    : {vowels: 0, consonants: 0};

console.log(getCount('Test')) // {vowels:1,consonants:3}
console.log(getCount('Here is some text')) // {vowels:6,consonants:8}
console.log(getCount('To be a Codewarrior or not to be')) // {vowels:12,consonants:13}
console.log(getCount('To Kata or not to Kata')) // {vowels:8,consonants:9}
console.log(getCount('aeiou')) // {vowels:5,consonants:0}

console.log(getCount('TEst')) // {vowels:1,consonants:3}
console.log(getCount('HEre Is sOme text   ')) // {vowels:6,consonants:8}
console.log(getCount()) // {vowels:0,consonants:0}
console.log(getCount(['To Kata or not to Kata'])) // {vowels:0,consonants:0}
console.log(getCount(undefined)) // {vowels:0,consonants:0}