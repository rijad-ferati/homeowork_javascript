// Selectors
let listContainer = document.querySelector('#list-container');

let listContainer2 = document.querySelector('#list-container-2');

let listContainer3 = document.querySelector('#list-container-3');



// Variables 
let arrayNumbers = [3, 5, 66, 78, 34, 90, 60, 25, 57];

// Functions

function numbersArray(array) {
    listContainer.innerHTML += `<ul>`
    for (let i = 0; i < array.length; i++) {
        listContainer.innerHTML += `<li>${array[i]}</li>`
    }

    listContainer.innerHTML += `</ul>`
}

function sumArray(array) {
    let sum = array.reduce(function(a, b) {
        return a + b;
    }, 0);


    listContainer2.innerHTML += `<p>The sum of all the numbers of the array is: <strong>${sum}</strong></p>`

    return sum;

}

function printEquation(array) {

    let equation = array.join('+');
    listContainer3.innerText = `The equation of the numbers of the array is: (${equation})=${sumArray(array)}`
}



console.log(arrayNumbers.join('+'));
// array.join()

// Calling the functions

numbersArray(arrayNumbers);


sumArray(arrayNumbers);

printEquation(arrayNumbers);