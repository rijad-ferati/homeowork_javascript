// Homework part 2

function dogToHumanYears(dogYears) {
    let result = dogYears * 7
    return result;
}

function humanToDogYears(humanYears) {
    let result = humanYears / 7
    return result;
}

let personChoice = prompt(`Type human to convert from dog to human, or type dog to convert from human to dog years!`);

if (personChoice === "dog") {
    let personInput = parseInt(prompt("Please enter age:"));
    console.log(humanToDogYears(personInput));
}

else if (personChoice === "human") {
    let personInput = parseInt(prompt("Please enter age:"));
    console.log(dogToHumanYears(personInput));

}
else {
    alert("ERROR");
}