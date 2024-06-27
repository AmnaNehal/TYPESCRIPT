//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function show_magicians(magician) {
    magician.forEach(function (magicianname) {
        console.log(magicianname);
    });
}
function make_greate(magicians:string[]):string[] {
    let great=magicians.map( magician =>`The Great ${magician}`);
    return great;
}

let magicians:string[] = ["Amna", "john", "Bob"];


console.log("Original magicians: ");
show_magicians(magicians);


console.log("\nGreat Magicians:");
let call_magician =make_greate([...magicians]);
show_magicians(call_magician);
