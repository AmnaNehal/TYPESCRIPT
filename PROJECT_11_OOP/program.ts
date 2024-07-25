import * as readline from 'readline';
import { Person } from '/TYPESCRIPT/PROJECTS/OOP/OPP_10/person';
import { Student } from '/TYPESCRIPT/PROJECTS/OOP/OPP_10/Student';

class Program {
    static main(): void {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question("Type 1 if you like to talk to others and type 2 if you would rather keep to yourself: ", (input) => {
            try {
                const answer = parseInt(input);

                if (isNaN(answer)) throw new Error("Not a number");

                const myPerson = new Person();
                myPerson.askQuestion(answer);
                console.log("You are: " + myPerson.getPersonality());

                rl.question("What is your name: ", (nameInput) => {
                    const myStudent = new Student();
                    myStudent.name = nameInput;
                    console.log("Your Name is: " + myStudent.name + " and your personality type is " + myStudent.getPersonality());
                    rl.close();
                });

            } catch (error) {
                console.error("Please enter an integer value: ");
                rl.close();
            }
        });
    }
}

Program.main();
