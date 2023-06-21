// Classes (ES6)
// Class polymorphism - many + forms

"use strict";

class Person {
  constructor(fName, lName) {
    this.fName = fName;
    this.lName = lName;
  }

  hello(greeting) {
    console.log(greeting);
  }
}

class Child extends Person {
  constructor(fName, lName, age) {
    super(fName, lName);
    this.age = age;
  }

  hello() {
    console.log(`Hello dear!`);
  }
}

let child1 = new Child("Susan", "Smith", 5);
child1.hello("Hello there!"); // even calling the method with arguments, only call to Child.hello, not call to Person.hello
