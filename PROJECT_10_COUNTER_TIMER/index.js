#! /usr/bin/env node
console.log("\t\t\t\tCOUNTDOWN TIMER\t\t\t\t");
//In this project you will build a countdown timer using date module
import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";
//take input from user
const res = await inquirer.prompt({
    name: "userInput",
    type: "number",
    message: "Please enter the amount of second",
    validate: (input) => {
        if (isNaN(input)) {
            return "please enter valid number";
        }
        else if (input > 60) {
            return "Seconds must be in 60";
        }
        else {
            return true;
        }
    }
});
let input = res.userInput;
//function that updates after every second
function startTime(val) {
    const intTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(intTime);
    setInterval((() => {
        const currTime = new Date();
        const timeDiff = differenceInSeconds(intervalTime, currTime);
        if (timeDiff <= 0) {
            console.log("Timer has expired");
            process.exit();
        }
        const min = Math.floor((timeDiff % (3600 * 24)) / 3600);
        const sec = Math.floor(timeDiff % 60);
        console.log(`${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`);
    }), 1000);
}
startTime(input);
