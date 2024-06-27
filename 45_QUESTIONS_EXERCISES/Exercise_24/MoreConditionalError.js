// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// Tests for equality and inequality with strings

var string1 = "hello";
var string2 = "world";
console.log("Equality test for strings:");
console.log(string1 === "hello"); // True
console.log(string1 === string2); // False
console.log("Inequality test for strings:");
console.log(string1 !== "world"); // True
console.log(string1 !== string2); // True
// Tests using the toLowerCase function
var str1 = "HELLO";
var str2 = "hello";
console.log("Lowercase test:");
console.log(str1.toLowerCase() === str2); // True
// Numerical tests
var num1 = 10;
var num2 = 5;
console.log("Numerical equality and inequality tests:");
console.log(num1 === 10); // True
console.log(num1 !== num2); // True
console.log("Greater than and less than tests:");
console.log(num1 > num2); // True
console.log(num1 < num2); // False
console.log("Greater than or equal to and less than or equal to tests:");
console.log(num1 >= 10); // True
console.log(num2 <= 5); // True
// Tests using "and" and "or" operators
var x = 5;
var y = 10;
var z = 15;
console.log("Logical AND and OR tests:");
console.log(x < y && y < z); // True (both conditions are true)
console.log(x < y || y > z); // True (at least one condition is true)
// Test whether an item is in an array
var fruits = ["apple", "banana", "orange", "grape"];
console.log("Array inclusion test:");
console.log(fruits.includes("banana")); // True
console.log(fruits.includes("watermelon")); // False
// Test whether an item is not in an array
console.log("Array exclusion test:");
console.log(!fruits.includes("pear")); // True (pear is not in the array)
console.log(!fruits.includes("orange")); // False (orange is in the array)
