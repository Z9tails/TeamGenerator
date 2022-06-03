const Intern = require('../lib/Intern.js')

test("Can set School via constructor", () => {
  const testValue = "School";
  const i = new Intern("Int", 1, "test@test.com", testValue);
  expect(i.school).toBe(testValue);
});

test('getRole() should return "Intern"', () => {
  const testValue = "Intern";
  const i = new Intern("Int", 1, "test@test.com", "Intern");
  expect(i.getRole()).toBe(testValue);
});
