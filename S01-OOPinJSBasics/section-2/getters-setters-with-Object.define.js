// Advanced objects
// getters and setters - Object.define

"use strict";

let person = {
  set fName(f) {
    this.f = f; // inner variable
  },

  get fName() {
    return this.f;
  },

  set lName(l) {
    this.l = l; // inner variable
  },

  get lName() {
    return this.l;
  },
};

console.log(person);
person.fName = "John";
person.lName = "Doe";
console.log(person);
console.log(person.fName);
console.log(person.lName);

Object.defineProperty(person, "age", {
  set(a) {
    this.a = a;
  },
  get() {
    return this.a;
  },
});

person.age = 40;
console.log(person.age);
