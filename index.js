const inquirer = require('inquirer');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const fs = require('fs');
const writeFile = require ('./utils/generateHTML');



class QuestionsEmployee  {
        constructor() {
this.managerArray = []
        }

    initializeQuestions(){
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
        type: 'text',
        name: 'id',
        message: "What is the employee's unique ID?",
        validate: getId => {
            if (getId) {
              return true;
            } else {
              console.log("Please enter the employee's ID!");
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
        id,
        role,
    })=>{

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
           this.managerArray.push (new Manager (
            `${name}`,
            `${email}`,
            `${id}`,
            `Manager`,
            `${officeNumber}`
            ));


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
}).then(()=>{ return inquirer.prompt([
    {
      type: 'checkbox',
      name: 'repeat',
      message: 'Would you like to add another team member?',
      choices: ['yes','no'],
      validate: getRepeat => {
          if (getRepeat) {
            return true;
          } else {
            console.log('Please choose an option!');
            return false;
          }
    }
}
  ]).then(({
    //define variables
    repeat
  })=>{

 if (repeat == 'yes') {
this.initializeQuestions()
        }
        if (repeat == 'no') {
            console.log(this.managerArray[0]);
            console.table(this.managerArray);
            console.log(this.managerArray[1])
                    }
})
.then(()=>{
const template =`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
</head>
<body>
    <header>
        My Team
    </header>
    <div class="cards" id = "card">
    </div>
</body>
    
</body>
</html>`;

writeFile.generateHTML(template)
});

})}}

new QuestionsEmployee().initializeQuestions()

//ask if user would like to enter more team members
//if finished, generate HTML



