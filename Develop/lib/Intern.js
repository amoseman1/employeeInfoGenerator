//Inherits Employee class
const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        // new to intern
        this.school = school

    }
    getSchool() {
        return this.school
    }
    getRole() {
        return "Intern"
    }
}

//exports the new Intern subclass
module.exports = Intern