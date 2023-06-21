// Classes (ES6)
// Private and Protected properties in Classes
// Protected - cannot be accessed outside the class, but can be accessed by inherited classes
// Private - cannot even be accessed by inherited classes

"use strict";

// Protected property
// getters and setters
// prefix with _
class People {
  _name = ""; // protected
  set name(n) {
    this._name = n;
  }

  get name() {
    return this._name;
  }
}

class Runner extends People {
  access() {
    console.log(this._name); // runner1
    console.log(person1._name); // person1
  }
}

let person1 = new People();
person1.name = "John Doe"; // calls setter
console.log(person1.name); // calls getter
console.log(person1);

let runner1 = new Runner();
runner1.name = "Susan Smith";
runner1.access();

// Protected proterty with functions (not with getter, setter)
class Tutor {
  _name = ""; // protected
  setName(n) {
    this._name = n;
  }

  getName() {
    return this._name;
  }
}

class Junior extends Tutor {
  access() {
    console.log(this._name); // junior1
    console.log(person1._name); // tutor1
  }
}

let tutor1 = new Tutor();
tutor1.setName("John Doe");
console.log(tutor1.getName());
console.log(tutor1);

let junior1 = new Junior();
junior1.setName("Susan Smith");
junior1.access();

// Read only
class Tape {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }
}

let tape1 = new Tape("Metal Rock");
console.log(tape1.name);
console.log(tape1);
// tape1.name = "Hip Hop"; // Uncaught TypeError: Cannot set property name of #<Tape> which has only a getter

// Private - syntax - latest
// #propertyName

class Book {
  #name = ""; // private
  set name(n) {
    this.#name = n;
  }

  get name() {
    return this.#name;
  }
}

class TextBook extends Book {
  access() {
    // console.log(this.#name); // textbook1 // Uncaught SyntaxError: Private field '#name' must be declared in an enclosing class
    // console.log(book1.#name); // book1 // Uncaught SyntaxError: Private field '#name' must be declared in an enclosing class
    console.log(this.name);
    console.log(book1.name);
  }
}

let book1 = new Book();
book1.name = "Sharlock Holme";
console.log(book1);
console.log(book1.name);
// console.log(book1.#name); // Uncaught SyntaxError: Private field '#name' must be declared in an enclosing class

let textbook1 = new TextBook();
textbook1.name = "5 Grade";
textbook1.access();
