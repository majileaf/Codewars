/* Find the force of gravity between two objects
Your job is to find the gravitational force between two spherical objects (obj1 , obj2).

input
Two arrays are given :
    arr_val (value array), consists of 3 elements
        1st element : mass of obj 1
        2nd element : mass of obj 2
        3rd element : distance between their centers
    arr_unit (unit array), consists of 3 elements
        1st element : unit for mass of obj 1
        2nd element : unit for mass of obj 2
        3rd element : unit for distance between their centers

mass units are :
    kilogram (kg)
    gram (g)
    milligram (mg)
    microgram (μg)
    pound (lb)

distance units are :
    meter (m)
    centimeter (cm)
    millimeter (mm)
    micrometer (μm)
    feet (ft)

Note
value of G = 6.67 × 10−11 N⋅kg−2⋅m2
1 ft = 0.3048 m
1 lb = 0.453592 kg

return value must be Newton for force (obviously)
μ copy this from here to use it in your solution
*/

const G = 6.67 * 10 ** -11;
const massU = {kg: 1, g: 1E-3, mg: 1E-6, μg: 1E-9, lb: 0.453592};
const distU = {m: 1, cm: 1E-2, mm: 1E-3, μm: 1E-6, ft: 0.3048}
const solution = ([m1, m2, r], [u1, u2, u3]) => G * m1 * massU[u1] * m2 * massU[u2] / (r * distU[u3]) ** 2;

console.log(solution([1000, 1000, 100], ["g", "kg", "m"])) // 6.67e-12
console.log(solution([1000, 1000, 100], ["kg", "kg", "m"])) // 6.67e-9
console.log(solution([1000, 1000, 100], ["kg", "kg", "cm"])) // 0.0000667