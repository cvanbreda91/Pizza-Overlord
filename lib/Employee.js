const inquirer = require("inquirer");

class Employee {
constructor (name, id = 0, email, role){
this.name = name;
this.id = id;
this.email = email;
this.role = role;
}
getName (name) {

        this.name = new Employee(name)
        
};

getId (id) {
this.id = this.id + 1;
console.log("This employee's ID is "+this.id);

  this.id = new Employee(id)
}
getEmail (email) {

        this.email = new Employee(email);
}

getRole (role) {
   
      this.role = new Employee(role);
};

}




module.exports = Employee