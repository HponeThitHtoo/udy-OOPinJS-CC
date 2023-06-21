// Classes (ES6)
// Method chaining

"use strict";

class Person {
  constructor(fName, lName, age) {
    this.fName = fName;
    this.lName = lName;
    this.age = age;
  }

  isMajor() {
    if (this.age > 18) {
      console.log("Major");
    } else {
      console.log("Minor");
    }
    return this;
  }

  fullName() {
    console.log(`${this.fName} ${this.lName}`);
    return this;
  }
}

let person1 = new Person("John", "Doe", 40);

person1.isMajor().fullName();
person1.fullName().isMajor();
