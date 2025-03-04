/* Geometry Basics: Circle Circumference in 2D
This series of katas will introduce you to basics of doing geometry with computers.

Point objects have x, y attributes. Circle objects have center which is a Point, and radius, which is a number.

Write a function calculating circumference of a Circle.

Tests round answers to 6 decimal places.
*/

const circleCircumference = circle => +(2 * Math.PI * circle.radius).toFixed(6);

Test.assertEquals(+circleCircumference(new Circle(new Point(10, 10), 30)).toFixed(6), 188.495559);
Test.assertEquals(+circleCircumference(new Circle(new Point(25, -70), 30)).toFixed(6), 188.495559);
Test.assertEquals(+circleCircumference(new Circle(new Point(-15, 5), 0)).toFixed(6), 0);
Test.assertEquals(+circleCircumference(new Circle(new Point(-15, 5), 12.5)).toFixed(6), 78.539816);