// // Segment 1 the easy one, given inputs 

let quantity_0 = 300;
let unitPrice_0 = 119.5;
let taxRate_0 = 5;
let taxPerUnit_0 = unitPrice_0 * (taxRate_0 / 100);
let totalPrice_0 = quantity_0 * (unitPrice_0 + taxPerUnit_0);
document.getElementById("result_1").innerHTML = "The Total price of the Phones is: " + totalPrice_0;

// // Segment 2 Interactive Form, advanced :)

function calc() {
    let unitPrice = parseFloat(document.getElementById('unit_price').value);
    let quantity = parseFloat(document.getElementById('quantity_0').value);
    let taxPercentage = parseFloat(document.getElementById('tax_percentage').value);
    let taxPerUnit = (taxPercentage / 100 * unitPrice);
    let totalPrice = (quantity * (unitPrice + taxPerUnit));
    getElementById = (result_2).innerHTML = `The Result is: ` + totalPrice + `$`;
}
