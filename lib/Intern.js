const Employee = require('./Employee');
const inquirer = require('inquirer');

class Intern extends Employee {
    constructor (school = ''){
    super();
    this.school = school;
    }
    getSchool () {
        return inquirer.prompt ({
            type: 'text',
            name: 'school',
            message: "What is the name of the Intern's school?",
            validate: getSchool=> {
                if (getSchool) {
                  return true;
                } else {
                  console.log("Please enter the Intern's school!");
                  return false;
                }
              }
        })
        .then (({ school }) => {
            this.school = new Intern(school)});
    }
    
    getRole () {
        return Intern;
    }
    }



module.exports = Intern;