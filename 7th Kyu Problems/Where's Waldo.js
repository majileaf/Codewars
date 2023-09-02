/* Where's Waldo?
Puzzle
If you don't know who Waldo is, he's a nice guy who likes to be in crowded places. 
But he's also a bit odd as he always likes to hide in plain sight. 
Can you spot Waldo in the crowd?

Task
Given crowd, an array of strings of equal length, representing a crowded place, 
return an array with two integers representing the coordinates [y, x] where Waldo 
can be found ([0, 0] is top-left, y being the row and x being the column ).

Examples
We've spotted Waldo a couple of times in the past. Below is what we found out.
 Note that he's been in much more crowded places lately.

#1 Waldo at the beach
"             "          Air
"         w   "           Air with a bird
"   w         "           Air with a bird
"~~~~~~~~~~~~~"           Sea
".~..~~.~~~..~"           Waves on beach
"...P......P.."           Beach with some people
"......P..P..."           Beach with some people
"..PW........."           Beach with Waldo and presumably a friend next to him

Unredacted report: Waldo can be found at [7, 3], wearing his usual outfit

#2 Waldo visiting the Great Pyramid
"                              "          Air
"                              "           Air
"            _                 "           Top of pyramid
"          _____               "           Layer of pyramid
"        _________             "           Layer of pyramid
"  B  _______________   G   GG "           Ground layer of pyramid with several people, including Waldo

Unredacted report: Waldo can be found at [5, 2], wearing special clothes protecting him from the sun

Hints
- he isn't always wearing his usual clothes
- why is there more than one bird in the first example ...
*/

function findWaldo(crowd) {
  // Return y (row) and x (column) coordinates of Waldo ([0,0] is top-left)
  const y = 0, x = 0;
  return [y, x];
}

// 'Should find Waldo at the beach' [7, 3]
    let crowd = [
    "             ",           // Air
    "         w   ",           // Air with a bird
    "   w         ",           // Air with a bird
    "~~~~~~~~~~~~~",           // Sea
    ".~..~~.~~~..~",           // Waves on beach
    "...P......P..",           // Beach with some people
    "......P..P...",           // Beach with some people
    "..PW........."            // Beach with Waldo and presumably a friend next to him
    ];

console.log(findWaldo(crowd));

// 'Should find Waldo at the pyramid' [5, 2]
    crowd = [
    "                              ",           // Air
    "                              ",           // Air
    "            _                 ",           // Top of pyramid
    "          _____               ",           // Layer of pyramid
    "        _________             ",           // Layer of pyramid
    "  B  _______________   G   GG "            // Ground layer of pyramid with several people, including Waldo
    ];

console.log(findWaldo(crowd));