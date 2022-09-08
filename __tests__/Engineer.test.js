const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
const engineer = new Engineer ('Phil',0,'phil@pizza-overlord.com','Manager','lalauser');
expect(engineer.github).toBe('lalauser');
  });