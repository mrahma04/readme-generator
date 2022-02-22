// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const generateMarkdown = require('./src/readme-template.js')
const generateReadme = require('./utils/generate-readme.js')
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
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['GNU GPLv3', 'MIT License']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    // inquirer.prompt(questions)
    //     .then(answers => {
    //         const getMdText = generateMarkdown(answers)
    //         fs.writeFile('README.md', getMdText, err => {
    //             if (err) {
    //                 console.log(err)
    //                 return
    //             } else {
    //                 console.log('README.md file generated successfully!')
    //                 return
    //             }
    //         })
    //     })

    inquirer.prompt(questions)
        .then(answers => generateMarkdown(answers))
        .then(txt => generateReadme.writeFile(txt))
        .catch(err => console.log(err))
}

// Function call to initialize app
init();