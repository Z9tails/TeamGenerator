const Employee = require("../lib/Employee.js");

test("Can instantiate Employee instance", () => {
  const Ned = new Employee();
  expect(typeof Ned).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const name = "Ned";
  const Ned = new Employee(name);
  expect(Ned.name).toBe(name);
});

test("Can set id via constructor argument", () => {
  const nedId = 1;
  const Ned = new Employee("Ned", nedId);
  expect(Ned.id).toBe(nedId);
});

test("Can set email via constructor argument", () => {
  const nedMail = "test@test.com";
  const Ned = new Employee("Ned", 1, nedMail);
  expect(Ned.email).toBe(nedMail);
});

test("Can get name via getName()", () => {
  const Ned2 = "Ned";
  const newNed = new Employee(Ned2);
  expect(newNed.getName()).toBe(Ned2);
});

test("Can get id via getId()", () => {
  const Ned2 = 2;
  const newNed = new Employee("Ned2", Ned2);
  expect(newNed.getId()).toBe(Ned2);
});

test("Can get email via getEmail()", () => {
  const Ned2mail = "test@test.com";
  const newNed = new Employee("Ned2", 2, Ned2mail);
  expect(newNed.getEmail()).toBe(Ned2mail);
});

test('getRole() should return "Employee"', () => {
  const nedEmp = "Employee";
  const newNed = new Employee("Ned2", 1, "test@test.com");
  expect(newNed.getRole()).toBe(nedEmp);
});
