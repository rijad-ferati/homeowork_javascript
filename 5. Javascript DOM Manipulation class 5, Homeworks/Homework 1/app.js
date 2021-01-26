// Defining variables for each editable element in the pagel
let firstDiv = document.getElementById("first")
let firstHeader = document.getElementById("first").firstElementChild;
let firstParagraph = firstHeader.nextElementSibling;
let secondDiv = firstDiv.nextElementSibling;
let secondParagraph = secondDiv.firstElementChild;
let secondDivText = secondParagraph.nextElementSibling;
let thirdDiv = secondDiv.nextElementSibling;
let thirdDivHeader1 = thirdDiv.firstElementChild;
let thirdDivHeader3 = thirdDivHeader1.nextElementSibling;


// Check if the variables are working 
console.log(firstDiv);
console.log(firstHeader);
console.log(firstParagraph);
console.log(secondDiv);
console.log(secondParagraph);
console.log(secondDivText);
console.log(thirdDiv);
console.log(thirdDivHeader1);
console.log(thirdDivHeader3);

// changing the elements/page sections and text
firstHeader.innerText = "Magic Header Number 1"

firstParagraph.innerText = "It's always important to enjoy the little things in life, even if it means getting joy from a single line of code that's working properly."

secondParagraph.innerText += "But just easy doesn't do it justice, what you should do is sit down and make a lot of mistakes, and most importantly never give up!"

secondDivText.innerText += " having a lot of fun while doing it, even making a game out of it, whatever works for you is fine."

thirdDivHeader1.innerText = "Welcome to the Magical World of Narnia! Open the closet door!"

thirdDivHeader3.innerText = "Be the change you wish to see in the world-Mahatma Gandhi"