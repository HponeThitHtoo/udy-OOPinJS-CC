// Classes (ES6) - syntactic sugar

"use strict";

class People {
  constructor(fName, lName) {
    this.fName = fName;
    this.lName = lName;
  }

  fullName() {
    return this.fName + " " + this.lName;
  }
}

let person1 = new People("John", "Doe");
let person2 = new People("Susan", "Smith");
console.log(person1);
console.log(person2);
console.log(person1.fName);
console.log(person2.lName);
console.log(person2.fullName());
