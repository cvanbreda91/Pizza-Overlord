const inquirer = require('inquirer');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const writeFile = require ('./src/generateHTML');
var combinedArray =[];




class QuestionsEmployee  {
        constructor() {
this.managerArray = []
this.engineerArray = []
this.internArray = []
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
        id,
        email,
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
            `${id}`,
            `${email}`,
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
            this.engineerArray.push (new Engineer (
                `${name}`,
                `${id}`,
                `${email}`,
                `Engineer`,
                `${github}`
                ));

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
                this.internArray.push (new Intern (
                    `${name}`,
                    `${id}`,
                    `${email}`,
                    `Intern`,
                    `${school}`
                    ));
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
    repeat,
    cards
  })=>{

 if (repeat == 'yes') {
this.initializeQuestions()
        }
        if (repeat == 'no') {
          combinedArray = [...this.managerArray,...this.engineerArray,...this.internArray];
          const appendCards = () => { 
          cards = 
           `<div class="row">
              <div class="card" style="width: 18rem;">
                <div class="card-header">
                   `+combinedArray[0].name+`
                </div>
                <ul class="list-group list-group-flush">
                 <li class="list-group-item">ID: `+combinedArray[0].id+`</li>
                 <li class="list-group-item" ><a href="mailto:`+combinedArray[0].email+`">email: `+combinedArray[0].email+`</a></li>
                 <li class="list-group-item">Role: `+combinedArray[0].role+`</li>
                 <li class="list-group-item">Office Number: `+combinedArray[0].officeNumber+`</li>
                 </ul>
                </div>
                <div class="card" style="width: 18rem;">
                <div class="card-header">
                   `+combinedArray[1].name+`
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: `+combinedArray[1].id+`</li>
                <li class="list-group-item" ><a href="mailto:`+combinedArray[1].email+`">email: `+combinedArray[1].email+`</a></li>
                <li class="list-group-item">Role: `+combinedArray[1].role+`</li>
                <li class="list-group-item"> <a  target="_blank" href="https://github.com/`+combinedArray[1].github+`">Github: `+combinedArray[1].github+`</a></li>
                 </ul>
                </div>
                <div class="card" style="width: 18rem;">
                <div class="card-header">
                   `+combinedArray[2].name+`
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: `+combinedArray[2].id+`</li>
                <li class="list-group-item" ><a href="mailto:`+combinedArray[2].email+`">email: `+combinedArray[2].email+`</a></li>
                <li class="list-group-item">Role: `+combinedArray[2].role+`</li>
                <li class="list-group-item">School: `+combinedArray[2].school+`</li>
                 </ul>
                </div>
              </div>
            </div>`
           
          }
            appendCards();
          const template =
          `<!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
    <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
    crossorigin="anonymous"/>
    <link rel="stylesheet" href="./assets/css/style.css">
              <title>My Team</title>
          </head>
          <body>
              <header>
                  <h1>My Team</h1>
              </header>
              <main>
              ${cards}
            </main>
          </body>
          </html> `;
          writeFile.generateHTML(template);

            console.log("saved")

                    }
})

})}}





new QuestionsEmployee().initializeQuestions()


