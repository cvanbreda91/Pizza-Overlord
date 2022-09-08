const Intern = require('../lib/Intern.js');

test('creates an intern object', () => {
const intern = new Intern ('Phil',0,'phil@pizza-overlord.com','Manager','Western');
expect(intern.school).toBe('Western');
  });