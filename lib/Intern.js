const Employee = require('./Employee');

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