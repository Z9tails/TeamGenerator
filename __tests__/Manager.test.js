const Manager = require('../lib/Manager.js')

test('Can Set phone number as constructor', () => {
  const testValue = 101;
  const m = new Manager("Manage", 1, "test@test.com", testValue);
  expect(m.phoneNum).toBe(testValue);
});

test('getRole() should return "Manager"', () => {
  const testValue = "Manager";
  const m = new Manager("Manage", 1, "test@test.com");
  expect(m.getRole()).toBe(testValue);
});
 