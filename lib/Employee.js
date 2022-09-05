const inquirer = require("inquirer");

class Employee {
constructor (name, id = 0, email, role){
this.name = name;
this.id = id;
this.email = email;
this.role = role;
}
getName (name) {
    return inquirer.prompt ({
        type: 'text',
        name: 'name',
        message: "What is the employee's name? (First and Last)",
        validate: getName => {
            if (getName) {
              return true;
            } else {
              console.log("Please enter the employee's name!");
              return false;
            }
          }
    })
    .then (({ name }) => {
        this.name = new Employee(name)});
}
getId (id) {
this.id += 1;
console.log(this.id)
}

getEmail () {
    return inquirer.prompt ({
        type: 'text',
        name: 'email',
        message: "What is the employee's email?",
        validate: getEmail => {
            if (getEmail) {
              return true;
            } else {
              console.log("Please enter the employee's email!");
              return false;
            }
          }
    })
    .then (({ email }) => {
        this.email = new Employee(email)});
}

getRole () {
    return inquirer.prompt ({
        type: 'checkbox',
        name: 'role',
        message: 'Please choose the role this employee performs',
        choices: ['Manager','Engineer','Intern'],
        validate: getRole => {
            if (getRole) {
              return true;
            } else {
              console.log('Please choose a role!');
              return false;
            }
          }
    })
}
}


module.exports = Employee;