// Prototype Inheritance
// Inheritance properties and methods of another constructor/prototype - save a lot of time and space
// Object 1 => Object 2 => Object 3

"use strict";

function Person(fName, lName) {
  this.fName = fName;
  this.lName = lName;
}

Person.prototype.fullName = function () {
  return `${this.fName} ${this.lName}`;
};

function Runner(speed, ...args) {
  Person.apply(this, args);
  this.speed = speed;
}

Runner.prototype.isTop10 = function () {
  if (this.speed < 5) {
    return `${this.fName} is in the top 10`;
  } else {
    return `The runner is not in the top 10`;
  }
};

let person1 = new Person("John", "Doe");
let runner1 = new Runner(4.5, "Jane", "Doe");
let perosn2 = new Person("Gary", "Smith");
let runner2 = new Runner(6);

runner1.__proto__ = person1.__proto__;
console.log(runner1);
console.log(runner1.fullName());
// console.log(runner1.isTop10()); // Uncaught TypeError: runner1.isTop10 is not a function
console.log(runner2);
// console.log(runner2.fullName()); // Uncaught TypeError: runner2.fullName is not a function
console.log(runner2.isTop10());
