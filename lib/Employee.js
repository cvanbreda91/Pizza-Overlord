const inquirer = require("inquirer");

class Employee {
constructor (name, id, email, role){
this.name = name;
this.id = id;
this.email = email;
this.role = role;
}
getName (name) {
        return name
        
};

getId (id) {
return id

}
getEmail (email) {

        return email

}

getRole (role) {
   
      return role

};

}


module.exports = Employee