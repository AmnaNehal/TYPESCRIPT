#! /usr/bin/env node

console.log("\t\t\t\tSIMPLE CALCULATOR\t\t\t\t");
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "SecondNumber" },
  {
    message: "Select one of the operators to perform action",
    type: "list",
    name: "operator",
    choices: ["Addition","Subtraction","Multiplication","Division"],
  },
]);

if(answer.operator === "Addition"){
  console.log(`The addition of ${answer.firstNumber} and ${answer.SecondNumber} is: ` + (answer.firstNumber + answer.SecondNumber));
}
else if(answer.operator === "Subtraction"){
  console.log(`The subtraction of ${answer.firstNumber} and ${answer.SecondNumber} is: ` + (answer.firstNumber - answer.SecondNumber));
}
else if(answer.operator === "Multiplication"){
  console.log(`The multiplication of ${answer.firstNumber} and ${answer.SecondNumber} is: `+ (answer.firstNumber * answer.SecondNumber));
}
else if(answer.operator === "Division"){
  console.log(`The division of ${answer.firstNumber} and ${answer.SecondNumber} is: `+ (answer.firstNumber / answer.SecondNumber));
}
else{
  console.log("Invalid Operator! , Please select valid operator");
}

