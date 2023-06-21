// Objects - advanced topics
// Constructors - used to set the initial properties of the object that it creates

"use strict";

function People(fName, lName, age) {
  // new.target - returns empty (falsy value) if called without new and returns function (truthy value) when called with new
  if (!new.target) {
    return new People(fName, lName, age);
  }
  this.fName = fName;
  this.lName = lName;
  this.age = age;
  if (this.age > 18) {
    this.canVote = true;
  } else {
    this.canVote = false;
  }
  this.fullName = function () {
    return `${this.fName} ${this.lName}`;
  };
}

let person1 = new People("John", "Doe", 40);
// 1. Creates an empty object, assigned to person1 {}
// 2. Calls the constructor function with the arguments given and access the "this" with person1
// 3. Assign the attribute values to the new properties and automatically return the new object with the new properties and values

let person2 = new People("Susan", "Smith", 35);
let person3 = new People("Debra", "Brown", 17);

console.log(person1);
console.log(person2);
console.log(person3);

let person4 = People("David", "Beckham", 45);
console.log(window.fName);

function Book(name, author) {
  this.name = name;
  this.author = author;

  // Return an object - override everything else and that object will be returned
  return {
    hobby: "listening",
    age: 30,
  };
}

let book1 = new Book("ABC", "Christine");
console.log(book1);
console.log(book1.author); // undefined

function Career(title, responsibilty) {
  this.title = title;
  this.responsibilty = responsibilty;

  // Return a primative - ignoredd, whatever happened before will be retained
  return "Peter Pan";
}

let job1 = new Career("Cleaner", "To Clean Office");
console.log(job1);
console.log(job1.title);

/***** Constructor Function can be written as "Function Expression" *****/

let Test = function (name, age) {
  this.name = name;
  this.age = age;
};

let test1 = new Test("Doe Lone", 35);
console.log(test1);
console.log(test1.name);
