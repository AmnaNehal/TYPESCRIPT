#! /usr/bin/env node

import inquirer from "inquirer";
console.log("\t\t\t\t NUMBER GUESSING GAME ");
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        message: "Please guess a number between 1 and 10 : ",
        name: "userGuessNumber",
        type: "input",
    },
]);
const userGuessNumber = parseInt(answers.userGuessNumber, 10); // Convert the input to a number
if (userGuessNumber === randomNumber) {
    console.log("Congratulations! You guessed the right number.");
}
else {
    console.log("You guessed the wrong number.");
}
