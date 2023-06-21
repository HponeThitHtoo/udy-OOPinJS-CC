// // Classes (ES6) - syntactic sugar
// Class fields

let People = class {
  age = prompt("What is the person's age?", 18);
  species = "Human";

  constructor(fName, lName) {
    this.fName = fName;
    this.lName = lName;
  }

  fullName() {
    return this.fName + " " + this.lName;
  }

  isMajor() {
    if (this.age > 18) {
      return `${this.fullName()} is a major`;
    } else {
      return `${this.fullName()} is a minor`;
    }
  }
};

let person1 = new People("John", "Doe");
console.log(person1);
console.log(person1.age);
console.log(person1.isMajor());
