// Class 11, Basic Javascript Exam Exercise 1

// Exercise description
/*Exercise 1 - Map numbers to string with dash:
Create a function which accepts an array of numbers as parameter and inserts dashes (-) between EACH two EVEN numbers. Example: When called with 0,2,5,4,6,8 the output should be 0-254-6-8.
``` let array = [0, 2, 5, 4, 6, 8];
function mapToEvenNumbersWithDash(...) { ... return ...; } ```*/
// Method 1

let array = [0, 2, 5, 4, 6, 8];
function mapToEvenNumbersWithDash(arrayInput) {
  let dashedValues = "";

  for (let i = 0; i < arrayInput.length; i++) {
    dashedValues += arrayInput[i];

    if (arrayInput[i] % 2 === 0 && arrayInput[i + 1] % 2 === 0) {
      dashedValues += "-";
    }
  }

  console.log(dashedValues);
}

mapToEvenNumbersWithDash([0, 2, 5, 4, 6, 8]);
// Method 2
mapToEvenNumbersWithDash(array);
