const Employee = require('./Employee');
const inquirer = require('inquirer');

class Engineer extends Employee {
    constructor (github = ''){
    super();
    this.github = github;
    }
    getGithub () {
        return inquirer.prompt ({
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
        })
        .then (({ github }) => {
            this.github = new Engineer(github)});
    }
    
    getRole () {
        return Engineer;
    }
    }



module.exports = Engineer;