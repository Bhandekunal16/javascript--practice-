class Person {
  constructor(name, age) {
    this.name = name;
  }

  greet(age) {
    console.log(
      `Hello, my name is ${this.name} and I am ${age} years old.`
    );
  }
}

module.exports = Person;
