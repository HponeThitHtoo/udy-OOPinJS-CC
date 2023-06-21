// Classes (ES6) - syntactic sugar

"use strict";

class People {
  constructor(fName, lName) {
    this.fName = fName;
    this.lName = lName;
  }

  fullName() {
    return this.fName + " " + this.lName;
  }

  hello() {
    return "Hello!";
  }
}

let person1 = new People("John", "Doe");
let person2 = new People("Susan", "Smith");
console.log(person1);
console.log(person2);
console.log(person1.fName);
console.log(person2.lName);
console.log(person2.fullName());

console.log(typeof People);
console.log(People === People.prototype.constructor);

console.log(Object.getOwnPropertyNames(People));
console.log(Object.getOwnPropertyNames(People.prototype));

// class methods are non-enumerable by default
for (let key in person1) {
  console.log(key);
}

// Classes use strict mode by default
// let person4 = People("Stephen", "Sdeagull"); // Uncaught TypeError: Class constructor People cannot be invoked without 'new'

/* class Person {
  fullName() {
    return "David Beckham";
  }
}

let person3 = new Person();
console.log(person3);
console.log(person3.fullName()); */
