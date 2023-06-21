// Classes (ES6) - syntactic sugar
// Class expressions - returning a class inside a function

"use strict";

// Class expression
/* 
let People = class {
  constructor(fName, lName) {
    this.fName = fName;
    this.lName = lName;
  }
};

let person1 = new People("John", "Doe");
console.log(person1);
 */

// returning a class inside a function
// Dynamically creates classes
function createPeople(fName, lName) {
  return class {
    constructor() {
      this.fName = fName;
      this.lName = lName;
    }

    fullName() {
      return this.fName + " " + this.lName;
    }
  };
}

let People = createPeople("John", "Doe");
console.log(People);
let firstName = new People().fName;
console.log(firstName);
let person1 = new People("Jane", "Doee");
console.log(person1); // this not work see below example
console.log(person1.fullName()); // this not work see below example

function createBook() {
  return class {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }

    hello() {
      return "Hello! " + this.author;
    }
  };
}

let Book = createBook();
console.log(Book);
let book1 = new Book("Davinche Code", "Dam Brown");
console.log(book1.title);
console.log(book1.hello());

let book2 = new Book("Sharlock Holme", "Sir Aurthur Conenyone");
console.log(book2.title);
console.log(book2.hello());
