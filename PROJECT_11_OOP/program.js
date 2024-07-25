"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var person_1 = require("/TYPESCRIPT/PROJECTS/OOP/OPP_10/person");
var Student_1 = require("/TYPESCRIPT/PROJECTS/OOP/OPP_10/Student");
var Program = /** @class */ (function () {
    function Program() {
    }
    Program.main = function () {
        var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question("Type 1 if you like to talk to others and type 2 if you would rather keep to yourself: ", function (input) {
            try {
                var answer = parseInt(input);
                if (isNaN(answer))
                    throw new Error("Not a number");
                var myPerson = new person_1.Person();
                myPerson.askQuestion(answer);
                console.log("You are: " + myPerson.getPersonality());
                rl.question("What is your name: ", function (nameInput) {
                    var myStudent = new Student_1.Student();
                    myStudent.name = nameInput;
                    console.log("Your Name is: " + myStudent.name + " and your personality type is " + myStudent.getPersonality());
                    rl.close();
                });
            }
            catch (error) {
                console.error("Please enter an integer value: ");
                rl.close();
            }
        });
    };
    return Program;
}());
Program.main();
