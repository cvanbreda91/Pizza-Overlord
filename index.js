const inquirer = require('inquirer');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');


const questionsEmployee = (data) => {
    //Create an array of questions for user input
    return inquirer.prompt([
      {
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
      },
      {
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
      },
      {
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
      }},
      
    ]).then(({
      //define variables
        name,
        email,
        role
    })=>{
//create template
    //Call functions from Employee.js
   new Employee().getName(name);
   new Employee().getId();
   new Employee().getEmail(email);
   new Employee().getRole(role);

   if (role == 'Manager') {
    return inquirer.prompt ([{
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
          }},
        ]).then(({
            officeNumber,
        }) =>{
            new Manager().getOfficeNumber(officeNumber);
            new Manager().getRole()
        })
          }

   if (role == 'Engineer') {
    return inquirer.prompt ([{
        type: 'text',
        name: 'github',
        message: "What is the Engineer's github username?",
        validate: getGithub => {
            if (getGithub) {
              return true;
            } else {
              console.log("Please enter the Engineer's github username!");
              return false;
            }
          }
          },
        ]).then(({
            github,
        }) =>{
            new Engineer().getGithub(github);
            new Engineer().getRole()
        })
    }
    if (role == 'Intern') {
        return inquirer.prompt ([{
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
              },
            ]).then(({
                school,
            }) =>{
                new Intern().getSchool(school);
                new Intern().getRole()
            })

    }   
})}

//call questions function
questionsEmployee()



