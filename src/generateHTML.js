//Export functions
//Include packages needed for this application
const fs = require('fs');

const generateHTML= (template) =>
fs.writeFile(`./dist/my-team.html`, template, function (err) {
  if (err) throw err;
})



module.exports = {generateHTML};