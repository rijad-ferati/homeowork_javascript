// Basic Javascript Exam Class 11 Exercise 3

/* 
Exercise 3 - Vending machine:
Write a program for a vending machine that will calculate how much coins should be returned depending on the change. You have the following coins available: 50, 20, 10, 5 and 1 Example: if the change is 376, the result should be [50, 50, 50, 50, 50, 50, 50, 20, 5, 1]. Bonus: Make the program work with limited amount of coins of each value (ex. 5 - 50 coins, 8 - 20 coins, etc.)
``` let input = 376; let coins = [...];
function changeCalculator(...) { ... return ...; } ```
*/
// Method 1
function changeCalculator(changeInput) {
  let coins = [];

  while (changeInput > 0) {
    if (changeInput - 50 > 0) {
      changeInput -= 50;
      coins.push(50);
    } else if (changeInput - 20 > 0) {
      changeInput -= 20;
      coins.push(20);
    } else if (changeInput - 10 > 0) {
      changeInput -= 10;
      coins.push(10);
    } else if (changeInput - 5 > 0) {
      changeInput -= 5;
      coins.push(5);
    } else if (changeInput - 1 >= 0) {
      changeInput -= 1;
      coins.push(1);
    }
  }

  return coins;
}

let coins = changeCalculator(376);
console.log(coins);

// Trying the bonus

// DO NOT RUN THIS CODE, IT GIVES AN INFINITE

// let coins50 = 100;
// let coins20 = 150;
// let coins10 = 200;
// let coins5 = 500;
// let coins1 = 1000;
// let changeInputDifference50=(changeInputLimited-50)-coins50;
// let changeInputDifference20=(changeInputLimited-50)-coins20;
// let changeInputDifference10=(changeInputLimited-50)-coins10;
// let changeInputDifference5=(changeInputLimited-50)-coins5;
// let changeInputDifference1=(changeInputLimited-50)-coins1;

// function changeInputLimited(changeInputLimited) {
//   let coinsLimited = [];
//   let coins50 = 100;
//   let coins20 = 150;
//   let coins10 = 200;
//   let coins5 = 500;
//   let coins1 = 1000;
//   let changeInputDifference50 = changeInputLimited - 50 - coins50;
//   let changeInputDifference20 = changeInputLimited - 50 - coins20;
//   let changeInputDifference10 = changeInputLimited - 50 - coins10;
//   let changeInputDifference5 = changeInputLimited - 50 - coins5;
//   let changeInputDifference1 = changeInputLimited - 50 - coins1;

//   while (changeInputLimited > 0) {
//     if (changeInputLimited - 50 > 0 && changeInputDifference50 > 0) {
//       changeInputLimited -= 50;
//       coinsLimited.push(50);
//     } else if (changeInputLimited - 20 > 0 && changeInputDifference20 > 0) {
//       changeInputLimited -= 20;
//       coinsLimited.push(20);
//     } else if (changeInputLimited - 10 > 0 && changeInputDifference10 > 0) {
//       changeInputLimited -= 10;
//       coinsLimited.push(10);
//     } else if (changeInputLimited - 5 > 0 && changeInputDifference5 > 0) {
//       changeInputLimited -= 5;
//       coinsLimited.push(5);
//     } else if (changeInputLimited - 1 >= 0 && changeInputDifference1 > 0) {
//       changeInputLimited -= 1;
//       coinsLimited.push(1);
//     }
//   }

//   return coinsLimited;
// }
// let coinsLimited = changeInputLimited(500);
// console.log(coinsLimited);
