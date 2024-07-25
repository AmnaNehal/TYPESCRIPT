#! /usr/bin/env node
console.log("\t\t\t\tTODO LIST\t\t\t\t");

import inquirer from "inquirer";

const currency: any = {
  USD: 1, //Base currency
  EUR: 0.91,
  GBP: 0.76,
  INR: 74.57,
  PKR: 280,
};

let user_answer = await inquirer.prompt([
  {
    name: "from",
    message: "Enter from currenecy",
    type: "list",
    choices: ["USD", "EUR", "GBP", "INR", "PKR"],
  },
  {
    name: "to",
    message: "Enter to currenecy",
    type: "list",
    choices: ["USD", "EUR", "GBP", "INR", "PKR"],
  },
  {
    name: "amount",
    message: "Enter your amount",
    type: "number",
  },
]);

let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount; //converting user currency into base currency
let convertAmount = baseAmount * toAmount; //exchange currency

console.log(Math.round(convertAmount));
