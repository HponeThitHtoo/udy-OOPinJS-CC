// Objects - advanced topics
// Constructors - used to set the initial properties of the object that it creates

"use strict";

function People(fName, lName, age) {
  this.fName = fName;
  this.lName = lName;
  this.age = age;
  if (this.age > 18) {
    this.canVote = true;
  } else {
    this.canVote = false;
  }
  this.fullName = function () {
    return `${this.fName} ${this.lName}`;
  };
}

let person1 = new People("John", "Doe", 40);
// 1. Creates an empty object, assigned to person1 {}
// 2. Calls the constructor function with the arguments given and access the "this" with person1
// 3. Assign the attribute values to the new properties and automatically return the new object with the new properties and values

let person2 = new People("Susan", "Smith", 35);
let person3 = new People("Debra", "Brown", 17);

console.log(person1);
console.log(person2);
console.log(person3);
console.log(person1.fullName());
