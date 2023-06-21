// Classes (ES6)
// Class inheritance - overriding methods and properties in classes
// method overriding - super

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

  isMajor() {
    return this.age > 18 ? "Major" : "Minor";
  }
}

class Major extends Person {
  isMajor() {
    /* console.log(this.age > 18 ? "true" : "false");
    return super.isMajor(); */

    console.log(super.isMajor());
    return this.age > 18 ? "true" : "false";
  }
}

let person1 = new Major("John", "Doe", 40);
console.log(person1.isMajor());
