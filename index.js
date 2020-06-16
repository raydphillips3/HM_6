const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");


const badges = [
    {badgeName: ["Apache", "BSD", "ISC", "MIT", "Mozilla", "The_Unlicense"]}, 
    {url: ["[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
     "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
     "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
     "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
     "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
     "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
    ]}];
     
var writeJSON = function(readme) {
    console.log(readme);
    //var text = JSON.stringify(readme, null, null);
    fs.writeFile("README2.md", readme, function(err) {
        if (err) {
            throw Error("something went wrong" + err.message);
        }
       
            });
    };
inquirer
    .prompt([
        {
            type: "input",
            message: "What is the title of your project?",
            name: "title"
        },
        {
            type: "input",
            message: "What does your project do? Please provide a desciption of you project.",
            name: "description"
        },
        
        {
            type: "input",
            message: "Are there any installation intructions?",
            name: "installation"
        },
        {
            type: "input",
            message: "How can/will your project be used?",
            name: "usage"
        },
        {
            type: "list",
            message: "Which license is the application is covered under?",
            name: "license",
            choices: [
                "Apache",
                "BSD",
                "ISC",
                "MIT",
                "Mozilla",
                "The_Unlicense",
                "None"
              ]
        },
        {
            type: "input",
            message: "Who are the contributors to this project?",
            name: "contributors"
        },
        {
            type: "input",
            message: "Are there test intructions?",
            name: "test"
        },
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "username"
        }

    ]).then(function(resp) {
        //generate template
        console.log(resp.license);
        var badgeId = resp.license;
        for (i = 0; i < 6; i++) {
            var frmArray = badges[0].badgeName[i];
            if (badgeId === frmArray) {
               console.log("This is the frmArray variable - " + frmArray);
                console.log(frmArray + ": This is the URL: " + badges[1].url[i]);
               break;
            }
        }
        var readme = 
        `${badges[1].url[i]}

# ${resp.title}

## Description:
### ${resp.description}

## Table Of Contents
### 1. [Installation Instructions](#Installation-Instructions)
### 2. [Usage](#Usage)
### 3. [Test Instructions](#Test-Instructions)
### 4. [License](#License)

    
## The contributers to this project are:
   ${resp.contributors}
## Quuestions:
### My GitHub profile is located at <a href="https://github.com/${resp.username}">github.com/${resp.username}</a>
### If you have additional questions, you can reach me directly at raydphillips3@gmail.com

## Installation Instructions
    ${resp.installation}
## Usage 
    ${resp.usage}
## Test Instructions
    ${resp.test}
## License
    ${resp.license}`

        writeJSON(readme);

    });