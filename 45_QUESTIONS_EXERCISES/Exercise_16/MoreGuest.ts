//You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.Vehicles = ["Tesla Model S", "Ducati Monster", "Boeing 747", "Yamaha YZF-R1"]
let guestlist=["Hassaan","Alishna","Warisha","John"];
guestlist.forEach(guest=>{
    console.log(guest,", you are cordinally invited to dinner!")})

let connotCome=guestlist[2];
console.log(connotCome," can't make it ");

let newGuest="Kinza";
guestlist = guestlist.map(guest => guest === connotCome? newGuest : guest);

guestlist.forEach(guest=>{
    console.log(guest,", you are cordinally invited to dinner")
});

guestlist.unshift("Doshab");

let middlenum=Math.floor(guestlist.length/2);
guestlist.splice(middlenum,0,"Huzaifa");

guestlist.push("Junaid");

guestlist.forEach(guest=>{
    console.log(guest,", you are cordinally invited to dinner ")
});
