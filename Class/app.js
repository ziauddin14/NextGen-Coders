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

var num = prompt("Enter a Number: ")
if (num % 2 === 0) {
  console.log("this num is even");
} else {
  console.log("this number is odd");
}
 
