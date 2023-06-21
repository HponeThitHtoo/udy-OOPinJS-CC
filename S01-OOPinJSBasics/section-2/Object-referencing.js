// Objects - advanced topics
// Object referencing

"use strict";

let str = "Hello World";
let str1 = str;
console.log("str", str);
console.log("str1", str1);

str1 = "Testing";
console.log("str", str);
console.log("str1", str1);

let person = {
  fName: "Jane",
  lName: "Doe",
};

let person1 = person;
console.log("person", person);
console.log("person1", person1);

person1.fName = "Susan";
console.log("person", person);
console.log("person1", person1);

let obj = {};
let obj1 = {};
console.log(obj === obj1); // false
console.log(person === person1); // true
