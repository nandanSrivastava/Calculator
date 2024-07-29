const number = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");
const buttons = document.querySelectorAll(".buttons button");
const display = document.querySelector(".display");
const view = document.querySelector("#view");
const clearButton = document.querySelector(".clear");
const equalsButton = document.querySelector("#result"); // Select the equals button
let calcString='';


function showOnDisplay(element) {
    view.value += element.textContent; // Show the clicked value & respond
}

function showResult(result){
    view.value = '';
    const parsedResult = result.toString();
    view.value += parsedResult;
}

buttons.forEach(button => { // Check for the clicked button and show on screen
    button.addEventListener('click', function() {
        if(button.textContent==="="){
            console.log(button.textContent);
            return;
        }
        // calcString.concat(button.textContent);
        calcString += button.textContent;
        showOnDisplay(button);
    });
});

clearButton.addEventListener('click', function() {
    view.value = ''; // Clear the input screen
    calcString = ''; // Clear the existing calculation string
});

equalsButton.addEventListener('click', function() {
    // showOnDisplay(eval(calcString));
    // console.log('calculating...', calcString);
    // console.log(eval(calcString))
    showResult(eval(calcString)); // New function, just for result printing on screen;
});



// function calculate(operation, ...numbers) {
//     let result;
//     switch (operation) {
//         case '+':
//             result = 0;
//             for (let i = 0; i < numbers.length; i++) {
//                 result += numbers[i];
//             }
//             break;
//         case '-':
//             result = numbers[0];
//             for (let i = 1; i < numbers.length; i++) {
//                 result -= numbers[i];
//             }
//             break;
//         case '*':
//             result = 1;
//             for (let i = 0; i < numbers.length; i++) {
//                 result *= numbers[i];
//             }
//             break;
//         case '/':
//             result = numbers[0];
//             for (let i = 1; i < numbers.length; i++) {
//                 if (numbers[i] === 0) {
//                     throw new Error("Division by zero");
//                 }
//                 result /= numbers[i];
//             }
//             break;
//         default:
//             throw new Error("Unsupported operation");
//     }
//     return result;
// }