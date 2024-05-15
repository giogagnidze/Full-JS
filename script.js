// variable = A container that stores a value.
//            Behaves as if it were the value it contains

// 1. declaration     let x;
// 2. assigment       x = 100;

// x = 100;
// console.log(x)

// let age = 25;
// let price = 10.99;
// let gpa = 2.1

// console.log(`You are ${age} years old`)
// console.log(`the price is $${price}`)
// console.log(`Your gpa is: ${gpa}`)

// let firstName = "Giorgi"

// console.log(typeof firstName)  // display type of fristName
// console.log(`your name is ${firstName}`)


// let online = true

// console.log(typeof online)  //boolean
// console.log(`Bro is online: ${online}`)


// let fullName = "Giorgi Gagnidze"
// let age = 15
// let isStudent = true

// document.getElementById("p1").textContent = `Your name is ${fullName}`;
// document.getElementById("p2").textContent = `your age is ${age}`;
// document.getElementById("p3").textContent = `enrolled: ${isStudent}`;










// arithmetic operators = operands  (values, variables, etc.)
//                        operators (+ - * /)
//                        ex. 11 = x + 5;


// let students = 30;

// students = students + 1
// students = students - 1
// students = students * 2
// students = students / 2
// students = students ** 2
// students = students % 2

// students += 1
// students -= 1
// students *= 2
// students /= 2
// students **= 2
// students %= 2

// students++
// students--

// console.log(students)


/* 
    operator precedence
    1. paranthesis ()
    2. exponents
    3. multiplication & devision & modulo
    4. addition & subtraction
*/

// let result = 1 + 2 * 3 + 4 ** 2

// console.log(result)















// How to accept user input

// 1. EASY WAY = windows prompt
// 2. PROFESSIONAL WAY = HTML textbox


// let username = window.prompt("whats your name? ")
// console.log(username)

// let username;

// document.getElementById("mybtn").onclick = function(){
//     username = document.getElementById("mytxt").value;
//     console.log(username)
//     document.getElementById("myh1").textContent = `Hello ${username}`

// }











// type conversion = change the datatype of a value to another
//                   (string, numeber, booleans)

// let age = window.prompt("How old are you")
// age = Number(age) // making the age variable as int
// age += 1

// console.log(age, typeof age)



// circle radius

// const PI = 3.14159;
// let radius;
// let circumferance;


// document.getElementById("mybtn").onclick = function() {
//     radius = document.getElementById("mytxt").value;
//     radius = Number(radius)
//     circumferance = 2 * PI * radius
//     document.getElementById("myh3").textContent = circumferance + "cm"
// }









// COUNTER PROGRAM 

// const decreaseBtn = document.getElementById("decreaseBtn")
// const resetBtn = document.getElementById("resetBtn")
// const increaseBtn = document.getElementById("increaseBtn")
// const countLabel = document.getElementById("countLabel")
// let count = 0

// increaseBtn.onclick = function() {
//     count++
//     countLabel.textContent = count
// }
// decreaseBtn.onclick = function () {
//     count--
//     countLabel.textContent = count
// }
// resetBtn.onclick = function () {
//     count = 0
//     countLabel.textContent = count
// }



// Math = built-in object provides a
//        collection of properties and methods

// console.log(Math.PI)
// console.log(Math.E)

// let x = 3.21
// let y = 2
// let z;

// z = Math.round(x)
// z = Math.floor(x)
// z = Math.ceil(x)
// z = Math.trunc(x)
// z = Math.pow(x)
// z = Math.scrt(x)
// z = Math.log(x)
// z = Math.sin(x)
// z = Math.cos(x)
// z = Math.tan(x)
// z = Math.abs(x)
// z = Math.sign(x)
// let max = Math.max(x, y, z)
// let min = Math.min(x, y, z)







//RANDOM NUMBER GENERATOR

// const mybtn = document.getElementById("mybtn")
// const mylabel = document.getElementById("mylabel")
// const min = 1
// const max = 6
// let randomNum

// mybtn.onclick = function() {
//     randomNum = Math.floor(Math.random() * max) + min
//     mylabel.textContent = randomNum
// }















// IF STATMENTS = if a condition is true, excute some code
//                if not, do something else


// let age = 12

// if(age >= 18) {
//     console.log("You are old enough to enter this site")
// }
// else{
//     console.log("You must be 18+ to enter this site")
// }


// let time = 9

// if(time < 12){
//     console.log("Good morning")
// }
// else{
//     console.log("Good afternoon")
// }


// let isStudent = true

// if (isStudent){
//     console.log("you are a student")
// }
// else{
//     console.log("you are not a student")
// }

// let age = 19
// let hasLicense = false

// if(age >= 18){
//     console.log("You are old enough to drive")

//     if(hasLicense){
//         console.log("You have your license")
//     }
//     else{
//         console.log("You do not have your license yet")
//     }
// }
// else{
//     console.log("You must be 18+ to have a license")
// }




// const mytxt = document.getElementById("mytxt")
// const mybtn = document.getElementById("mybtn")
// const result = document.getElementById("result")
// let age 

// mybtn.onclick = function() {

//     age = mytxt.value;
//     age = Number(age)

//     if(age >= 18){
//         result.textContent = `You are old enough to enter this site`
//     }
//     else if(age == 0){
//         result.textContent = `you can't enter. you were just born`
//     }
//     else if(age < 0){
//         result.textContent = `Your age can't be below 0`
//     }
//     else if(age >= 100){
//         result.textContent = `You are too old to enter this site`
//     }
//     else{
//         result.textContent = `you must be 18+ to enter this site`
//     }
// }














// .checked = property that determines the checked state of an
//            HTML checkbox or radio button element

// const myCheckBox = document.getElementById("mycheckbox")
// const visaBtn = document.getElementById("visabtn")
// const masterCard = document.getElementById("mastercard")
// const PayPal = document.getElementById("paypal")
// const mybtn = document.getElementById("mybtn")
// const result = document.getElementById("result")
// const payment = document.getElementById("payment")

// mybtn.onclick = function() {
//     if(myCheckBox.checked){
//         result.textContent = `You are subscribed`
//     }
//     else{
//         result.textContent = `You are not subscribed`
//     }

//     if(visaBtn.checked){
//         payment.textContent = `You are paying with Visa`
//     }
//     else if(masterCard.checked){
//         payment.textContent = `You are paying with MasterCard`
//     }
//     else if(PayPal.checked){
//         payment.textContent = `You are paying with PayPal`
//     }
//     else{
//         payment.textContent = `You must select a payment type`
//     }
// }











// ternary operator = a shortcut to if{} and else{} statments
//                    helps to assign a variable based on a condition
//                    condition ? codeIfTrue : CodeIfFalse

// bad way
// let agee = 21
// let messagee;

// if(age += 18){
//     messagee = "youre adult"
// }
// else{
//     messagee = "youre minor"
// }



// // good way
// let age = 21
// let message = age >= 18 ? "youre an adult" : "youre a minor"
// console.log(message)


// // თუ ასაკი მეტია ან ტოლი 18 ზე, ცვლად message ში შეინახება სტრინგი youre an adult, ხოლო წინააღმდეგ შემთხვევაში youre minor


// let time = 16;
// let greeting = time < 12 ? "Good morning!" : "Good afternoon"
// console.log(greeting)


// let isStudent = true;
// let message1 = isStudent ? "you are a student" : "yyou are not a student"
// console.log(message1)


// let purchaseAmount = 125;
// let discount = purchaseAmount >= 100 ? 10 : 0
// console.log(`your total is ${purchaseAmount - purchaseAmount * (discount/100)}`) 












// SWITCH = can be an efficient replacement to many else if statmets

// let day = 1

// switch(day){
//     case 1: 
//         console.log(" it is monday") // if day == 1 console log monday
//         break
//     case 2:
//         console.log("it is tuesday")
//         break
//     case 3:
//         console.log("it is wednesday")
//         break
//     case 4:
//         console.log("it is thursday")
//         break
//     case 5:
//         console.log("it is friday")
//         break
//     case 6:
//         console.log("it is saturday")
//         break
//     case 7:
//         console.log("it is sunday")
//         break
//     default:  // no matching case
//         console.log(`${day} is not a day`)
//         break
// }



// let testScore = 92
// let letterGrade;

// switch(true) {
//     case testScore >= 90:
//         letterGrade = "A"
//         break
// }
// console.log(letterGrade)
















// string methods = allow you to manipulate and work with text (strings)

// let userName = "TheCodeCrafter   "
// console.log(userName.charAt(0)) // first charachter of userName "T"
// console.log(userName.indexOf("C")) // calculating index of the "C"
// console.log(userName.lastIndexOf("C")) // calculating second "C" index
// console.log(userName.length) // same as len in py
// console.log(userName.trim()) // removing whitespaces from string
// console.log(userName.toUpperCase()) // making string uppercase
// console.log(userName.toLocaleLowerCase()) // making string lowercase
// console.log(userName.startsWith(" "))// გამოაქვს true ან false, თუ სტრინგში გვექნება space გამოიტანს true ს






// string slicing = creating a substring
//                  from a portion of another string
//                  string.slice(start,end)


// const fullName = "TheCodeCrafter"

// let firstName = fullName.slice(3, 7)
// let lastName = fullName.slice(-7)

// let firstChar = fullName.slice(0, 1)
// let lastChar = fullName.slice(-1)

// console.log(firstName)  // code
// console.log(lastName) // crafter



// GMAIL PROJECT
// const email = "giogagnidze@gmail.com"
// let username = email.slice(0, email.indexOf("@"))
// let extension = email.slice(email.indexOf("@"))
// console.log(username)
// console.log(extension)


















// Method Chaining = Calling one method after another
//                   in one conticuous line of code.



//  ----  NO METHOD CHAINING  ----
// let username = window.prompt("Enter your username: ")
// username = username.trim()   //romoving whitespaces

// let letter = username.charAt(0)  // taking first char from username
// letter = letter.toUpperCase() // making first char big

// let extaChar = username.slice(1)
// extaChar = extaChar.toLocaleLowerCase()
// username = letter + extaChar

// console.log(username)



//  ---- METHOD CHAINING ----
// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase()














//logical operators = used to combine or manipulate boolean values
//                    (true or false)

//                    and == &&
//                    or == ||
//                    not == !


// const temp = 30;

// if(temp > 0 && temp <= 30){
//     console.log("weather is good")
// }
// else{
//     console.log("the weather is bad")
// }

// if(temp > 0 || temp <= 30){
//     console.log("weather is good")
// }
// else{
//     console.log("the weather is bad")
// }

// const isSunny = true

// if(!isSunny){
//     console.log("it is cloudy")
// }
// else{
//     console.log("it is sunny")
// }



















//  = assigment operator
//  == comprasion operatorn (compare if value are equal)
//  === strict equalation opeartor (compare if value & datatype are equal)
//  != inequality operator
//  !== strict inequality operator


// const PI = 3.14

// if(PI == "3.14"){
//     console.log("that is PI")
// }
// else{
//     console.log("that in not PI")
// }
 

// if(PI === "3.14"){
//     console.log("that is PI")
// }
// else{
//     console.log("that in not PI")
// }


// if(PI != "3.14"){
//     console.log("that is PI")
// }
// else{
//     console.log("that in not PI")
// }


// if(PI !== "3.14"){
//     console.log("that is PI")
// }
// else{
//     console.log("that in not PI")
// }



















// while loop = repeat some code WHILE some condition is true


// let username = ""

// while(username === ""){
//     username = window.prompt(`enter your name`)
// }
// console.log(`hello ${username}`)


// let loggedIn = false
// let username;
// let password;

// while(!loggedIn){
//     username = window.prompt(`enter your username`)
//     password = window.prompt(`enter your password`)

//     if(username === "giorgi" && password === "gio123"){
//         loggedIn = true
//         console.log("you are logged in");
//     }
//     else{
//         console.log("invalid crendentials! please try again");
//     }
// }



















// for loops = repeat some code a limited amount of times

// for(let i = 1; i <= 11; i++){
//     console.log(i);
// }



// for(let i = 10; i > 0; i--){
//     console.log(i);
// }



// for(i = 1; i <= 20; i++){
//     if(i == 13){
//         continue   // 13 ricxvs daskipavs  10 11 12 14 15
//     }
//     else{
//         console.log(i);
//     }
// }


// for(i = 1; i <= 20; i++){
//     if(i == 13){
//         break  // 13 ze sewydeba da 13 ar iwereba
//     }
//     else{
//         console.log(i);
//     }
// }












// NUMBER GUESSING GAME
// const minNum = 1;
// const maxNum = 100;
// const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

// let attempts = 0
// let guess 
// let running = true

// while(running){

//     guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`)
//     guess = Number(guess)  // making it int

//     if(isNaN(guess)){  // is this not a number
//         window.alert("Please enter a valid number")
//     }
//     else if(guess < minNum || guess > maxNum){
//         window.alert("Please enter a valid number")
//     }
//     else{
//         attempts++
//         if (guess < answer) {
//             window.alert("TOO LOW! TRY AGAIN");
//         } else if (guess > answer) {
//             window.alert("TOO HIGH! TRY AGAIN");
//         } else {
//             window.alert(`CORRECT! The answer was ${answer}. It took you ${attempts} attempts`);
//             running = false;
//         }
   
//     }
// }















// function = A sectopn of reusable code.
//            declare code once, use it whenever you want
//            Call the function to excute that code


// function happyBirthday(username, age){
//     console.log("Happy birthday to you!")
//     console.log("Happy birthday to you!")
//     console.log(`Happy birthday dear ${username}!`)
//     console.log("Happy birthday to you!")
//     console.log(`You are ${age} year old`)
// }

// happyBirthday("Gio", 16)
// happyBirthday("SpongeBob", 30) 




// function add(x, y){
//     return x + y
// }
// function substract(){
//     return x - y
// }
// function multiplay(x, y){
//     return x * y
// }
// function devide(x, y){
//     return x / y
// }



// function isEven(number){

//     if(number % 2 === 0){
//         return true
//     }
//     else{
//         return false;
//     }
// }


// function isEven(number){
//     return number % 2 === 0 ? true : false
// }


// function isValidEmail(email){
    
//     if(email.includes("@")){
//         return true
//     }
//     else{
//         return false
//     }

// }




// function isValidEmail(email){
    
//     return email.includes("@") ? true : false

// }

