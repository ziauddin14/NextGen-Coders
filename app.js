console.log("Hello World! ");

//Console: Area where programmer see his code's output
//log: output jo likhi jaye computer ki taraf se 
// Semicolon: ye batany k liye k line pori hogai h .

let name = 'Zaid'
console.log(name);
console.log(22);
console.log(true);

/*
Data Types: 
1: String
2: Number
3: Boolean
4: Array
5: Object
6: Null
7: undefined
8:BigInt
9: Symbol
*/

//How can we check any variable's data type?
console.log(typeof(name));

//Class 02: (Operators in JavaScript)
//Operators: Symbols that perform operations on operands (values and variables)
let a = 10
let b = 5
//Arithmetic Operators : +, -, *, /, % , ++, -- , **, //
console.log(a + b); // Addition
console.log(a - b); // Subtraction
console.log(a * b); // Multiplication
console.log(a / b); // Division
console.log(a % b); // Modulus
console.log(a ** b); // Exponentiation
console.log(++a); // Increment
console.log(--b); // Decrement

//Practice: Write a program to calculate the area of a rectangle
let lenght = 40;
let width = 20;

console.log('Area of rectangle is: ' + (lenght * width));

//Assignment Operators: =, +=, -=, *=, /=, %=, ==, !=, ===, !==
let c = 10
c *= 5 // c = c *5
console.log(c); // 50
//Comparison Operators: ==, !=, ===, !==, >, <, >=, <=
console.log(5 == "5");
console.log('5' === "5"); 
console.log( 5 != 8);
console.log(10 !== "8");
console.log(10 != "10");
console.log(10 !== '10');
console.log(100 > 1000);
console.log( 100 >= 100);
console.log(1250 <= 1788);
console.log(14780 !== 1475);

//Class 03: Logical Operators: &&, ||, !
let attendance = +prompt("Enter your attendance percentage:");
let marks = +prompt("Enter your marks percentage:");
if (attendance >= 80 || marks >= 85) {
    console.log("Congratulations! You are eligible for the next level.");
}
//Logical NOT operator : !
let isDriving  = true;
if (!isDriving) {
    console.log('ab drive nhi kr skty!')
}
let isLoggedIn = prompt("Are you logged in? (yes/no)");
if (!isLoggedIn || isLoggedIn.toLowerCase() !== "yes") {
    console.log("You are not logged in. please log in first.");
}else {    
    console.log("Welcome back!");
}
//Default False Vlaue: In JavaScript.
// 0, "", null, undefined, NaN, false
console.log(NaN !== NaN); 
console.log("" === '');
console.log(1 === false);







