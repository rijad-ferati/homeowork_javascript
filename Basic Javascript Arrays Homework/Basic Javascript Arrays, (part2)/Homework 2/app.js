// Javascript Class 04, Arrays, Homework 2 part 2
// Description: Title: Looping structures
// 
// Description: Write a loop in JavaScript that in range from 1 till 20 will write in the console every number, and will add the "\n" new line after every even number otherwise it will add " " empty space.

function range() {
    let number = 1;
    let result = "";
    while (number <= 20) {

        result += String(number) + ' ';

        if (number % 2 === 0) {
            result += '\n';
        }

        number++;
    }
    console.log(result);
}

range();

