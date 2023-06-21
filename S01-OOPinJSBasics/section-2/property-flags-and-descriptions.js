// Advanced objects
// Property flags, descriptors
// property: value
// 4 descriptors - value, writable, enumerable, configerable
// Writable - read only descriptor - true -> can be edited
// Enumerable - visible in loops - true -> visible in loops
// Configurable - Can the descriptors be modified? - true, then yes - also, can't delete the property
// By default - all true

"use strict";

// Object.getOwnPropertyDescriptor(Obj, "propertyName");

function People(fName, lName, age) {
  this.fName = fName;
  this.lName = lName;
  this.age = age;
}

let person1 = new People("John", "Doe", 30);
console.log(Object.getOwnPropertyDescriptor(person1, "fName"));

// Creating property -> Object.defineProperty(obj, "propertyName", {descriptor: value});

/* Object.defineProperty(person1, "fName", {
  value: "Gary",
});
console.log(person1.fName); */

/* Object.defineProperty(person1, "fName", {
  enumerable: false,
});

for (let prop in person1) {
  console.log(prop);
} */

/* Object.defineProperty(person1, "fName", {
  value: "Gary",
  writable: false,
  configurable: false,
});

delete person1.fName; */

Object.defineProperty(person1, "id", {
  value: 30004,
  writable: false,
  enumerable: false,
  configurable: false,
});

Object.defineProperties(person1, {
  fName: { value: "Gary", configurable: false },
  lName: { value: "Smith" },
  age: { value: 40 },
  // id: { value: 30005 },
});
console.log(person1);
// delete person1.fName;
