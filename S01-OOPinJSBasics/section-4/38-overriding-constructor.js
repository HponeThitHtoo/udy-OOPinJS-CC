// Classes (ES6)
// Class inheritance - overriding methods and properties in classes
// overriding a constructor

"use strict";

class Person {
  constructor(fName, lName) {
    this.fName = fName;
    this.lName = lName;
  }

  fullName() {
    return `${this.fName} ${this.lName}`;
  }
}

class Major extends Person {
  constructor(fName, lName, age) {
    super(fName, lName);
    this.age = age;
  }

  isMajor() {
    return this.age > 18 ? "true" : "false";
  }
}

let person1 = new Major("John", "Doe", 40);
console.log(person1.isMajor());
console.log(person1.fName);
console.log(person1.fullName());
