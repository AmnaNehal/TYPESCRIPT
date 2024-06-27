var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function show_magicians(magician) {
    magician.forEach(function (magicianname) {
        console.log(magicianname);
    });
}
function make_greate(magicians) {
    var great = magicians.map(function (magician) { return "The Great ".concat(magician); });
    return great;
}
var magicians = ["Amna", "john", "Bob"];
console.log("Original magicians: ");
show_magicians(magicians);
console.log("\nGreat Magicians:");
var call_magician = make_greate(__spreadArray([], magicians, true));
show_magicians(call_magician);
