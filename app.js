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

/*Class 04: Conditional Statements: if, else if, else, switch, case,
 default, break,  ternary operator
*/
//If-Else Statement
let age = +prompt("Enter your age:");
if (age < 18) {
    console.log("You are a minor.");
} else if (age >= 18 && age < 60) {
    console.log("You are an adult.");
} else {
    console.log("You are a senior citizen.");
}
//Switch Case Statement
let day = prompt("Enter a day of the week:");
switch (day.toLowerCase()) {
    case "monday":
        console.log("Today is Monday.you can start your week with a positive mindset.");
        break
    case "tuesday":
        console.log("Today is Tuesday.");
        break
    case "wednesday":
        console.log("Today is Wednesday.");
        break
    case "thursday":
        console.log("Today is Thursday.");
        break
    default:
        console.log("Invalid day entered.");
}

//ATM Machine program
let atm_options = prompt("Welcome to the ATM! Please select an option: \n1. Check Balance\n2. Withdraw Money\n3. Deposit Money\n4. Exit");
switch (atm_options) {
    case "1":
        console.log("Your current balance is $500.");
        break;
    case "2":
        let withdraw_amount = +prompt("Enter the amount to withdraw:");
        if (withdraw_amount > 500) {
            console.log("Insufficient funds.");
        } else {
            console.log(`You have withdrawn $${withdraw_amount}. Your new balance is $${500 - withdraw_amount}.`);
        }
        break;
    case "3":
        let deposit_amount = +prompt("Enter the amount to deposit:");
        console.log(`You have deposited $${deposit_amount}. Your new balance is $${500 + deposit_amount}.`);
        break;
    case "4":
        console.log("Thank you for using the ATM. Goodbye!");
        break;
    default:
        console.log("Invalid option selected. Please try again.");
        break;
}

//Ternary Operator
let number = +prompt("Enter a number:");
let result = (number % 2 === 0 ) ? "Number is Even " : "Num is Odd";
console.log(result);


//Class 04 : Loops in JavaScript: for, while, do-while
//For Loop, while loop, do-while loop, break and contiinue staements
//For loop
for (let i = 1 ; i <= 10 ; i++) {
    console.log(i);
}
//While Loop
let j = 1
while(j <= 10){
    console.log(j);
    j++
}
//Do-While Loop

let i = 10
do {
    console.log(i);
    i++
} while (i <= 5);

for (let i = 0; i <= 15; i++) {
   if (i === 8) {
    break; // Exit the loop when i is 8
   }    
    console.log(i);
}
console.log("Loop exited at i = 8");

//Continue Statement
for (let i = 0; i <= 10; i++) {
    if (i % 2 !== 0) {
        continue; // Skip the rest of the loop when i is 5
    }
    console.log(i);
}
console.log("Loop completed, skipped all odd numbers.");

for (let i = 5; i >= 1; i--){
    console.log(i);
}

//Sum of 1 - 10
let sum = 0 
for (let i = 1; i <= 10; i++) {
    sum += i 
}
console.log("The sum of numbers from 1 to 10 is: " + sum);
