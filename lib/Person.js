module.exports = class Person {
  constructor(firstName, lastName, isLeftHanded = false) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.isLeftHanded = isLeftHanded;
  }

  toString() {
    return `[Object Person] ${this.firstName} ${this.lastName} (${this.isLeftHanded})`;
  }
}



























  // constructor({
  //   firstName = "<no name>",
  //   lastName = "<no name>",
  //   birthDate = new Date().now} = {})
