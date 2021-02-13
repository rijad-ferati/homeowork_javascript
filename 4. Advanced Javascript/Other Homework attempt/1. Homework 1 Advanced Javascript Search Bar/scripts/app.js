/*
0. Description:

We have an already existing list of users in a user array. Each user is of the same type. Users visiting the website can search for users by name. Each user has the following properties: fullName, firstName, lastName, age, isMarried, city, country, spouse, pets (list of strings).

1. Basic:

Add at least 5 users with different info in the array of users. Users can be added by JS, no need for a form.
the isMarried property should be automatically calculated if there is data for a spouse.
fullName is also automatically generated but a concatenation of first and last name
Create a function that will find (return) the correct user by full name, when called with a string (a search term)
Example: If I have a user John Smith, and I search for “john smith” I should be able to see John Smith as a result. (notice that this is case insensitive).

2. Advanced:

All points from the basic plus:
Add a table listing all the users, each property is a separate column. The list doesn't have to be ordered nor sorted.
Add a search input and a search button. When the button is pressed, The table should be refreshed with only users completely matching the full name, but case insensitive (see example above).
Add another button Reset, when the button is clicked, the table should list all the users.
You are free to add methods to the constructor function if needed. Use reusable functions as much as possible. Styling is not important, but feel free to do as you wish, but keep in mind, functionality is the focus of this homework. Please do not use filter(), nor find() or any other HOF, we are going to start using them for the next homework, I Promise(), be patient one more week :)

*/

// 1. Basic

// Selectors
let searchInput = document.querySelector("#search-bar");
let searchButton = document.querySelector("#search-button");
let resetButton = document.querySelector("#search-reset");
let errorSection = document.querySelector("#error-message");
let usersTable = document.querySelector("#users-list");
let divCrazy = document.querySelector("#div-crazy");
let tableSearch = document.querySelector("#users-search");

// Data

// Creating a constructor function
function Person(firstName, lastName, age, city, Country, spouse, pets) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = `${this.firstName} ${this.lastName}`;
  this.age = age;
  this.city = city;
  this.Country = Country;
  this.spouse = spouse;
  this.pets = pets;
  this.isMarried = spouse ? true : false;
  // this.checkMarriage = function () {
  //   if (this.spouse) {
  //     this.isMarried = true;
  //   } else {
  //     this.isMarried = false;
  //   }
  // };
  // this.checkMarriage();
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
    "Unknown Name",
    ["a dog"]
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
let results = [];
// Functions

function listUsers() {
  usersTable.innerHTML = `
        <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Full Name</th>
        <th>Age</th>
        <th>City</th>
        <th>Country</th>
        <th>Spouse</th>
        <th>Pet</th>
        <th>is Married?</th>
        </tr>`;
  for (let i = 0; i < users.length; i++) {
    let tableData = "";

    for (const key in users[i]) {
      tableData += `
      <td>
      ${users[i][key]}
      </td>
      `;
    }
    usersTable.innerHTML += `<tr>
    ${tableData}
    </tr>`;
  }
}

listUsers();

function searchForUser(inputUser) {
  let tableData = "";
  for (user of users) {
    if (inputUser === user.fullName) {
      for (const key in user) {
        tableData += `
        <td>
        ${user[key]}
        </td>
        `;
      }
      tableSearch.innerHTML += `<tr>
      ${tableData}
      </tr>`;
    }
  }
}

// Event Handlers

searchButton.addEventListener("click", function () {
  searchForUser(searchInput.value);
});
