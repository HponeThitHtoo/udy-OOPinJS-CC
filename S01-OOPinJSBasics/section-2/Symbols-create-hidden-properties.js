// Advanced objects
// Symbols - another data type

"use strict";

// every symbol is unique
let sym = Symbol("id"); // label
let sym1 = Symbol("id");
console.log(sym === sym1);

// social security number, identity number
let id = Symbol("identity");

let person = {
  name: "John Doe",
  [id]: 30004, // hidden properties - used for unique value storage
};

console.log(person);

// alert(id.toString());

/*** skipped by for...in loop, enumerable: false by default for symbols ****/
for (let key in person) {
  console.log(key); // only "name" property will output
}
console.log(Object.keys(person)); // only "name" property will output

console.log(Object.getOwnPropertyNames(person)); // only "name" property will output

console.log(Object.getOwnPropertySymbols(person)); // symbol will output

console.log(person[id]); // you can output the symbol value like this

/*** cloning - Object.assign - does not ignore symbols ***/
let person1 = Object.assign({}, person);
console.log(person1);

/*** global symbol ***/
let globalSym = Symbol.for("id");
let globalSym1 = Symbol.for("id");
console.log(globalSym === globalSym1);

let sym3 = Symbol("sym");

console.log(Symbol.keyFor(globalSym)); // only from global symbols
console.log(Symbol.keyFor(sym3)); // undifined
