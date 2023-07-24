// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
//const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your README?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please provide instructions for use:',
        name: 'usage',
    },
    {
        type: 'list',
        choices: ['MIT', 'Apache', 'ISC', 'Unlicense', 'None'],
        message: 'What license are you using?',
        name: 'license'
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines?',
        name: 'contributionGuidelines',
    },
    {
        type: 'input',
        message: 'How do you run tests for this project?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What licenses are included in this project?',
        name: 'license',
    },
    {
        type: 'input',
        message: 'GitHub username: ',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Email: ',
        name: 'email',
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
        err ? console.error(err) : console.log('Commit logged!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) =>
        writeToFile('myREADME.md', generateMarkdown(response))
    );
}

// Function call to initialize app
init();

