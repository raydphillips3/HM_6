const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");
const url = "https://api.github.com/";

var writeJSON = function(response1) {
    var text = JSON.stringify(response1, null, 2);
    fs.writeFile("README2.md", text, function(err) {
        if (err) {
            throw Error("something went wrong" + err.message);
        }
        console.log(response1.title);
        axios.get(url)
            .then(function(response) {
                (console.log(response))
                .catch(error => console.log("Error: ", error))
                console.log("Yes!!!");
            });
    });
}

inquirer
    .prompt([
        {
            type: "input",
            message: "What is the title of your project?",
            name: "title"
        },
        {
            type: "input",
            message: "What  your project do? Please provide a desciption of you project.",
            name: "description"
        },
        {
            type: "input",
            message: "Please list your table of contents.",
            name: "table"
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
                "Apache 2.0",
                "BSD",
                "GPL 3.0",
                "ISC",
                "MIT",
                "Mozilla",
                "The Unlicense",
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
            message: "If you have any questions pleae contact Ray Phillips",
            name: "questions"
        }

    ]).then(function(response1) {
        console.log(response1);
        writeJSON(response1);
    });