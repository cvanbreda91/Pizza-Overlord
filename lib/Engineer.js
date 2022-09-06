const Employee = require('./Employee');


class Engineer extends Employee {
    constructor (github = ''){
    super();
    this.github = github;
    }
    getGithub (github) {
        this.github = new Engineer(github)};
    
    
    getRole () {
       this.role = `Engineer`;
    }
    
}


module.exports = Engineer;