// Classes (ES6)
// Factory functions - functions that return objects - don't have to work with "this", "new"
// Truly make the properties private

"use strict";

// private properties
function people(f, l) {
  let fName = f; // private - not accessible from outside, even by object instances
  let lName = l; // private
  return {
    fullName() {
      return `${fName} ${lName}`;
    },
  };
}

let person1 = people("John", "Doe");
console.log(person1);
console.log(person1.fullName());
// console.log(person1.fName); // undefined

// public properties
function book(title, author) {
  return {
    title: title,
    author: author,
    getAccess() {
      // return `${title} is written by ${author}`;
      return `${this.title} is written by ${this.author}`;
    },
  };
}

let book1 = book("Sharlock Holme", "Sir Arthur Conendoyle");
console.log(book1);
console.log(book1.getAccess());
console.log(book1.title);
