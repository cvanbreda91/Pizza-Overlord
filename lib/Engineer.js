const Employee = require('./Employee');


class Engineer extends Employee {
    constructor (name,id,email,role,github){
    super(name,id,email,role);
    this.github = github;
    }
    getGithub (github) {
        return github;}
    
    
    getRole () {
       return `Engineer`;
    }
    
}


module.exports = Engineer;