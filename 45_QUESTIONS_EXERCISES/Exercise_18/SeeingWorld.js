var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var locations = ["Bali", "Abu Dhabi", "Itly", "Turkey", "Paris"];
console.log("Original order:");
console.log(locations);
console.log("Alphabetical order:");
console.log(__spreadArray([], locations, true).sort());
console.log("Still in original order:");
console.log(locations);
console.log("Reverse alphabetical order:");
console.log(__spreadArray([], locations, true).sort().reverse());
console.log("Still in original order:");
console.log(locations);
locations.reverse();
console.log("Reversed order:");
console.log(locations);
locations.reverse();
console.log("Back to original order:");
console.log(locations);
locations.sort();
console.log("Sorted in alphabetical order:");
console.log(locations);
locations.sort().reverse();
console.log("Sorted in reverse alphabetical order:");
console.log(locations);
