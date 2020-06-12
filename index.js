var inquirer = require("inquirer");

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
            type: "rawlist",
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
            type: "input",
            message: "Which license is the application is covered under?",
            name: "license"
        },
        {
            type: "list",
            message: "Who are the contributors to this project?",
            name: "contributors"
        },
        {
            type: "rawlist",
            message: "Are there test intructions?",
            name: "test"
        },
        {
            type: "",
            message: "",
            name: "questions"
        }

    ])