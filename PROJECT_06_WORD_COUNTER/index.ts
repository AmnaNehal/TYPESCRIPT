#! /usr/bin/env node
console.log("\t\t\t\tWORD COUNTER\t\t\t\t");

import inquirer from "inquirer";

const answers:{
    Sentence: string
    } = await inquirer.prompt ([
        {
          name: "Sentence",
          type: "input",
          message: "Enter your sentence to count the word: "

        }

    ])
    const words = answers.Sentence.trim().split(" ")
console.log(words);

// for counting length of words
console.log(`Your sentence word count is ${words.length}`)