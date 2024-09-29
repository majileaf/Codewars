/* Terminal Game #2
Create the hero move method
Create a move method for your hero to move through the level.

Adjust the hero's position by changing the position attribute. The level is a grid with the following values:

00	01	02	03	04
10	11	12	13	14
20	21	22	23	24
30	31	32	33	34
40	41	42	43	44

The dir argument will be a string

up
down
left
right

If the position is not inside the level grid the method should throw an error and not move the hero
*/

Hero.prototype.position = '00';
Hero.prototype.current = [0, 0];
Hero.prototype.grid = [['00', '01', '02', '03', '04'], ['10', '11', '12', '13','14'], ['20', '21', '22', '23', '24'], ['30', '31', '32', '33', '34'], ['40', '41', '42', '43', '44']];

Hero.prototype.move = function (dir) {
  let [x, y] = this.current;
  switch(dir) {
    case 'up': x -= 1; break;
    case 'down': x += 1; break;
    case 'left': y -= 1; break;
    case 'right': y += 1; break;
  }

  if (x >= 0 && x < this.grid.length && y >= 0 && y < this.grid[0].length) {
    this.current = [x, y];
    this.position = this.grid[x][y];
  } else {
    throw new Error();
  }
}

var testHero = new Hero()
testHero.move('down')
console.log(testHero.position) // '10'
testHero.move('right')
console.log(testHero.position) // '11'
testHero.move('up')
console.log(testHero.position) // '01'
testHero.move('right')
console.log(testHero.position) // '02'
testHero.move('down')
console.log(testHero.position) // '12'
testHero.move('down')
console.log(testHero.position) // '22'