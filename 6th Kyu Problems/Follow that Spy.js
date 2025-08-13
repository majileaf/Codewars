/* Follow that Spy
We are diligently pursuing our elusive operative, Matthew Knight, who also goes by the alias Roy Miller. He employs a nomadic lifestyle to evade detection, constantly moving from one location to another, with each of his journeys following a perplexing and non-standard sequence of itineraries. Our mission is to decipher the routes he will undertake during each of his voyages.

Task
You've been provided with an array of itinerary routes, decipher the precise destinations he will visit in the correct sequence according to his meticulously planned itineraries.

Example
Based on the provided routes:
[ [USA, BRA], [JPN, PHL], [BRA, UAE], [UAE, JPN] ]

The correct sequence of destinations is:
"USA, BRA, UAE, JPN, PHL"

Note:
    You can safely assume that there will be no duplicate locations with distinct routes.
    All routes provided will have non-empty itineraries.
    There will always be at least one (1) route connecting one waypoint to another.
*/

// it should return the places from the given routes
const findRoutes = routes => {
    const map = {}, rMap = {};

    for (const [start, end] of routes) {
        map[start] = end;
        rMap[end] = start;
    }

    const arr = [];
    let next = routes[0][0];
    arr.push(next);
    while (map[next]) {
        arr.push(map[next]);
        next = map[next];
    }

    const arr2 = [];
    let prev = routes[0][0];
    while (rMap[prev]) {
        arr2.push(rMap[prev]);
        prev = rMap[prev];
    }

    return [...arr2.reverse(), ...arr].join(', ');
}

var routes1 = [["MNL", "TAG"], ["CEB", "TAC"], ["TAG", "CEB"], ["TAC", "BOR"]];
console.log(findRoutes(routes1)) // "MNL, TAG, CEB, TAC, BOR"
var routes2 = [["UK", "GER"], ["GER", "BEL"], ["BEL", "CAN"]];
console.log(findRoutes(routes2)) // "UK, GER, BEL, CAN"
var routes3 = [["Chicago", "Winnipeg"], ["Halifax", "Montreal"], ["Montreal", "Toronto"], ["Toronto", "Chicago"], ["Winnipeg", "Seattle"]];
console.log(findRoutes(routes3)) // "Halifax, Montreal, Toronto, Chicago, Winnipeg, Seattle"
var routes4 = [["Agra", "Tokyo"], ["Seoul", "Ljubljana"], ["Ljubljana", "Wroclaw"], ["Wroclaw", "Nashville"], ["Nashville", "Amsterdam"], ["Amsterdam", "Hull"], ["Hull", "Vancouver"], ["Vancouver", "Agra"], ["Tokyo", "Manila"]];
console.log(findRoutes(routes4)) // "Seoul, Ljubljana, Wroclaw, Nashville, Amsterdam, Hull, Vancouver, Agra, Tokyo, Manila"
var routes5 = [["Calgary", "Fargo"], ["Spokane", "Toronto"], ["Winnipeg", "Montreal"], ["Toronto", "Calgary"], ["Fargo", "Winnipeg"]];
console.log(findRoutes(routes5)) // "Spokane, Toronto, Calgary, Fargo, Winnipeg, Montreal"
var routes6 = [["BRA", "KSA"], ["USA", "BRA"], ["JPN", "PHL"], ["KSA", "UAE"], ["UAE", "JPN"]];
console.log(findRoutes(routes6)) // "USA, BRA, KSA, UAE, JPN, PHL"
var routes7 = [["HQ", "SH"]];
console.log(findRoutes(routes7)) // "HQ, SH"
var routes8 = [["San Policarpo", "Oras"], ["Balangiga", "Lawaan"], ["Borongan", "Maydolong"], ["Jipapad", "Maslog"], ["Balangkayan", "Llorente"], ["Mercedes", "Guiuan"], ["Taft", "Sulat"], ["Sulat", "San Julian"], ["Arteche", "San Policarpo"], ["Oras", "Dolores"], ["Dolores", "Can-avid"], ["Can-avid", "Taft"], ["San Julian", "Borongan"], ["Maydolong", "Balangkayan"], ["Llorente", "Hernani"], ["Hernani", "General MacArthur"], ["General MacArthur", "Giporlos"], ["Giporlos", "Balangiga"], ["Lawaan", "Salcedo"], ["Salcedo", "Mercedes"], ["Maslog", "Arteche"]];
console.log(findRoutes(routes8)) // "Jipapad, Maslog, Arteche, San Policarpo, Oras, Dolores, Can-avid, Taft, Sulat, San Julian, Borongan, Maydolong, Balangkayan, Llorente, Hernani, General MacArthur, Giporlos, Balangiga, Lawaan, Salcedo, Mercedes, Guiuan"