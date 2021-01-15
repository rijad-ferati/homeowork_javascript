// Homework part 3 
let balance = 15000; //set initial balance.

function get_balance() {
    alert('Your current balance is: ' + balance);
}

function make_withdrawal() {
    let amount = parseFloat(prompt('Enter the amount you would like to withdraw?'));
    if (amount > balance) {
        alert("You don't have enough funds in your account to make this withdrawal");
    } else {
        let remaining = balance - amount;
        alert("You have withdrawn: " + amount + "\nRemaining balance: " + remaining);
        balance = remaining
    }
}

make_withdrawal()
make_withdrawal()
get_balance()