import inquirer from 'inquirer';
import fs from "fs/promises";


let {title, description, license, installation, usage, contributing, test, github, email} = await inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: "Enter a title for your project:",
        },
        {
            type: 'input',
            name: 'description',
            message: "Write a description of your project:",
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license would you like to use?',
            choices: ['Apache', 'Jenkins', 'Nginx'],
        },
        {
            type: 'input',
            name: 'installation',
            message: "Please include any details needed for installation:",
        },
        {
            type: 'input',
            name: 'usage',
            message: "What is the intended usage?",
        },
        {
            type: 'input',
            name: 'contributing',
            message: "Please include any contributors:",
        },
        {
            type: 'input',
            name: 'test',
            message: "Please detail any tests that were done:",
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter your github username:",
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter your email address:",
        },

    ])

let readmeText = `
# ${title}

## Table of Contents
*[Description] #Description
*[License] #License
*[Installation] #Installation
*[Usage] #Usage
*[Contributing] #Contributing
*[Test] #Test
*[Questions] #Questions

## Project Description
${description}

## License
${generateLicense(license)}

## Installation
${installation}

## Usage
${usage}

## Contributing
${contributing}

## Test
${test}

## Questions
If you have any questions regarding this project, please visit my Github profile at ${github} or email me at ${email} for additional information.

`


fs.writeFile("README.md", readmeText)



function generateLicense(license) {
    if (license === "Apache") {
        return `![License](https://img.shields.io/badge/apache-%23D42029.svg?style=for-the-badge&logo=apache&logoColor=white)`
    }
    else if (license === "Jenkins") {
        return `![License](https://img.shields.io/badge/jenkins-%232C5263.svg?style=for-the-badge&logo=jenkins&logoColor=white)`
    }
    else if (license === "Nginx") {
        return `![License](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)`
    }
}