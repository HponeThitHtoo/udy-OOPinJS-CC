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

Runner.prototype = Person.prototype;

function Runner(speed, ...args) {
  Person.apply(this, args); // this = runner1, ["Jane", "Doe"] => this.fName = "Jane"; this.lName = "Doe";
  this.speed = speed;
}

Runner.prototype.isTop10 = function () {
  if (this.speed < 5) {
    return `${this.fullName()} is in the top 10`;
  } else {
    return `${this.fullName()} is not in the top 10`;
  }
};

let runner1 = new Runner(4.5, "Jane", "Doe");
console.log(runner1.isTop10());
