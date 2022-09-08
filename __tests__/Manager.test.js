const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
const manager = new Manager ('Phil',0,'phil@pizza-overlord.com','Manager','2000');
expect(manager.officeNumber).toBe('2000');
  });