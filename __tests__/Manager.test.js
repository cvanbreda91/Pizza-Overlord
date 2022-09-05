const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
const manager = new Manager ('2000');
expect(manager.officeNumber).toBe('2000');
  });