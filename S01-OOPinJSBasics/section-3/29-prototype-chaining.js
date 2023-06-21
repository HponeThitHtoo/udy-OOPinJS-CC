// Prototype Inheritance
// Prototype chain

"use strict";

let person = {
  fName: "John",
  lName: "Doe",
  fullName() {
    return this.fName + " " + this.lName;
  },
};

let sportsPerson = {
  sports: "Runner",
  __proto__: person,
};

let runner = {
  speed: 4.5,
  __proto__: sportsPerson,
};

console.log(runner);

for (let key in runner) {
  console.log(key);
}
