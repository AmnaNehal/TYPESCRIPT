//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
// Define an array of countries
var countries = [
    "United States",
    "Canada",
    "Mexico",
    "Brazil",
    "Argentina",
    "United Kingdom",
    "Germany",
    "France",
    "Italy",
    "Spain",
    "Australia",
    "Japan",
    "China",
    "India",
    "South Africa"
];
// Function to display the countries
function displayCountries(countries) {
    countries.forEach(function (country, index) {
        console.log("".concat(index + 1, ". ").concat(country));
    });
}
// Call the function to display the list of countries
displayCountries(countries);
