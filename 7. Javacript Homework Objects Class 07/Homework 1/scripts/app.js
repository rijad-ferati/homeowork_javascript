//Javascript Objects Homework nr. 1

// Defining an object:

let animal = {
  name: "Kaya",
  kind: "dog",
  speak: function () {
    return `The ${this.kind} says Hey Bro!!!`;
  },
};
animal.speak();

console.log(animal.name);

// Defining the constructor function here!

let button = document.getElementById("button1");
// Defining the constructor function for the new parameters
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.speak = function () {
    console.log(`${firstName} veli Zdravo`);
  };
}
button.addEventListener("click", function () {
  let firstName = document.getElementById("input1").value;
  let lastName = document.getElementById("input2").value;
  let age = document.getElementById("input3").value;
  let newPerson = new Person(firstName, lastName, age);

  console.log(newPerson);
  newPerson.speak();
});

// function Person(firstName, lastName, age) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.speak = function () {
//     console.log(`${firstName} veli Zdravo`);
//   };
// }

// Creating objects by using the constructor function and passing the arguments (NOT PARAMETERS)
// let ricky = new Person("Rijad", "Ferati", 30);
// console.log(ricky);

// ricky.speak();
// Another constructor function using .this keyword
// function Animal(animalName, animalKind, animalAge) {
//   this.animalName = animalName;
//   this.animalKind = animalKind;
//   this.animalAge = animalAge;
//   this.speak = function () {
//     console.log(`${animalName}, the ${animalKind}, says Hello`);
//   };
// }
// let bobi = new Animal("Bobi", "dog", 10);
// console.log(bobi);
// bobi.speak();
