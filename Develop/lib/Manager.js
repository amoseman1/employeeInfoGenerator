// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);    // this is new to creating a manager class   ???????
        //variables new to manager
        this.officeNumber = officeNumber

    }
    getOfficeNumber() {
        return this.officeNumber
    }
    getRole() {
        return "Manager"
    }
}

module.exports = Manager//variable of new function ?????? managerClass