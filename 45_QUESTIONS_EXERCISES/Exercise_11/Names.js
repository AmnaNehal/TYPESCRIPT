//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
var friendsName = ["Kinza", "Alishna", "Aiza", "Warisha"];
var i = 0;
for (i; i < friendsName.length; i++) {
    console.log(friendsName[i]);
}
friendsName.forEach(function (element) {
    console.log(element);
});
