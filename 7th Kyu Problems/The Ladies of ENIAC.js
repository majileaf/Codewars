/* The Ladies of ENIAC
Comprised of a team of five incredibly brilliant women, "The ladies of ENIAC" were the first 
“computors” working at the University of Pennsylvania’s Moore School of Engineering (1945). 
Through their contributions, we gained the first software application and the first programming classes! 
The ladies of ENIAC were inducted into the WITI Hall of Fame in 1997!

Write a function which reveals "The ladies of ENIAC" names, so that you too can add them to your own hall of tech fame!

To keep: only alpha characters, space characters and exclamation marks.
To remove: numbers and these characters: %$&/£?@

Result should be all in uppercase.
*/

const radLadies = name => name.replace(/[^a-z !]/gi, '').toUpperCase();

console.log(radLadies("k?%35a&&/y@@@£5599 m93753&$$$c$n///79u??@@%l?975$t?%5y%&$3$1!")) // 'KAY MCNULTY!'
console.log(radLadies("9?9?9?m335%$£@a791%&$r$$$l£@53$&y&n%$5@ $£5577w&7e931%s$£c$o%%%f351f??%!%%")) // 'MARLYN WESCOFF!'
console.log(radLadies("%&$557f953//1/$£@%r%935$$£a@£3111$@???%n???5 $%157b%///$i%55&31£@l?%&$$a%@£$s5757!$$%%%%53")) // 'FRAN BILAS!'
console.log(radLadies("///$%&£$553791£r357%??@$%u?$%@7993111£@$%t£$h3% 3$£l$311i3%@?&c3£h%&t&&?%11e%$?@11957r79%£&£m$$a55n1!111%%")) // 'RUTH LICHTERMAN!'
console.log(radLadies("??£@%&a5d15??e599713%l%%e%75913 1£$%&@g@£%o&$@13l5d11s$%&t15i9n&5%%@%e@£$!£%$£")) // 'ADELE GOLDSTINE!'