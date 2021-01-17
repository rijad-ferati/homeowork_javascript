// Javascript Class 04, Arrays, Homework 3 part 2
/*Description: Write a JavaScript function that will return:
The sum of the MAX and MIN numbers from an array with numbers
Ex: arr = [3, 5, 6, 8, 11]
Output: Max: 11, Min: 3, Sum: 14
Bonus: Try making the function work if there are other types of items in it*/

function findMaxAndMin(arrayInput) {
    let onlyNumbers = [];

    for (let i = 0; i < arrayInput.length; i++) {
        if (!isNaN(arrayInput[i])) {
            onlyNumbers.push(arrayInput[i]);
        }

    }
    onlyNumbers.sort();


    let max = onlyNumbers[onlyNumbers.length - 1];
    let min = onlyNumbers[0];

    console.log(`Max number: ${max} Min number: ${min} sumMaxAndMin: ${max + min}`);
}


findMaxAndMin([2, "Hello", 5, 1, "Goodbye", 5, 45, "dog", 33, 21, "cat", -40]);