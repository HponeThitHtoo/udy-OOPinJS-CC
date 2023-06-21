// Prototypes and prototype inheritance
// Prototypes Chain

"use strict";

function People(fName, lName) {
  this.fName = fName;
  this.lName = lName;
}

People.prototype.fullName = function () {
  return `${this.fName} ${this.lName}`;
};

let person1 = new People("John", "Doe");
let person2 = new People("Susan", "Smith");

let arr = [1, 2, 3];

let str = new String("Hello");

console.log(person1.__proto__ === People.prototype);

person1.__proto__.hello = function () {
  console.log("Hello there!");
};

console.log(person1);
console.log(person2);

/*** prototype chain  ***/
// null => Global Object => Array, String, ... => User defined objects (str, arr, obj, People, temp, etc)
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__ === Object.prototype);
console.log(arr.__proto__.__proto__.__proto__ === null);
console.log(arr);
// String.prototype, Number.prototype, Boolean.prototype

console.log(arr.reverse());
Array.prototype.reverse = function () {
  console.log("Hello there!");
};
arr.reverse();
