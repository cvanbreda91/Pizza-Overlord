const Employee = require('./Employee');

class Manager extends Employee {
    constructor (officeNumber = ''){
    super();
    this.officeNumber = officeNumber;
    }
    getGithub () {
    
    }
    
    getRole () {
        return Manager;
    }
    }



module.exports = Manager;