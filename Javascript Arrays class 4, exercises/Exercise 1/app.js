// Exercise 1,CLass 04, Arrays 
// Action: Write a JavaScript program to read ten array values, determine the largest value, and print it

// solution:
var arr = [3, 6, 2, 56, 32, 5, 89, 32, 50, 20];
var largest = arr[0];

for (var i = 0; i < arr.length; i++) {
    if (largest < arr[i]) {
        largest = arr[i];
    }
}
console.log(largest)