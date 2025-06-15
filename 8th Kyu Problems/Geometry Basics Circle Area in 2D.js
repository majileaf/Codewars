/* Geometry Basics: Circle Area in 2D
This series of katas will introduce you to basics of doing geometry with computers.

Write the function circleArea/CircleArea which takes in a Circle object and calculates the area of that circle.
The Circle class can be seen below:

// Represents a Circle where center is a Point and radius is a Number
class Circle {
  constructor(center, radius) { 
    this.center = center; 
    this.radius = radius;
  }
}

And the Point class can be seen below:

// Represents a Point where x and y are Numbers
class Point {
  constructor (x,y) { 
    this.x = x;
    this.y = y; 
  }
}
*/

// Represents a Circle where center is a Point and radius is a Number
class Circle {
  constructor(center, radius) { 
    this.center = center; 
    this.radius = radius;
  }
}

// Represents a Point where x and y are Numbers
class Point {
  constructor (x,y) { 
    this.x = x;
    this.y = y; 
  }
}

const circleArea = circle => Math.PI * circle.radius ** 2;

console.log(new Circle(new Point(10, 10), 30)) // 2827.433388
console.log(new Circle(new Point(25, -70), 30)) // 2827.433388
console.log(new Circle(new Point(-15, 5), 0)) // 0
console.log(new Circle(new Point(-15, 5), 12.5)) // 490.873852