#! /usr/bin/env node
import inquirer from "inquirer";
// 1. Computer will generate a random number.
//  2. User input for guessing number.
//  3. Compare user input with computer generated number and shw result.
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guesss a number between 1-10.",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You guessed correct number.");
}
else {
    console.log("Oops! You guessed wrong number.");
}
