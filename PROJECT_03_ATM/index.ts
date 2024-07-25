#! /usr/bin/env node

console.log("\t\t\t\tATM\t\t\t\t");

import inquirer from "inquirer";
let myBalance = 10000; // in $
let myPin = 1228;
let pinAns = await inquirer.prompt(
    [ //prompt is used to take input from user
    {
       name: "Pin",
       message: "Enter your Pin",
       type:"number"
    }
]
);

if (pinAns.Pin===myPin){
    console.log("Entered Pin is correct ");
    
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select option",
            type: "list" ,
            choices:["withdraw","fast cash","check balance"]
        }
    ]
);
if (operationAns.operation==="withdraw"){
    let amountAns = await inquirer.prompt([
        {
            name:"amount",
            message:"Enter your amount ",
            type: "number"
        }
    ]
);
if(amountAns.amount>myBalance){
    console.log("insufficent balance")
}
else{
myBalance -= amountAns.amount;
console.log("Your remaining balance is " + myBalance);
}
}
else if(operationAns.operation==="fast cash"){
    let fast = await inquirer.prompt(
        [
        {
           name:"fastcash",
           message: "Select the amount which you withdrawal",
           type:"list",
           choices:[1000,2000,5000,10000]
        
        } 
]
);
myBalance -= fast.fastcash;
console.log(`You have successfully withdrawal ${fast.fastcash}\n Your remaining balance is ${myBalance}`)
}
else if(operationAns.operation==="check balance"){
console.log(`your remaining balance is ${myBalance}`)
}
}
else{
    console.log("Incorrect PIN");
}

