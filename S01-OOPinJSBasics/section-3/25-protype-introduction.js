// Prototypes and prototype inheritance
// Prototypes

"use strict";

function People(fName, lName) {
  this.fName = fName;
  this.lName = lName;
}

People.prototype.fullName = function () {
  return `${this.fName} ${this.lName}`;
};

let person1 = new People("John", "Doe");
console.log(person1);

let arr = [1, 2, 3];
console.log(arr);
console.log(arr.reverse());
// functions, dates, strings, numbers

let str = new String("Hello");
console.log(str);

// null => Global Object => Array, String, ... => User defined objects (str, arr, obj, People, temp, etc)
