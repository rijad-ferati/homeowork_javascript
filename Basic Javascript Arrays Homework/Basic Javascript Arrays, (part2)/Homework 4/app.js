// Javascript Class 04, Arrays, Homework 4 part 2
/* 
Description: 
Write a javascript function that:
When given 2 arrays of students firstNames and lastNames will return a new array with students full names
Every name should have a numeric value before it
Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
Result: full = ["1. Bob Gregory", "2. Jill Wurtz"]
*/

// CODE:
function combineNames(firstNames, lastNames) {
    if (firstNames.length !== lastNames.length) {
        Alert("The number of first names are not equal to the number last names, arrays must be equal in count");
    }
    else {
        let newArray = [];
        let counter = 1;
        // we create a loop to give out the merged items from the new array
        for (let i = 0; i < firstNames.length; i++) {
            newArray.push(String(counter) + ' ' + firstNames[i] + ' ' + lastNames[i]);
            counter++;
        }
        return newArray;
    }
}



let combinedNames = combineNames(
    [
        "Bob",
        "Jill",
        "Ted",
        "Marshall",
        "Jeremy",
        "Julia",
        "Jennifer",
        "Sandra",
        "Oprah",
        "Snoop"
    ]
    ,

    ["Gregory",
        "Wurtz",
        "Mosby",
        "Ericsen",
        "Smith",
        "Roberts",
        "Aniston",
        "Bullock",
        "Winfrey",
        "Dog"
    ]
);

console.log(combinedNames);
