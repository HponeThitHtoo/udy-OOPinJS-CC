// Classes (ES6)
// Static properties and methods

"use strict";

class Person {
  static species = "Human being";

  constructor(fName, lName, age) {
    this.fName = fName;
    this.lName = lName;
    this.age = age;
  }

  fullName() {
    return `${this.fName} ${this.lName}`;
  }

  static hello(person) {
    console.log(`Hello ${person.fName}`);
  }

  static whoIsOlder(person1, person2) {
    if (person1.age > person2.age) {
      console.log(`${person1.fullName()} is older than ${person2.fullName()}`);
    } else {
      console.log(`${person2.fullName()} is older than ${person2.fullName()}`);
    }
  }
}

class SportsMan extends Person {
  constructor(fName, lName, age, sports) {
    super(fName, lName, age);
    this.sports = sports;
  }
}

let person1 = new Person("John", "Doe", 40);
let person2 = new Person("Susan", "Smith", 35);
let person3 = new Person("Jane", "Dee", 18);
let person4 = new SportsMan("Jane", "Dee", 30, "Tennis");
console.log(`${person1.fullName()} is a ${Person.species}`);

Person.hello(person1);
Person.whoIsOlder(person1, person2);

console.log(
  `${person4.fullName()} is a ${SportsMan.species} who plays ${person4.sports}`
);
