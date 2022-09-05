const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
const engineer = new Engineer ('lalauser');
expect(engineer.github).toBe('lalauser');
  });