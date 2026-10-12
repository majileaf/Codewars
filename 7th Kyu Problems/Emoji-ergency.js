/* Emoji-ergency!
Oh no! Tinder's emoji decryption has gone down, and they need your help!

People are receiving raw code instead of the emojis the know, love and rely upon. It's total chaos!
And without your help, the millenials will no longer be able to express themselves!!

While the engineers sort out the issue, the PR people have created a set of stand-in emojis using common `UTF-8` characters, 
and they need you write a function that can help implement them.

OH YEAH, WE'RE TAKIN' IT BACK TO 2001 GUYS!

Below is a legend of the stand-in emojis and the codes they are associated with:
``` [[f9.smile]] => :) [[f9.grin]] => :D [[f9.smiley]] => =) [[f9.sohappy]] => XD [[f9.tongue]] => :P [[f9.wink]] => ;) [[f9.sad]] => :( [[f9.slant]] => :/ [[f9.surprised]] => :O [[f9.catface]] => :3 [[f9.cool]] => B) [[f9.unimpressed]] => :| [[f9.angry]] => >:| [[f9.kissing]] => ^.^ [[f9.dazed]] => *_* [[f9.dance1]] => <(^.^<) [[f9.dance2]] => (>^.^)> [[f9.heart]] => <3 ```

Input:
Your function will be passed a string representing a single message containing any number and variety of the above emoji codes:
```javascript let input = 'Hey [[f9.kissing]]! Sorry I think I had one too many last night... [[f9.dazed]]' ```

Output:
Your function must output a new string with the codes removed and the stand-in emojis in their place:
```javascript let output = 'Hey ^.^! Sorry I think I had one too many last night... *_*' ```

Note: The input strings must not be modified, as they are archived in raw form. Other than substituting in the new emojis, 
the strings' data mustn't be otherwise modified.
Have fun!
*/

const emoDic = {
    '[[f9.smile]]' : ':)',
    '[[f9.grin]]' : ':D',
    '[[f9.smiley]]' : '=)',
    '[[f9.sohappy]]' : 'XD',
    '[[f9.tongue]]' : ':P',
    '[[f9.wink]]' : ';)',
    '[[f9.sad]]' : ':(',
    '[[f9.slant]]' : ':/',
    '[[f9.surprised]]' : ':O',
    '[[f9.catface]]' : ':3',
    '[[f9.cool]]' : 'B)',
    '[[f9.unimpressed]]' : ':|',
    '[[f9.angry]]' : '>:|',
    '[[f9.kissing]]' : '^.^',
    '[[f9.dazed]]' : '*_*',
    '[[f9.dance1]]' : '<(^.^<)',
    '[[f9.dance2]]' : '(>^.^)>',
    '[[f9.heart]]' : '<3'
}

const insert = string => string.replace(/\[\[f9[^\]]+\]\]/g, chars => emoDic[chars]);

console.log(insert('Hey good lookin\' [[f9.wink]].')) // 'Hey good lookin\' ;).'
console.log(insert('Well that was awkward [[f9.unimpressed]]...')) // 'Well that was awkward :|...'
console.log(insert('Let\'s go dancing! [[f9.dance1]][[f9.dance2]]')) // 'Let\'s go dancing! <(^.^<)(>^.^)>
console.log(insert('OMG, he just sent me a pic of it [[f9.surprised]].')) // 'OMG, he just sent me a pic of it :O.

console.log(insert("I always knew I'd meet a mormon girl with good values [[f9.smiley]][[f9.heart]].")) 
// 'I always knew I\'d meet a mormon girl with good values =)<3.'