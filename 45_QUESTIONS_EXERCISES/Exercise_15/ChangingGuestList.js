//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.Vehicles = ["Tesla Model S", "Ducati Monster", "Boeing 747", "Yamaha YZF-R1"]
var guestlist = ["Hassaan", "Alishna", "Warisha", "John"];
guestlist.forEach(function (guest) {
    console.log(guest, ", you are cordinally invited to dinner!");
});
var connotCome = guestlist[2];
console.log(connotCome, " can't make it ");
var newGuest = "Kinza";
guestlist = guestlist.map(function (guest) { return guest === connotCome ? newGuest : guest; });
guestlist.forEach(function (guest) {
    console.log(guest, ", you are cordinally invited to dinner");
});
