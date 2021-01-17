// Javascript Arrays, Class 04, Example 1 
// Description: Action: Write a JavaScript program that will read in a number and write out its digits
let numberInput = prompt("input any numbers separated by space");
numberInput = String(numberInput);
let numberArray = numberInput.split("");
numberArray.map(x => console.log(x));
