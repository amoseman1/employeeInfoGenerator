const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");                       //outputPath
const outputPath = path.join(OUTPUT_DIR, "team.html"); // our writefile file, name of the file, data is the render method with employee array passed into it

const render = require("./lib/htmlRenderer");
const { listenerCount } = require("process");

//created empty array for employees to get pushed to
const employeeArr = []

//takes the data from the input and pushes the newly created employee role to the array above 
function createManager() {
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
            type: "input",
            name: "officeNumber",
            message: "What is your office number?"
        },

    ]).then((answers) => {   //create new manager object on employee class with the users input
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        employeeArr.push(manager);
        addTeamMember();
    })

};

function createIntern() {
    inquirer.prompt([

        {
            type: "input",
            name: "name",
            message: "What is the intern's name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is their id?",

        },
        {
            type: "input",
            name: "email",
            message: "What is their email?",
        },
        {
            type: "input",
            name: "school",
            message: "What is the name of their school?",
        },

    ]).then((answers) => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        employeeArr.push(intern);
        addTeamMember();
    })

};

function createEngineer() {
    inquirer.prompt([

        {
            type: "input",
            name: "name",
            message: "What is the engineer's name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is their id?",

        },
        {
            type: "input",
            name: "email",
            message: "What is their email?",
        },
        {
            type: "input",
            name: "github",
            message: "What is their Github username?",
        },

    ]).then((answers) => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        employeeArr.push(engineer);
        addTeamMember();
    })

};

function addTeamMember() {
    inquirer.prompt([

        {
            type: "list",
            name: "employeeRole",
            message: "What type of employee would you like to add?",
            choices: ["Intern", "Engineer", "Manager", "None"]

        }

    ]).then((answers) => {
        if (answers.employeeRole === "Intern") {
            createIntern();
        } else if (answers.employeeRole === "Engineer") {
            createEngineer();
        } else if (answers.employeeRole === "Manager") {
            createManager();   ///is this necessary?
        } else { buildTeam() };
    })
};

function buildTeam() {
    //const outputPath = path.join(OUTPUT_DIR, "team.html"); // our writefile file, name of the file, data is the render method with employee array passed into it
    //call render and passs in info with writefile
    //filepath stored in a var  //data being put in file
    fs.writeFile(outputPath, render(employeeArr), (err) => {
        if (err) throw err;
    })
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
