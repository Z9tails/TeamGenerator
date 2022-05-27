const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, phoneNum) {
    super(name, id, email);
    this.phoneNum = phoneNum;
  }
  getphoneNum() {
    return this.phoneNum;
  }

  getRole() {
    return "Manager";
  }
}
module.exports = Manager;
