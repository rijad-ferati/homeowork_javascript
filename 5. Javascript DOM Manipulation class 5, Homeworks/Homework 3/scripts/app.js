// Selectors
// Inputs
let recipeName = document.querySelector("#recipe-name");
let numberOfIngredients = document.querySelector("#number-of-ingredients");
let ingredients = document.querySelector("#ingredients");

//Variables

let inputRecipeName = prompt("Enter the name of the recipe");

inputRecipeName = recipeName.innerHTML += `<h2> The name of the recipe is: ${inputRecipeName}</h2>
`;
let inputNumberOfIngredients = parseInt(
  prompt("how many ingredients does your recipe have?")
);

numberOfIngredients.innerHTML = `<h3>The number of ingredients is: ${inputNumberOfIngredients}`;

while (inputNumberOfIngredients < 0) {
  inputNumberOfIngredients = parseInt(prompt("Please enter a positive number"));
}

let inputIngredients = prompt(
  "enter each ingredients of the recipe separated by a coma ,"
);

let ingredientsArray = inputIngredients.split(",");

while (inputNumberOfIngredients !== ingredientsArray.length) {
  inputIngredients = prompt(
    "you entered more or less ingredients than you chose, please try again!"
  );
  ingredientsArray = inputIngredients.split(",");
}

let table = document.createElement("table");
for (let ingredient of ingredientsArray) {
  let row = document.createElement("tr");
  let cell = document.createElement("td");
  let data = document.createTextNode(ingredient);
  cell.appendChild(data);
  row.appendChild(cell);
  table.appendChild(row);
}
ingredients.appendChild(table);
