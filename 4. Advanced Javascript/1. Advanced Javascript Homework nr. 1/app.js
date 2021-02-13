// Selectors
let searchUser = document.querySelector("#search-user");
let tableUsers = document.querySelector("#table");
let searchButton = document.querySelector("#search-button");
let resetButton = document.querySelector("#reset-button");
let showErrorMessage = document.querySelector("#error-message");

// Creating a constructor function
function Person(firstName, lastName, age, city, country, spouse, pets) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = `${this.firstName} ${this.lastName}`;
  this.age = age;
  this.city = city;
  this.country = country;
  this.spouse = spouse;
  this.pets = pets;
  this.isMarried = spouse ? true : false;
}

// Creating entries using constructor function

const users = [
  new Person("Rijad", "Ferati", 30, "Skopje", "North Macedonia", "", [
    "pincher",
  ]),

  new Person("Borche", "Borisovski", 28, "Probishtip", "Macedonia", "", [
    "Bobi",
    "Tobi",
  ]),
  new Person(
    "Dimitar",
    "Spiroski",
    23,
    "Struga",
    "South Macedonia",
    "Magdalena Kochoska",
    ["Bak", "Kaya"]
  ),
  new Person(
    "Ivo",
    "Kostovski",
    32,
    "Skopje",
    "North Macedonia",
    "Anastazija Anastasovska",
    ["Boem"]
  ),
  new Person(
    "Ramadan",
    "Saliu",
    31,
    "Skopje",
    "North Macedonia",
    "Jehona Saliu",
    ["cattie purry"]
  ),

  new Person("Bashkim", "Idrizi", 29, "Oslo", "Norway", "Emine Idrizi", [""]),
];

// Functions

function createList() {
  tableUsers.innerHTML = `
    <thead>
    <td>First Name</td>
    <td>Last Name</td>
    <td>Full Name</td>
    <td>Age</td>
    <td>City</td>
    <td>Country</td>
    <td>Spouse</td>
    <td>Pets</td>
    <td>Marriage Status</td>
    </thead>    
    `;
  for (user of users) {
    tableUsers.innerHTML += `<tr>
    <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.fullName}</td>
        <td>${user.age}</td>
        <td>${user.city}</td>
        <td>${user.country}</td>
        <td>${user.spouse}</td>
        <td>${user.pets}</td>
        <td>${user.isMarried}</td>
        </tr>`;
  }
}

function searchUsers(userInput) {
  tableUsers.innerHTML = `
    <thead>
    <td>First Name</td>
    <td>Last Name</td>
    <td>Full Name</td>
    <td>Age</td>
    <td>City</td>
    <td>Country</td>
    <td>Spouse</td>
    <td>Pets</td>
    <td>Marriage Status</td>
    </thead>    
    `;
  for (user of users) {
    if (userInput.toLowerCase() === user.fullName.toLowerCase()) {
      tableUsers.innerHTML += `
          <tr>
          <td>${user.firstName}</td>
          <td>${user.lastName}</td>
          <td>${user.fullName}</td>
          <td>${user.age}</td>
          <td>${user.city}</td>
          <td>${user.country}</td>
          <td>${user.spouse}</td>
          <td>${user.pets}</td>
          <td>${user.isMarried}</td>   
          </tr>
          `;
    } else if (userInput.toLowerCase() !== user.fullName.toLowerCase()) {
      showErrorMessage.innerHTML = `The user ${searchUser.value} does not exist, please try again!`;
    } else {
      showErrorMessage.innerHTML = `Error`;
    }
  }
}

function cleanInput() {
  searchUser.value = "";
}

createList();

searchButton.addEventListener("click", function () {
  searchUsers(searchUser.value);
  cleanInput();
});

resetButton.addEventListener("click", function () {
  createList();
  showErrorMessage.innerHTML = "";
});
