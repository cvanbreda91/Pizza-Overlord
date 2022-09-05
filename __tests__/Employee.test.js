const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
const employee = new Employee ('Phil',0,'phil@pizza-overlord.com','Manager')
expect(employee.name).toBe('Phil');
expect(employee.id).toEqual(0);
expect(employee.email).toBe('phil@pizza-overlord.com');
expect(employee.role).toBe('Manager');
  });