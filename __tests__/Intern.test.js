const Intern = require('../lib/Intern.js');

test('creates an intern object', () => {
const intern = new Intern ('Western');
expect(intern.school).toBe('Western');
  });