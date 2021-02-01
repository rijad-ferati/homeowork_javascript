// Basic Javascript Exam Class 11, Exercise 2
/*Exercise 2 - Divide by 7 and 3:
Create a function that will find and return all numbers dividable by 7 AND 3 in a array from 1 to 100. If a number is ONLY dividable by 7 it should NOT be returned. If a number is ONLY dividable by 3 it should NOT be returned. Bonus: make the function work to any number instead of only to 100.
``` let num = 100;
function getNumbers(...) { ... return ... } ```*/

function getNumbers(numberInput) {
  let divisibleNumbers = "";

  for (let i = 1; i <= numberInput; i++) {
    if (i % 7 === 0 && i % 3 === 0) {
      divisibleNumbers += ` ${i} `;
    }
  }
  console.log(
    `Divisible by 7 and 3 are the following numbers: ${divisibleNumbers}`
  );
  // console.log(`the following numbers: ${divisibleNumbers}`);
  return divisibleNumbers;
}
// Numbers up to 100

getNumbers(100);

// Numbers up to 1000

getNumbers(1000);

// Numbers up to 100000
getNumbers(10000);
