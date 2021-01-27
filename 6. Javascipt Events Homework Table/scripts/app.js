// Inputs and Selectors
let numberOfRows = document.querySelector("#number-of-rows");
let numberOfColumns = document.querySelector("#number-of-columns");
let button = document.querySelector("#button-1");

// Functions

function createTable() {
  let table = document.querySelector("#table-1");
  let row = numberOfRows.value;
  let cols = numberOfColumns.value;
  table.innerHTML = "";

  console.log(row + "  " + cols);
  for (let rowIndex = 0; rowIndex < row; rowIndex++) {
    let tr = document.createElement("tr");
    for (let colIndex = 0; colIndex < cols; colIndex++) {
      let td = document.createElement("td");
      let text = document.createTextNode(
        " Row " + (rowIndex + 1) + " Column " + (colIndex + 1)
      );

      td.appendChild(text);
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}
button.addEventListener("click", createTable);
