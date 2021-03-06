//inherits Employee class
const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        //new to Engineer
        this.github = github;
    }
    getGithub() {
        return this.github
    }
    getRole() {
        return "Engineer"
    }
}

//exports new Engineer subClass 
module.exports = Engineer 