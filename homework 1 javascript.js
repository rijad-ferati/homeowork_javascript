// Segment2 
let quantity = 300;
let unitPrice = 119.5;
let taxRate = 0.05;
let taxPerUnit = unitPrice * taxRate;
let totalPrice = quantity * (unitPrice + taxPerUnit);
document.getElementById("result").innerHTML = "The Total price of the Phones is: " + totalPrice;
// Segment 2

function calc() {
    let quantity = (document.getElementById('quantity')).value;
    let unitPrice = (document.getElementById('UnitPrice')).value;
    let taxPercentage = (document.getElementById('taxPercentage')).value;
    let totalPrice = quantity * (unitPrice + taxPerUnit);

    getElementById('result-2').innerHTML = "The Result is" + totalPrice
}