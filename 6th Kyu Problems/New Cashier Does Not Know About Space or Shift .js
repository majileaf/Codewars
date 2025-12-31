/* New Cashier Does Not Know About Space or Shift 
Some new cashiers started to work at your restaurant.

They are good at taking orders, but they don't know how to capitalize words, or use a space bar!

All the orders they create look something like this:

"milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"

The kitchen staff are threatening to quit, because of how difficult it is to read the orders.

Their preference is to get the orders as a nice clean string with spaces and capitals like so:

"Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"

The kitchen staff expect the items to be in the same order as they appear in the menu.

The menu items are fairly simple, there is no overlap in the names of the items:
1. Burger
2. Fries
3. Chicken
4. Pizza
5. Sandwich
6. Onionrings
7. Milkshake
8. Coke
*/

const menuList = {
    'Burger': 1,
    'Fries': 2,
    'Chicken': 3,
    'Pizza': 4,
    'Sandwich': 5,
    'Onionrings': 6,
    'Milkshake': 7,
    'Coke': 8
}
const getOrder = input => input
    .match(/burger|fries|chicken|pizza|sandwich|onionrings|milkshake|coke/g)
    .map(e => e[0].toUpperCase() + e.slice(1))
    .sort((a, b) => menuList[a] - menuList[b])
    .join(' ');

console.log(getOrder("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza")) // "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"
console.log(getOrder("pizzachickenfriesburgercokemilkshakefriessandwich")) // "Burger Fries Fries Chicken Pizza Sandwich Milkshake Coke"