import inquirer from 'inquirer';
import fs from "fs/promises";


let {title, description, license} = await inquirer
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
        

    ])

let readmeText = `
# ${title}

## Project Description
${description}

## License
${generateLicense(license)}

### A third-level heading`
    

fs.writeFile("README.md", readmeText)



function generateLicense(license) {
    if (license === "Apache") {
    return  `![License](https://img.shields.io/badge/apache-%23D42029.svg?style=for-the-badge&logo=apache&logoColor=white)`
    }
    else if (license === "Jenkins") {
    return `![License](https://img.shields.io/badge/jenkins-%232C5263.svg?style=for-the-badge&logo=jenkins&logoColor=white)`
    }
    else if (license === "Nginx") {
        return `![License](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)`
        }
}