#! /usr/bin/env node
console.log("\t\t\t\tSTUDENT MANAGEMENT SYSTEM\t\t\t\t");



import inquirer from "inquirer"

const randomNumber: number = Math.floor(10000 + Math.random()* 90000)
//for checking
//console.log(randomNumber);

let myBalance: number = 0
let answer = await inquirer.prompt(
    [
        {
            name:"Students",
            type: "input",
            message: "Enter student name",
            validate: function(value){
                if (value.trim()!==""){
                    return true;

                }
               return "Please enter non-empty value.";
            },

        },
        {
        name:"courses",
        type:"list",
        message:"Select the courses to enrolled",
        choices: ["MS office", "HTML","JAVA","Typescript"]
    
        }
    ]
);

const tutionfee: {[key:string]: number}={
    "MS office" : 2000,
    "HTML" : 2500,
    "JAVA" : 5000,
    "Typescript": 6000
};

console.log(`\n Tution Fees: ${tutionfee[answer.courses]}/-\n`);
console.log(`Balance ${myBalance}\n`);

let paymentType = await inquirer.prompt([
    {
       name: "payment",
       type:"list",
       message: "Select payment type:",
       choices:["Bank transfer","Easypaisa","Jazzcash"]
    },
    {
        name: "amount",
        type:"input",
        message: "Transfer money: ",
        validate:function(value){
            if(value.trim()!==""){
                return true;
        
            }
            return"Please enter a non empty value";
        },
    },
]);
console.log(`\nYou select payment method ${paymentType.payment}\n`);

const tutionFees = tutionfee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount);

if(tutionFees===paymentAmount){
    console.log(`Congratulations! you have successfully enrolled in ${answer.courses}.\n`)
let ans = await inquirer.prompt([
    {
      name: "select",
      type: "list",
      message: "What would you like to do next?",
      choices: ["View Status", "Exit"]
}])
if ( ans.select === "View Status"){
    console.log("\n****Status****\n");
    console.log(`Student name: ${answer.student}`);
    console.log(`Student ID: ${randomNumber}`);
    console.log(`Courses:${answer.courses} `);
    console.log(`Tution fees paid: ${paymentAmount}`);
    console.log(`Balance: ${myBalance += paymentAmount}`);
       
}
else{
    console.log("\n Exiting student managment system ");
}
}
else{
    console.log("Invalid amount for course");
}






