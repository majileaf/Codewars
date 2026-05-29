/* Alphabet war - Wo lo loooooo priests join the war
Introduction

There is a war and nobody knows - the alphabet war!
There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began. 
The letters have discovered a new unit - a priest with Wo lo looooooo power.

Task
Write a function that accepts fight string consists of only small letters and return who wins the fight. 
When the left side wins return Left side wins!, when the right side wins return Right side wins!, 
in other case return Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3 
 b - 2
 s - 1
 t - 0 (but it's priest with Wo lo loooooooo power)

The right side letters and their power:

 m - 4
 q - 3 
 d - 2
 z - 1
 j - 0 (but it's priest with Wo lo loooooooo power)

The other letters don't have power and are only victims.
The priest units t and j change the adjacent letters from hostile letters to friendly letters with the same power.

mtq => wtp
wjs => mjz

A letter with adjacent letters j and t is not converted i.e.:

tmj => tmj
jzt => jzt

The priests (j and t) do not convert the other priests ( jt => jt ).

Example
alphabetWar("z")         //=>  "z"  => "Right side wins!"
alphabetWar("tz")        //=>  "ts" => "Left side wins!" 
alphabetWar("jz")        //=>  "jz" => "Right side wins!" 
alphabetWar("zt")        //=>  "st" => "Left side wins!" 
alphabetWar("azt")       //=> "ast" => "Left side wins!"
alphabetWar("tzj")       //=> "tzj" => "Right side wins!" 
*/

const getPower = {
    'w': -4, 'm': 4,
    'p': -3, 'q': 3,
    'b': -2, 'd': 2,
    's': -1, 'z': 1
}

const convertLetter = {
    'w': 'm', 'm': 'w',
    'p': 'q', 'q': 'p',
    'b': 'd', 'd': 'b',
    's': 'z', 'z': 's'
}

const alphabetWar = fight => {
    fight = fight.replace(/(?<!t)[wpbs](?=j)|(?<=j)[wpbs](?!t)|(?<!j)[mqdz](?=t)|(?<=t)[mqdz](?!j)/g, char => convertLetter[char]);
    const total = [...fight].reduce((sum, n) => sum + (getPower[n] || 0), 0);
    
    return total < 0 ? "Left side wins!"  :
           total > 0 ? "Right side wins!" :
                       "Let's fight again!";
}

console.log(alphabetWar("z")) // "Right side wins!"
console.log(alphabetWar("tz")) // "Left side wins!"
console.log(alphabetWar("jz")) // "Right side wins!"
console.log(alphabetWar("zt")) // "Left side wins!"
console.log(alphabetWar("sj")) // "Right side wins!" 
console.log(alphabetWar("azt")) // "Left side wins!"
console.log(alphabetWar("tzj")) // "Right side wins!"
console.log(alphabetWar("jbdt")) // "Let's fight again!"
console.log(alphabetWar("wololooooo")) // "Left side wins!"
console.log(alphabetWar("zdqmwpbs")) // "Let's fight again!"
console.log(alphabetWar("ztztztzs")) // "Left side wins!"