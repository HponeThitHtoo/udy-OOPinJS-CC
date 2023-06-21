// Advanced objects
// getters and setters
// data method - usual & accessor method - getter (access the property) and setter (change or assign value to property)
// get propertyName() {return}, set propertyName(prop) {this.prop = prop}
// Does NOT create private properties

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
