// Classes (ES6)
// Class inheritance

"use strict";

class Person {
  constructor(fName, lName, age) {
    this.fName = fName;
    this.lName = lName;
    this.age = age;
  }

  fullName() {
    return `${this.fName} ${this.lName}`;
  }
}

class Major extends Person {
  isMajor() {
    if (this.age > 18) {
      return true;
    } else {
      return false;
    }
  }
}

let person1 = new Major("John", "Doe", 40);
console.log(person1.isMajor());
