// Private properties with closures - hidden properties
// inner variables & setters and getters - set the property value and get the property

"use strict";

function People() {
  let _fName, _lName;

  this.setName = function (fName, lName) {
    _fName = fName;
    _lName = lName;
  };

  this.getName = function () {
    return `${_fName} ${_lName}`;
  };
}

let person1 = new People();
console.log(person1);
person1.setName("John", "Doe");
console.log(person1.getName());

let person2 = new People();
console.log(person2);
person2.setName("Susan", "Dee");
console.log(person2.getName());

let person3 = {
  fName: "David",
  lName: "Beckham",
};

console.log(Object.getOwnPropertyNames(person1));
console.log(Object.getOwnPropertyNames(person2));
console.log(Object.getOwnPropertyNames(person3));
