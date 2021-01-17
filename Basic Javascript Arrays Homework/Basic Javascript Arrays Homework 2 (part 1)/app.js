// Basic Javascript Arrays, Homework nr. 2 (part 1)

let numbers = [5, -10, "hello", 7, "bye", 54, 20, "why",];
function sumNumbers() {
    let sum = 0;
    for (let number of numbers) {
        if (isNaN(number)) {
            console.log(`${number}  is not a number.`);
        }
        else { sum += number };

    }
    return sum;
}
let result = sumNumbers();

console.log(result);


