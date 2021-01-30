// Inputs
let button = document.getElementById("button1");
let title = document.getElementById("input-name");
let author = document.getElementById("input-author");
let result = document.getElementById("result");
let haveRead = document.getElementById("have-read");

// Defining the constructor function

function BookTracker(title, author, readingStatus) {
  this.title = title;
  this.author = author;
  this.readingStatus = readingStatus;
  this.readingStatusMsg = function () {
    if (this.readingStatus) {
      return `Already read ${this.title} by ${this.author}. `;
    } else {
      return `You still need to read ${this.title} by ${this.author}.
        `;
    }
  };
}
// Functions

function printResult(title, author, readingStatus) {
  if (title && author) {
    let book = new BookTracker(title, author, readingStatus);
    result.innerText = book.readingStatusMsg();
  } else {
    result.innerText = `ERROR!!!`;
  }
}

// Event Handlers
button.addEventListener("click", function () {
  printResult(title.value, author.value, haveRead.checked);
});
