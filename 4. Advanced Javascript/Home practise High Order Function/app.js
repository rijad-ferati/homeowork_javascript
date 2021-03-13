// PART 1, Back to the basics, simple exercises
const unorderedNumbers = [6, 10, 56, 32, 14, 22];

const orderedNumbers = unorderedNumbers.map((number) => number / 2);

console.log(orderedNumbers);

// Task 2
const mixedNumbers = [1, 3, 2, 2, 5, 5, 7, 2, 1, 3];

const filterOddNumbers = mixedNumbers.filter((number) => number % 2 !== 0);
console.log(filterOddNumbers);

// Task 3
const mixedCrazyNumbers = [2, 4, 5667, 443, 22, 34, 42, 4, 1];

const crazyNumbersAscending = mixedCrazyNumbers.sort((a, b) => a - b);

console.log(crazyNumbersAscending);

const crazyNumbersDescending = mixedCrazyNumbers.sort((a, b) => b - a);

console.log(crazyNumbersDescending);

const mixedBigArray = [
  ...orderedNumbers,
  ...filterOddNumbers,
  ...crazyNumbersAscending,
  ...crazyNumbersDescending,
];

const mixedBigArraySorted = mixedBigArray.sort((a, b) => a - b);
console.log(mixedBigArray);
console.log(mixedBigArraySorted);

const productBigArray = mixedBigArraySorted.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

console.log(productBigArray);

let mixedValuesArray = [1, 30, "Boris", 20, "Dime", 311, 31, "Ricky"];

// console.log(res);

const arr = ["Prihodi 23456 danaci 34 razhodi 23455 I drugi."];

const res = arr
  .join("")
  .split(" ")
  .filter((e) => +e)
  .map((num) => +num);

console.log(res);

const stringExample =
  "Monday there were 23 people, tuesday there we 450 and then we had only 30 on Wednesday";

const stringExampleNoSpace = stringExample.split(" ");

console.log(stringExampleNoSpace);

const stringExampleNumbers = stringExampleNoSpace.filter(
  (elem) => !isNaN(elem)
);

const fixedUpStringNumbers = stringExampleNumbers.map((val) => parseInt(val));

console.log(fixedUpStringNumbers);

//PART 2 Assigned Homework A

let users = [
  {
    name: "John",
    gender: "m",
    title: "",
    hasCar: true,
    age: 30,
    eyeColor: "green",
    hairColor: "black",
    address: "Skopje, MK",
    job: "developer",
  },
  {
    name: "Jack",
    gender: "m",
    title: "",
    hasCar: false,
    age: 19,
    eyeColor: "brown",
    hairColor: "brown",
    address: "Tetovo, MK",
    job: "realtor",
  },
  {
    name: "Elisabeth",
    gender: "f",
    title: "",
    hasCar: true,
    age: 45,
    eyeColor: "blue",
    hairColor: "black",
    address: "Bitola, MK",
    job: "project manager",
  },
  {
    name: "Ana",
    gender: "f",
    title: "",
    hasCar: true,
    age: 98,
    eyeColor: "brown",
    hairColor: "blonde",
    address: "Shtip, MK",
    job: "designer",
  },
  {
    name: "Carroll",
    gender: "f",
    title: "",
    hasCar: false,
    age: 17,
    eyeColor: "green",
    hairColor: "blonde",
    address: "Kumanovo, MK",
    job: "business analyst",
  },
  {
    name: "Michael",
    gender: "m",
    title: "",
    hasCar: true,
    age: 40,
    eyeColor: "blue",
    hairColor: null,
    address: "Sofija, BG",
    job: "developer",
  },
  {
    name: "Beth",
    gender: "f",
    title: "",
    hasCar: false,
    age: 35,
    eyeColor: "brown",
    hairColor: "blonde",
    address: "Atina, GR",
    job: "database engineer",
  },
  {
    name: "Clara",
    gender: "f",
    title: "",
    hasCar: true,
    age: 67,
    eyeColor: "blue",
    hairColor: "brown",
    address: "Tirana, AL",
    job: "designer",
  },
  {
    name: "Jay",
    gender: "m",
    title: "",
    hasCar: true,
    age: 39,
    eyeColor: "green",
    hairColor: null,
    address: "Dojran, MK",
    job: "manager",
  },
];

//1. Create an array that will contain all the data with the updated titles. Add the following titles: 'Mr.' if the user is male or 'Ms.' if the user is female.

const usersWithTitles = users.map((user) => {
  if (user.gender === "m") {
    user.title = "Mr.";
  } else {
    user.title = "Ms.";
  }
  return user;
});

console.log(usersWithTitles);
//2. Create an array that will contain only the male users.

const onlyMaleUsers = users.filter((user) => user.gender === "m");

console.log(onlyMaleUsers);

//3. Create an array that will only contain only the users who are NOT from Macedonia (MK)

const userOutsideMacedonia = users.filter(
  (user) => !user.address.includes("MK")
);

console.log(userOutsideMacedonia);

//4. Create an array that with users that have a car.

const usersWithCar = users.filter((user) => user.hasCar === true);

console.log(usersWithCar);

//5. Log this message for all users that have hair: 'NAME which is AGE years old, living in ADDRESS is working as a JOB and HAS/HASN'T got a car.

const generatedMessage = users
  .filter((user) => user.hairColor !== null)
  .forEach((user) => {
    if (user.hasCar === true) {
      console.log(
        `${user.name} who is ${user.age} years old, living in ${user.address} is working as a ${user.job} and has got a car`
      );
    } else {
      console.log(
        `${user.name} who is ${user.age} years old, living in ${user.address} is working as a ${user.job} and hasn't got a car`
      );
    }
  });

console.log(generatedMessage);

//6. Create an array with all users older than 28 years old

const userOlderThan28 = users.filter((user) => user.age >= 28);

console.log(userOlderThan28);

//7. Create a new array, where each user that has a car will have a new property carColor: 'white'. The users that don't have a car, won't have this property

const usersWithCarProperties = users
  .filter((user) => user.hasCar === true)
  .map((users) => ({ ...users, carColor: "white" }));

console.log(usersWithCarProperties);

// 8. Create a variable that will give the information if all users have hair

const doAllUsersHaveHair = users.every((user) => user.hairColor !== null);

console.log(`The statement that all users have hair is: ${doAllUsersHaveHair}`);

//9. Create a variable that will give the information if some users work as 'manager'.

const usersWorkAsManager = users.some((user) => user.job === "manager");

console.log(
  `The statement that some users work as managers is: ${usersWorkAsManager}`
);

const userManagers = users.filter((user) => user.job === "manager");

console.log(userManagers);

//10. Create a variable that will display the index of a user that lives in Dojran

let usersInDojran = users.findIndex((user) => user.address.includes("Dojran"));

console.log(usersInDojran);

// 11. Save the user Clara in a separate variable

const savingClara = users
  .filter((user) => user.name === "Clara")
  .map((user) => user);

console.log(savingClara); //Only Clara

console.log(users); //All users check

//12. Log 'TITLE NAME' as a text for each user in the array.

const addingTitleText = users.map((user) => ({
  ...user,
  TITLE: `${user.title}`,
  NAME: `${user.name}`,
}));

console.log(addingTitleText);

// Part 3

let studentsData = [
  {
    name: "Ricky",
    subject: "Biology",
    grade: 5,
    subject: "Math",
    grade: 5,
    subject: "Physics",
    grade: 4,
    subject: "English",
    grade: 5,
  },
  {
    name: "Edward",
    subject: "Biology",
    grade: 5,
    subject: "Math",
    grade: 4,
    subject: "Physics",
    grade: 3,
    subject: "English",
    grade: 5,
  },
  {
    name: "Alisha",
    subject: "Biology",
    grade: 5,
    subject: "Math",
    grade: 4,
    subject: "Physics",
    grade: 4,
    subject: "English",
    grade: 5,
  },
  {
    name: "Bailey",
    subject: "Biology",
    grade: 5,
    subject: "Math",
    grade: 5,
    subject: "Physics",
    grade: 5,
    subject: "English",
    grade: 4,
  },
];
