const Manager = require('../lib/Manager.js')

test('Can Set office number as constructor', () => {
  const testValue = "Office Number";
  const m = new Manager("Manage", 1, "test@test.com", testValue);
  expect(m.office).toBe(testValue);
});

test('getRole() should return "Manager"', () => {
  const testValue = "Manager";
  const m = new Manager("Manage", 1, "test@test.com");
  expect(m.getRole()).toBe(testValue);
});
