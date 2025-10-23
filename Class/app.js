/*2. Traffic Light Decision
Task:  
Ek variable lightColor diya gaya hai jisme value ho sakti hai "red", "yellow" ya "green".  
Aapko uske mutabiq action print karna hai:

- "red" → "Stop"  
- "yellow" → "Get Ready"  
- "green" → "Go"  
- Agar koi aur color ho → "Invalid color"*/
var lightColor = "red";
if (lightColor ==="red") {
    alert("Stop");
} else if (lightColor ==="yellow") {
    alert("Get Ready");
}else if (lightColor ==="green") {
    alert("Go");
}else {
    alert("Invalid color");
}
 
/*3. Leap Year Checker
Task:  
Ek year diya gaya hai. Aapko check karna hai ke wo leap year hai ya nahi:

- Agar year 4 se divisible ho:  
  - Agar 100 se divisible hai:  
    - Agar 400 se divisible hai → Leap Year  
    - Warna → Not a Leap Year  
  - Agar 100 se divisible nahi → Leap Year  
- Agar 4 se divisible nahi → Not a Leap Year*/

var year = prompt("Enter a year:");
if (year % 4 === 0) {
    if (year % 100 === 0)
        if (year % 400 === 0)
            alert("Leap Year");
        } else {
    alert("Not a Leap Year");
}
if (year % 100 != 0) {
    alert("Leap Year");
} 
if (year % 4 != 0) {
    alert("Not a Leap Year");
}

/*4. Number Sign and Parity
Task:  
Ek number diya gaya hai. Aapko pehle uska sign check karna hai (positive, negative, zero).  
Agar positive ho to check karein ke even hai ya odd.  
Output example: "Positive Even", "Negative", "Zero"*/

/*Agar number 0 se bada hai, to wo Positive hai.
Agar number 0 se chhota hai, to wo Negative hai.
Agar number 0 ke barabar hai, to wo Zero hai.*/

var number = prompt("Enter a number:");
if (number > 0) 
    if (number % 2 === 0) {
        alert("Positive Even");
    }
if (number % 2 !== 0) {
    alert("Positive Odd");
}
if (number < 0) {
    alert("Negative");
}
if (number == 0) {
    alert("Zero");
}

/*5. Login System
Task:  
Do variables hain: username aur password.  
Aapko login system banana hai:

- Agar username === "admin" ho:  
  - Agar password === "1234" ho → "Login Successful"  
  - Warna → "Incorrect Password"  
- Agar username !== "admin" ho → "User Not Found"*/

var username = prompt("Enter username:");
var password = prompt("Enter password:");
if (username === "admin") 
    if (password === "1234") {
        alert("Login Successful");  
    } else {
        alert("Incorrect Password");
}
if (username !== "admin") {
    alert("User Not Found");
}

/*2. Traffic Light Decision
Task:  
Ek variable lightColor diya gaya hai jisme value ho sakti hai "red", "yellow" ya "green".  
Aapko uske mutabiq action print karna hai:

- "red" → "Stop"  
- "yellow" → "Get Ready"  
- "green" → "Go"  
- Agar koi aur color ho → "Invalid color"*/
var lightColor = "red";
if (lightColor ==="red") {
    alert("Stop");
} else if (lightColor ==="yellow") {
    alert("Get Ready");
}else if (lightColor ==="green") {
    alert("Go");
}else {
    alert("Invalid color");
}
 
/*3. Leap Year Checker
Task:  
Ek year diya gaya hai. Aapko check karna hai ke wo leap year hai ya nahi:

- Agar year 4 se divisible ho:  
  - Agar 100 se divisible hai:  
    - Agar 400 se divisible hai → Leap Year  
    - Warna → Not a Leap Year  
  - Agar 100 se divisible nahi → Leap Year  
- Agar 4 se divisible nahi → Not a Leap Year*/

var year = prompt("Enter a year:");
if (year % 4 === 0) {
    if (year % 100 === 0)
        if (year % 400 === 0)
            alert("Leap Year");
        } else {
    alert("Not a Leap Year");
}
if (year % 100 != 0) {
    alert("Leap Year");
} 
if (year % 4 != 0) {
    alert("Not a Leap Year");
}

/*4. Number Sign and Parity
Task:  
Ek number diya gaya hai. Aapko pehle uska sign check karna hai (positive, negative, zero).  
Agar positive ho to check karein ke even hai ya odd.  
Output example: "Positive Even", "Negative", "Zero"*/

/*Agar number 0 se bada hai, to wo Positive hai.
Agar number 0 se chhota hai, to wo Negative hai.
Agar number 0 ke barabar hai, to wo Zero hai.*/

var number = prompt("Enter a number:");
if (number > 0) 
    if (number % 2 === 0) {
        alert("Positive Even");
    }
if (number % 2 !== 0) {
    alert("Positive Odd");
}
if (number < 0) {
    alert("Negative");
}
if (number == 0) {
    alert("Zero");
}

/*5. Login System
Task:  
Do variables hain: username aur password.  
Aapko login system banana hai:

- Agar username === "admin" ho:  
  - Agar password === "1234" ho → "Login Successful"  
  - Warna → "Incorrect Password"  
- Agar username !== "admin" ho → "User Not Found"*/

var username = prompt("Enter username:");
var password = prompt("Enter password:");
if (username === "admin") 
    if (password === "1234") {
        alert("Login Successful");  
    } else {
        alert("Incorrect Password");
}
if (username !== "admin") {
    alert("User Not Found");
}

