// Javascript Class 04, Arrays, Student Exercise 2
// STUDENT EXERCISE - #2
// FILTER ODD/EVEN NUMBERS FUNCTION

function findNumber(arrayInput, arrayType) {

    let newArray = [];


    for (let i = 0; i < arrayInput.length; i++) {

        if (arrayType === "even") {

            if (arrayInput[i] % 2 === 0) {
                newArray.push(arrayInput[i]);
            }


        } else if (arrayType === "odd") {

            if (arrayInput[i] % 2 !== 0) {
                newArray.push(arrayInput[i]);
            }

        }

    }


    return newArray;

}

let resultArray = findNumber([1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], "odd");
console.log(resultArray);
resultArray = findNumber([1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], "even");
console.log(resultArray);
