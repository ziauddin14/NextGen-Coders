// var firstname = "Asim"
// var lastname = "Khan"
// lastname = "Raza"
// console.log(firstname + " " + lastname)

// var studentname = "Asim"
// var studentage = 20
// var studentclass = "B.Tech"
// console.log("Student Name is " + studentname);
// console.log("Student Age is:" + studentage);
// console.log("Student Class is " + studentclass);

// Question 1
// var fruit = "Apple"
// console.log(fruit);

// // Question 2
// var city = "Karachi"
// city = "Lahore"
// console.log(city);

// // Question 3
// var marks = 50
// marks = 50 + 10
// console.log(marks);

// // Question 4
// var temp = ""
// console.log(temp);
// temp = 30 + "C"
// console.log(temp);

// // Question 5
// var name = "Ali"
// var age = 18
// var hobby = "Football"
// console.log("My name is" + " " + name +  " "+"I am "
// + age  + " " +"years old" +  " " +"I like " + hobby);

// Class 02

// var myName = "Zia Uddin"
// alert(myName)

// var age = 15
// alert("Famia's age is: " + age)
//  var myname = "Famia"
//  alert(myname)

// var fisrt_City = "Karachi"
// alert(fisrt_City)
// var _fisrtcity = "lahore"
// console.log(_fisrtcity);

//JavaScript Identifiers
// Variables are identified with unique names called identifiers.

// Names can be short like x, y, z.

// Names can be descriptive age, sum, carName.

// The rules for constructing names (identifiers) are:

// Names can contain letters, digits, underscores, and dollar signs.
// Names must begin with a letter, a $ sign or an underscore (_).
// var _firstcity = "lahore"
// console.log(_firstcity);
// Names are case sensitive (X is different from x).
// var name = "Uma"
// var Name = "ima"
// Reserved words (JavaScript keywords) cannot be used as names.
// var,let,contain, for.

// var num = 50 - 48
// num = 50*2
// num = 50/10
// num = 50%3
// console.log(num);

// Class 03
// Increament
// var count = 0
// count++
// count++
// count++
// count++
// count++
// console.log(count);

//Decreament
// var num = 5
// var newNUm = --num
// console.log(newNUm);

//Practice:
// var num = 5
// var newNum = num-- + ++num
// console.log(newNum);

// var age = 50
// var after5Years = age++ * 5
// console.log(after5Years);

// var num = 10
// var newNum = num * 2
// console.log(num);

// var age = 17
// console.log("My age is "+ ++age +
//     "after some  year");

// var num = 89
// num++ - --num
// console.log(num);

// // Class 04
// var num = (1+3)*4
// console.log(num);
//BODMAS (Bracket Open Division Multiplication Addition Subtraction)
// var cal = (15-8) + (5-9)
// console.log(cal)

// var result = ((2 * 4) * 4) + 2;
// console.log(result);

//Concateneting Strings
// var firstName = "Maria"
// var lastName = "--"
// console.log(firstName + lastName);

// var num1 = "10"
// var num2 = "40"
// console.log(num1 + num2);

// var num1 = '20'
// var num2 = "89"
// console.log(num1 + num2);

// alert("2 plus 2 equals " + (2 + 2));

// var n = 7
// var ans =  n++ + ++n - n--  + --n
// console.log(ans)

//Practise Problems:
// console.log("2" + "2");
// console.log("2" + 2);
// console.log(2 + 2 + "2" + 2 + 2);
// console.log("2" + 2 + 2);

// var name = prompt("Enter your name: ")
// console.log(name);

// var num = +prompt("Enter your Age: ")
// console.log("Your Age is after 1 year "
//     + num + 1);

//********Data Types in JavaScript *//////
//1: String, 2: Number, 3: Boolean, 4:Undefined
//5: Null, 6: Array, 7:Object
//Undefined Example:
// var num
// console.log(num);
//Null Example:
// var name = null
// console.log(name);

//Boolean Example:
// var name  = "Zia"
// var age = 17
// var student = 19
// console.log(name + " " +age+ " " + student);
// === !== < > >=  =< ==
// if(student === "19"){
//    alert("Bacha parhta h ...")
// }else{
//    alert('Child is HK')
// }
// var age = +prompt("Enter your Age:")
// if (age <= 18) {
//     console.log("You Can't Vote");
// } else {
//     console.log("You can Vote");

// }
// var marks = +prompt("Enter your Marks: ");
// if (marks >= 90) {
//   console.log("Your grade is A+");
// } else if (marks >= 80) {
//   console.log("Your grade is A");
// }else if(marks >= 70){
//     console.log('B grade');
// }else{
//     console.log('You are Topper from neechy');

// }
// var str = "3"
// console.log(typeof(str));

//Arithmetic Operator: +, -, *, /, %, **, ++, --
//Assignment Operator: =, +=, -=, *=, ,/= ,%= ,**=
//Comparision operator: ==, ===, !=, !==, >,<, >=, <=, ?, :
//  var age  = 15
// age += 1 ==> age = age + 1
// age -= 1 ==> age = age - 1
//age *= 1 ==> age = age * 1
//  age /= 2 ==> age = age / 2
// age %= 2 ==> age = age % 2
// age **= 2 ==> age = age ** 2
//  console.log(age);
// var age = prompt("Enter your Age: ")
// if (age != 18) {
//   console.log("you are eligible for vote!");

// } else if(age > 18){
//   console.log("you are not eligible for vote!");

// }else{
//   console.log("dhandli hogai!");

// }

// var num = prompt("Enter a Number: ")
// if (num % 2 === 0) {
//   console.log("this num is even");
// } else {
//   console.log("this number is odd");
// }
/*
 Problem 2: Simple Calculator
Description:
User se 2 numbers aur ek operator (+, -, *, /) lo.
Phir according to operator, correct result calculate karke alert karo.
*/
// var isLoggedin = prompt("Are you logged in? (yes/no)");
// if (isLoggedin === "yes") {
//   var isProductAvaliable = prompt("Is the product available? (yes/no)");
//   if (isProductAvaliable === "yes") {
//     var isPymentDone = prompt("Is the payment done? (yes/no)");
//     if (isPymentDone === "yes") {
//       alert("You can buy this product");
//     } else {
//       alert("Please complete your payment");
//     }
//   } else {
//     alert("Product is not available");
//   }
// } else {
//   alert("Please login to continue");
// }

//Loops in JavaScript:
// for(var i = 1; i <= 10 ; i++){
//  console.log( i*2 );
// }
// console.log("Programm End!");

//while Loop:
// var i = 1
// while (i <= 10) {
//     console.log("Number: " + i);
//     i++
// }

// do..while Loop:
// var i = 6
// do {
//     console.log("Number: " + i);
//     i++
// } while (i <= 5);

// var i = 1
// while (i <= 10) {
//     console.log("Madam");
//     i++
// }

// for (var i = 1 ; i  <= 10; i++) {
//     console.log("Madam ");
// }

// for(var i = 10; i >= 1; i--){
//     console.log(i);
// }
// var sum = 0
// for(var i = 1; i <= 10; i++){
//     sum = sum + i;
// }
// console.log("The sum of 1 to 10 is: " + sum);

//break Statement & continue Statement:
// for(i = 1; i <= 10; i++){
//     if(i ==4){
//         break;
//     }
//     console.log(i);
// }
// console.log("Loop Finished!");
// var i = 0
// while (i <= 10) {
//     if (i === 8) {
//         break;
//     }
//     console.log(i);
//     i++
// }
// console.log("Loop Finished!");

// for (var i = 1; i <= 25; i++) {
//     if (i === 13) {
//         continue
//     }
//     console.log(i);
// }
// console.log("Loop Finished!");

//  for (var i = 1; i <= 30; i++) {
//     if (i %  3 === 0) {
//         continue
//     }
//     console.log(i);
// }
// console.log("Loop Finished!");

// for (var i = 1; i <= 50; i++) {
//   if (i % 2 == 0) {
//     continue;
//   }
//   if (i === 45) {
//     break;
//   }
//   console.log(i);
// }
// console.log("Loop Finished!");

//Loops Practice Problems:
// var total = 0
// for (var i = 1; i <= 5; i++) {
//   var num = +prompt("Enter a Number: ");
//   if (num < 0) {
//     console.log("Negative number , Skip it!");
//     continue;
//   }
//   if (num >= 100) {
//     console.log("Number is too High!Stop the Loop");
//     break;
//   }
//   total += num;
// }
// console.log("The Sum of All Valid Number is: "+ total);

// Question 2:
// var countOdd = 0;
// for (var i = 1; i <= 7; i++) {
//   var num = +prompt("Enter a Number: ");
//   if (num == 0) {
//     console.log("Zero aagya!. LOop ko Rook do!");
//     break;
//   }
//   if (num % 2 == 0) {
//     console.log("Even Number hai, Skip kar do!");
//     continue;
//   }
//   countOdd++;
// }
// console.log("Total Odd Numbers entered: " + countOdd);

// Question 3:
// var totalMarks = 0;
// var passedStudents = 0;
// for (var i = 1; i <= 6; i++) {
//   var marks = +prompt("Enter a Marks: ");
//   if (marks < 50) {
//     console.log("Marks 50 se kam h student Fail! , and Skip it");
//     continue;
//   }
//   if (marks >= 100) {
//      console.log("Invalid Marks! Loop ko Rook do");
//     break;
//   }
//   totalMarks += marks
//   passedStudents++;
// }
// console.log("Total Marks of Passed Students: " + totalMarks);
// console.log("Total Passed Students: " + passedStudents);

// Question 4:
// for (var i = 1; i <= 5; i++) {
//   var pass = prompt("Enter Password (type exit to stop programm): ");
//   if (pass === "exit") {
//     console.log("Programm Stopped by User!");
//     break;
//   }
//   if (!pass.includes("@")) {
//     console.log("Invalid Password, Missing @ Symbol! , Skip it");
//     continue;
//   }
//   console.log("Password Accepted!");
//   break;

// }

//Nested Loop
// for (row = 1; row <= 4; row++) {
//   // <== Outer Loop
//   console.log("Row Number:" + row);
//   for (col = 1; col <= 5; col++) {
//     // <== Inner Loop
//     console.log(" Student" + " " + col + "in row"
//      + row);
//   }
//   console.log("----------------");
// }
//Template Litrellers
// var num = 666
// console.log(`Number is ${num} Devil Number`);

//Table Printing using Nested Loop:
// for (table = 2; table <= 4; table++) {
//   console.log(`Table of ${table}`);
//   for (i = 1; i <= 10; i++) {
//     console.log(`${table} X ${i} = ${table * i}`);
//   }
//   console.log("-----------------");
// }

for (row = 5; row >= 1; row--) {
  if (row % 2 == 0) {
    continue
  }
  var star = "";
  for (col = 1; col <= row; col++) {
    star += "* ";
  }
  console.log(star);
}
