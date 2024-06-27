//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
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
guestlist.unshift("Doshab");
var middlenum = Math.floor(guestlist.length / 2);
guestlist.splice(middlenum, 0, "Huzaifa");
guestlist.push("Junaid");
guestlist.forEach(function (guest) {
    console.log(guest, ", you are cordinally invited to dinner ");
});
console.log("Unfortunately, the new dinner table won't arrive in time. We can only invite two people for dinner.");
while (guestlist.length > 2) {
    console.log("Sorry," + guestlist.pop() + " i can't invite you to dinner");
}
guestlist.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are still invited to dinner."));
});
guestlist.splice(0, guestlist.length);
console.log("Guest list after dinner: ", guestlist);
