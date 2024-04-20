#! usr/bin/env node
import inquirer from "inquirer";
// import a constant "answer" and assign it to the result of inquirer.prompt function
const Answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word:",
    }
]);
// Print the array of words to the console
const words = Answers.Sentence.trim().split(" ");
console.log(words);
// Print the word count of the sentence to the console
console.log(`Your sentence word count is ${words.length}`);
