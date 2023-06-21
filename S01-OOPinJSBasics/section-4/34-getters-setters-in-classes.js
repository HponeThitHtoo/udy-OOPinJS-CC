// Classes (ES6) - syntactic sugar
// Getters and Setters

"use strict";

let People = class {
  set fName(f) {
    this.f = f;
  }

  get fName() {
    return this.f;
  }

  set lName(l) {
    this.l = l;
  }

  get lName() {
    return this.l;
  }

  fullName() {
    return `${this.f} ${this.l}`;
  }
};

let person1 = new People();
console.log(person1);
person1.fName = "John";
person1.lName = "Doe";
console.log(person1.fName);
console.log(person1.lName);
console.log(person1.fullName());
console.log(person1.f);
console.log(person1.l);
