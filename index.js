// TODO: Include packages needed for this application
const inquirer = require('inquirer')

const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter your project Title:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a brief description:'
    },
    {
        type: 'input',
        name: 'installInstr',
        message: 'Enter installation instructions:'
    },
    {
        type: 'input',
        name: 'usageInfo',
        message: 'Enter usage information:'
    },
    {
        type: 'input',
        name: 'contribGuidelines',
        message: 'Enter contribution guidelines:'
    },
    {
        type: 'input',
        name: 'testInstr',
        message: 'Enter test instructions:'
    },
    {
        type: 'list',
        name: 'licenseChoice',
        message: 'Choose a license for your project:',
        choices: ['Apache License 2.0', 'GNU General Public License (GPL)', 'MIT license']
    },
    {
        type: 'input',
        name: 'githubId',
        message: 'Enter your GitHub username:'
    },
    {
        type: 'input',
        name: 'emailAddr',
        message: 'Enter your email address:'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(answers => generateMarkdown(answers))
}

// Function call to initialize app
init();
