// Selectors
let searchUser = document.querySelector("#search-user");
let tableUsers = document.querySelector("#table");
let searchButton = document.querySelector("#search-button");
let resetButton = document.querySelector("#reset-button");
let showErrorMessage = document.querySelector("#error-message");
let userFirstNameInput = document.querySelector("#first_name");
let userLastNameInput = document.querySelector("#last_name");
let userAgeInput = document.querySelector("#user_age");
let userCityInput = document.querySelector("#user_city");
let userCountryInput = document.querySelector("#user_country");
let userSpouseInput = document.querySelector("#user_spouse");
let userPetsInput = document.querySelector("#user-pets");
let userOtherPetsInput = document.querySelector("#other-pet");
let registerUserButton = document.querySelector("#register_user_button");

let selectedPet = Array.from(userPetsInput.selectedOptions);

// Creating a constructor function
function Person(firstName, lastName, age, city, country, spouse, selectedPet) {
  let concatenatedPets = "";
  let optionsSelected;

  if (
    typeof selectedPet !== "undefined" &&
    typeof selectedPet.selectedOptions !== "undefined"
  ) {
    optionsSelected = Array.from(selectedPet.selectedOptions);
  }

  if (typeof optionsSelected !== "undefined") {
    optionsSelected.forEach(function (pet) {
      if (typeof pet.value !== undefined) {
        concatenatedPets += " " + pet.value; //Armin added
      }
    });
  }

  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = `${this.firstName} ${this.lastName}`;
  this.age = age;
  this.city = city;
  this.country = country;
  this.spouse = spouse;
  this.pets = concatenatedPets;
  this.isMarried = spouse ? true : false;
}

console.log(selectedPet);

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
    "Magdalena Kochoska"[("Bak", "Kaya")]
  ),
  new Person(
    "Ivo",
    "Kostovski",
    32,
    "Skopje",
    "North Macedonia",
    "Anastazija Anastasovska"["Boem"]
  ),
  new Person(
    "Ramadan",
    "Saliu",
    31,
    "Skopje",
    "North Macedonia",
    "Jehona Saliu"["cattie purry"]
  ),

  // new Person("Bashkim", "Idrizi", 29, "Oslo", "Norway", "Emine Idrizi", [""]),
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

function registerPerson(firstName, lastName, age, city, country, spouse, pets) {
  let registeredUser = new Person(
    firstName,
    lastName,
    age,
    city,
    country,
    spouse,
    pets
  );

  users.push(registeredUser);
}

function searchUsers(searchUser) {
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
    if (searchUser.toLowerCase() === `${user.fullName}`.toLowerCase()) {
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
    }
    //when I try to put else{} here it doesn't work properly
  }
}

function cleanInput() {
  searchUser.value = "";
  userFirstNameInput.value = "";
  userLastNameInput.value = "";
  userAgeInput.value = "";
  userCityInput.value = "";
  userCountryInput.value = "";
  userSpouseInput.value = "";
  userPetsInput.value = "";
}

// I am trying to create a validation function which will give the value of the  box in line 14, but can't figure out why, Ivo, enlighten me!!!
function validatePets() {
  let selectedPet = userPetsInput.selectedOptions.value;
  let allPets = selectedPet;
  if (selectedPet.includes("Other")) {
    allPets = [...allPets, userOtherPetsInput.value];
  }
  return allPets;
}

function validateData() {
  const inputs = [
    userFirstNameInput.value,
    userLastNameInput.value,
    userAgeInput.value,
    userCityInput.value,
    userCountryInput.value,
    userPetsInput.value,
  ];
  for (i = 0; i < inputs.length; i++) {
    if (!inputs[i]) {
      return false;
    }
  }
  return true;
  // if (userPetsInput.value !== "other") {
  //   userOtherPetsInput.style.display = "none";
}

// console.log(validateData());
createList();

searchButton.addEventListener("click", function () {
  searchUsers(searchUser.value);
  cleanInput();
});

resetButton.addEventListener("click", function () {
  createList();
  showErrorMessage.innerHTML = "";
});

registerUserButton.addEventListener("click", function () {
  if (validateData()) {
    registerPerson(
      userFirstNameInput.value,
      userLastNameInput.value,
      userAgeInput.value,
      userCityInput.value,
      userCountryInput.value,
      userSpouseInput.value,
      userPetsInput
    );
    createList();
    cleanInput();
  } else {
    showErrorMessage.innerHTML = `Make sure if you fill have filled in all the required fields in the form`;
  }
});
