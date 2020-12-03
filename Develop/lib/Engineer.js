// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(github) {
        //variables new to intern
        this.github = github;

        //super, inheritance params from employee class
        super(name, id, email)
    }
}

const engineer = new Engineer(//parameters)

    module.exports = //variable associated with new function  or class name ?? engineer?