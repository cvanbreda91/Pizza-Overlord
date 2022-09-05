const Employee = require('./Employee');
const inquirer = require("inquirer");

class Manager extends Employee {
    constructor (officeNumber = ''){
    super();
    this.officeNumber = officeNumber;
    }
    getOfficeNumber () {
        return inquirer.prompt ({
            type: 'text',
            name: 'officeNumber',
            message: "What is the Manager's office number?",
            validate: getOfficeNumber => {
                if (getOfficeNumber) {
                  return true;
                } else {
                  console.log("Please enter the Manager's office number!");
                  return false;
                }
              }
        })
        .then (({ officeNumber }) => {
            this.officeNumber = new Manager(officeNumber)});
    
    }
    
    getRole () {
        return Manager;
    }
    }



module.exports = Manager;