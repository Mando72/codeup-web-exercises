// "use strict";
// (function(){
//
//
//
// /**
//  * TODO:
//  * Create a function called 'sayHello' that takes a parameter 'name'.
//  * When called, the function should return a message that says hello to the passed in name.
//  *
//  * Example
//  * > sayHello("codeup") // returns "Hello, codeup!"
//  */

function sayHello(mando) {
    return 'Hello ' + mando;
}
var mando = prompt('what\'s your name?');
console.log(sayHello('mando'));
//
//
//
//
//
//
// /**
//  * TODO:
//  * Call the function 'sayHello' and pass your name as a string literal argument.
//  * Store the result of the function call in a variable named 'helloMessage'.
//  *
//  * console.log 'helloMessage' to check your work
//  */
//
var  helloMessage = sayHello('mando');
    console.log(helloMessage);

// /**
//  * TODO:
//  * Store your name as a string in a variable named 'myName', and pass that
//  * variable to the 'sayHello' function. You should see the same output in the
//  * console.
//  */

var myName = 'mando';

console.log(sayHello(myName));
//
//
// // Don't modify the following line, it generates a random number between 1 and 3
// // and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);
//
// /**
//  * TODO:
//  * Create a function called 'isTwo' that takes a number as a parameter.
//  * The function should return a boolean value based on whether or not the passed
//  * number is the number 2.
//  *
//  * Example
//  * > isTwo(1) // returns false
//  * > isTwo(2) // returns true
//  * > isTwo(3) // returns false
//  *
//  * Call the function 'isTwo' passing the variable 'random' as a argument.
//  *
//  * console.log *outside of the function* to check your work (you should see a
//  * different result everytime you refresh the page if you are using the random
//  * number)
//  */
//
function isTwo(number) {

    return 2 == number;
}
console.log(isTwo(random));

//
//
//
//
//
//
//
//
// /**
//  * TODO:
//  * Create a function named 'calculateTip' to calculate a tip on a bill at a
//  * restaurant. The function should accept a tip percentage and the total of the
//  * bill, and return the amount to tip
//  *
//  * Examples:
//  * > calculateTip(0.20, 20) // returns 4
//  * > calculateTip(0.25, 25.50) // returns 6.37
//  * > calculateTip(0.15, 33.42) // returns 5.013
//  */

function calculateTip(tipPercentage, billTotal) {

    var tipInValue = tipPercentage / 100;//0.2
    return billTotal * tipInValue;
}

   console.log(calculateTip(20, 100));
   console.log(calculateTip(20, 20));
   console.log(calculateTip(25, 25.5));
   console.log(calculateTip(15, 33.42));
// //
//
// /**
//  * TODO:
//  * Use prompt and alert in combination with your calculateTip function to
//  * prompt the user for the bill total and a percentage they would like to tip,
//  * then display the dollar amount they should tip
//  */
//
    console.log(calculateTip(prompt('Give me the tip %'), prompt('Give me the total bill')));
//
//
//
//
//
//
//
//
// /**
//  * TODO:
//  * Create a function named `applyDiscount`. This function should accept a price
//  * (before a discount is applied), and a discount percentage (a number between 0
//  * and 1). It should return the result of applying the discount to the original
//  * price.
//  *
//  * Example:
//  * > var originalPrice = 100;
//  * > var dicountPercent = .2; // 20%
//  * > applyDiscount(originalPrice, dicountPercent) // 80
//  *
//  * > applyDiscount(45.99, 0.12) // 40.4712
//  */
//
// //
function applyDiscount(originalPrice, discountPercent){
    var discount = discountPercent / 100;//.12
    var discountVal = originalPrice * discount;
    return originalPrice - discountVal;

}
console.log(applyDiscount(100, 12));
console.log(applyDiscount(45.99, 12));






//
// ### Create a calculator fx
//
// - Create a calculator function that takes 4 parameters, the first one is a number,
// the second is an operator string literal, the third it's another number and the fourth
// will determine the number of decimals the result should be rounded.
// The following operator symbols are valid in your function:
//
//     ```
// 'add' = +
// 'sub' = -
// 'mul' = *
// 'div' = /
// 'mod' = % (This should give you the modulus from param 1 % param 2)
// 'neg' = ¬
// 'sqr' = √ (This should give you the square root of each parameter number)
// ```
//
// - Make sure you handle invalid operators and show an error message.





