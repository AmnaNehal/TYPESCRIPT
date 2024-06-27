//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magician) {
    magician.forEach(function (magicianname) {
        console.log(magicianname);
    });
}
var margicians = ["Amna", "john", "Bob"];
show_magicians(margicians);
