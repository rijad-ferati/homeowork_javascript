// Javascript CLass 04, Student Exercise 1 STUDENT EXERCISE - #1
// FIND NUMBERS IN ARRAY


function findNumber(number, numberArray) {
    let count = 0;
    for (let i = 0; i < numberArray.length; i++) {
        if (number === numberArray[i]) {
            count++;
        }


    }
    console.log(`There is ${count} occurences of number ${number} in the array`)

}

findNumber(5, [1, 2, 5, 5, 7, 13, 45, 55, 33, 45, 66, 78, 76, 5,]);
findNumber(6, [6, 4, 20, 54, 6, 23, , 36, 6, 5]);
findNumber(7, [3, 3, 5, 9]);