const Employee = require('./Employee');


class Manager extends Employee {
    constructor (officeNumber = ''){
    super();
    this.officeNumber = officeNumber;
    }
    getOfficeNumber (officeNumber) {
            this.officeNumber = new Manager(officeNumber);
    
    }
    
    getRole () {
        this.role = `Manager`;
    }
    }



module.exports = Manager;