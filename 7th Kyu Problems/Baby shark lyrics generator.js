/* Baby shark lyrics generator
Baby Shark Lyrics

Create a function, as short as possible, that returns this lyrics.
Your code should be less than 300 characters. Watch out for the three points at the end of the song.

Baby shark, doo doo doo doo doo doo
Baby shark, doo doo doo doo doo doo
Baby shark, doo doo doo doo doo doo
Baby shark!
Mommy shark, doo doo doo doo doo doo
Mommy shark, doo doo doo doo doo doo
Mommy shark, doo doo doo doo doo doo
Mommy shark!
Daddy shark, doo doo doo doo doo doo
Daddy shark, doo doo doo doo doo doo
Daddy shark, doo doo doo doo doo doo
Daddy shark!
Grandma shark, doo doo doo doo doo doo
Grandma shark, doo doo doo doo doo doo
Grandma shark, doo doo doo doo doo doo
Grandma shark!
Grandpa shark, doo doo doo doo doo doo
Grandpa shark, doo doo doo doo doo doo
Grandpa shark, doo doo doo doo doo doo
Grandpa shark!
Let's go hunt, doo doo doo doo doo doo
Let's go hunt, doo doo doo doo doo doo
Let's go hunt, doo doo doo doo doo doo
Let's go hunt!
Run away,…
Good Luck!
*/

const babySharkLyrics = () => ['Baby', 'Mommy', 'Daddy', 'Grandma', 'Grandpa', 'Let\'s go hunt']
    .map((e, i) => {
        if (i < 5) e += ' shark';
        return (e + ',' + ' doo'.repeat(6) + '\n').repeat(3) + e + '!\n'})
    .join('') + 'Run away,…';

const babyshark = "Baby shark, doo doo doo doo doo doo\n\
Baby shark, doo doo doo doo doo doo\n\
Baby shark, doo doo doo doo doo doo\n\
Baby shark!\n\
Mommy shark, doo doo doo doo doo doo\n\
Mommy shark, doo doo doo doo doo doo\n\
Mommy shark, doo doo doo doo doo doo\n\
Mommy shark!\n\
Daddy shark, doo doo doo doo doo doo\n\
Daddy shark, doo doo doo doo doo doo\n\
Daddy shark, doo doo doo doo doo doo\n\
Daddy shark!\n\
Grandma shark, doo doo doo doo doo doo\n\
Grandma shark, doo doo doo doo doo doo\n\
Grandma shark, doo doo doo doo doo doo\n\
Grandma shark!\n\
Grandpa shark, doo doo doo doo doo doo\n\
Grandpa shark, doo doo doo doo doo doo\n\
Grandpa shark, doo doo doo doo doo doo\n\
Grandpa shark!\n\
Let's go hunt, doo doo doo doo doo doo\n\
Let's go hunt, doo doo doo doo doo doo\n\
Let's go hunt, doo doo doo doo doo doo\n\
Let's go hunt!\n\
Run away,…";

console.log(babySharkLyrics().length);