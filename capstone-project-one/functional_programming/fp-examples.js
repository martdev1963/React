
/**
 *  Examples of Functional Programming
 *  Using the filter() function
 * 
*/

var testScores = [92, 87, 54, 63, 75, 59];
var passingTest = function func(test) {
    return test > 60;
}

// This array will contain all the passing test...this means the student is graduating.
var graduation = testScores.filter(passingTest);
console.log(graduation);
alert(graduation);


// Function to calculate the sum of two numbers
function calculateSum(a, b) {
    return a + b;
}

// Get the output element
const outputElement = document.getElementById('output');

// Calculate the sum and display it in the output element
const sum = calculateSum(5, 10);
outputElement.textContent = `The sum of 5 and 10 is: ${sum}`;