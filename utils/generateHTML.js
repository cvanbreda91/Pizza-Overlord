//Export functions
//Include packages needed for this application
const fs = require('fs');

const generateHTML = (data) =>
fs.writeFile(`./dist/my-team.html`, data, function (err) {
  if (err) throw err;
  console.log('Saved!');
})

module.exports = {generateHTML};