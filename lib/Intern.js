const Employee = require('./Employee');
const inquirer = require('inquirer');

class Intern extends Employee {
    constructor (school = ''){
    super();
    this.school = school;
    }
    getSchool (school) {
    this.school = new Intern(school)};
    
    
    getRole () {
        this.role = `Intern`;
    }
    }



module.exports = Intern;