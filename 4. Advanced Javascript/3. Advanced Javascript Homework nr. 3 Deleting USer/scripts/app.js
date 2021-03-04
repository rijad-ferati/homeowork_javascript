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
let deleteUserBtn = document.querySelector("#delete-user-button");

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
  this.userId = Math.floor(Math.random() * 1000);
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
    [("Bak", "Kaya")]
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
    "cattie purry"
  ),

  // new Person("Bashkim", "Idrizi", 29, "Oslo", "Norway", "Emine Idrizi", [""]),
];

// Functions

let createList = () => {
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
    <td>User Id</td>
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
        <td>${user.userId}</td>
        </tr>`;
  }
};

let registerPerson = (
  firstName,
  lastName,
  age,
  city,
  country,
  spouse,
  pets
) => {
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
};

let searchUsers = (searchUser) => {
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
    <td>User Id<td>
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
          <td>${user.userId}</td>
          </tr>

          `;
    }
    //when I try to put else{} here it doesn't work properly
  }
};

let deleteUser = (searchId) => {
  let filteredUser = users.filter((el) => {
    return el.userId === searchId;
  });
  if (!filteredUser.length) {
    return;
  }
  return users.findIndex(
    (element) => element.userId === filteredUser[0].userId
  );
};

let cleanInput = () => {
  searchUser.value = "";
  userFirstNameInput.value = "";
  userLastNameInput.value = "";
  userAgeInput.value = "";
  userCityInput.value = "";
  userCountryInput.value = "";
  userSpouseInput.value = "";
  userPetsInput.value = "";
};

// I am trying to create a validation function which will give the value of the  box in line 14, but can't figure out why, Ivo, enlighten me!!!
function validatePets() {
  let selectedPet = userPetsInput.selectedOptions.value;
  let allPets = selectedPet;
  if (selectedPet.includes("Other")) {
    allPets = [...allPets, userOtherPetsInput.value];
  }
  return allPets;
}

let validateData = () => {
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
};

// console.log(validateData());
createList();

searchButton.addEventListener("click", () => {
  searchUsers(searchUser.value);
  cleanInput();
});

resetButton.addEventListener("click", () => {
  createList();
  showErrorMessage.innerHTML = "";
});

registerUserButton.addEventListener("click", () => {
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

deleteUserBtn.addEventListener("click", () => {
  users.splice(deleteUser(searchUsers.value), 1);
  createList();
});
