// Objects - advanced topics
// Cloning & merging objects, Object.assign

"use strict";

let person = {
  fName: "Jane",
  lName: "Doe",
};

let person1 = {};
for (let prop in person) {
  person1[prop] = person[prop];
}
console.log(person1);
console.log(person === person1);
person1.fName = "Susan";
console.log("person", person.fName);
console.log("person1", person1.fName);

let voting = {
  canVote: true,
  gender: "female",
};

let career = {
  graduate: true,
  hasJob: true,
};

// Object.assign(root, obj1, obj2, ...);
let person2 = Object.assign({}, person);
console.log("person2", person2);

let person3 = Object.assign({}, person, voting, career);
console.log("person3", person3);

Object.assign(person, voting, career);
console.log("person", person);
