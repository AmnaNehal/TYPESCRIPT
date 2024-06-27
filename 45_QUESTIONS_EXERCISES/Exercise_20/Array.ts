//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

// Define an array of countries
let countries: string[] = [
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
  function displayCountries(countries: string[]) {
    countries.forEach((country, index) => {
      console.log(`${index + 1}. ${country}`);
    });
  }
  
  // Call the function to display the list of countries
  displayCountries(countries);
  