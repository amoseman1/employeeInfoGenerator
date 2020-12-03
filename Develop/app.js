const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html"); // our writefile file, name of the file, data is the render method with employee array passed into it

const render = require("./lib/htmlRenderer");
const { listenerCount } = require("process");
const employeeArr = []

 function createManager() {
    inquirer.prompt ([

    ]) .then((answers) => {  ///make sure order is correct
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        employeeArr.push(manager);
        addTeamMember();
    })

}
function createIntern() {
    inquirer.prompt ([

    ])

}
function createEngineer() {
    inquirer.prompt ([
        
    ])

}
function addTeamMember() {
    inquirer.prompt ([
        {
            type: "list",
            name: "employeeRole",
            message: "What type of employee would you like to add?",
            choices: ["Intern", "Engineer", "None"]

        }

    ]) . then((answers) => {
        if (answers.employeeRole === "Intern") {
            createIntern()
        } //none --> build team function
    })
   }


   inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is your name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is your id?",

    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
    },
    {
        type: "list",
        name: "role",
        message: "What is your role in the company?",
        choices: ["Intern", "Engineer", "Manager"],
    },
    {
        type: "input",
        name: "school",
        message: "What is the name of your school?",
    },
    {
        type: "input",
        name: "github",
        message: "What is your Github username?",
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is your office number?"
    },
    
]);

.then(answers => {
    // Use user feedback for... whatever!!
})
    .catch(error => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else when wrong
        }
    });

    function buildTeam() {
        //call render and passs in info with writefile
    }

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
