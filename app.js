// ______________ CHAPTER # 21-25________________


// QUESTION:01
// Write a program that takes two user inputs for first and last name using prompt 
// and merge them in a new variable titled fullName. 
// Greet the user using his full name. 

// var first=prompt("Enter your first name");
// var last=prompt("Enter your last name");
// var fullName = (first + " "+last )
// console.log(fullName)



// QUESTION:02
// Write a program to take a user input about his favorite mobile phone model. 
// Find and display the length of user input in your browser 


// var model = prompt("Enter your favourite mobile phone model")
// var a = model.length;
// let mobile = ` 
// My favorite phone is : ${model} 
// <br>
// Length of string : ${a}
// `;
// document.write(mobile);


// QUESTION:03
// Write a program to find the index of letter “n" in the word
// “Pakistani" and display the result in your browser

// let str = "Pakistani";
// let search = str.indexOf("n",)
// let p = `
// <h2>
// String : ${str}
// <br>
// Index of 'n' : ${search}
// </h2>
// `;
// document.write(p);


// QUESTION:04
// Write a program to find the last index of letter “l" in the
// word “Hello World" and display the result in your browser .

// let hi = "Hello World";
// let lastindex = hi.lastIndexOf("l");
// document.write(`
// <h4>
// String : ${hi}
// <br>
// Last index of "l" : ${lastindex}
// </h4>
// `);


//  QUESTION:05
// Write a program to find the character at 3 rd index in the
// word “Pakistani" and display the result in your browser .

// let str1 = "Pakistani";
// b = str1.charAt(3);
// document.write(`
// <h4>
// String : ${str1}
// <br>
// Character at index 3  : ${b}
// </h4>
// `);



//  QUESTION:06
// Repeat Q1 using string concat() method.

// let fName = "Tania";
// let lName = "Jabeen";
// let name = fName.concat(lName);
// document.write(`
//    full name using concat method
//    <br>
//    full name : ${name}
// `);



//  QUESTION:07
// Write a program to replace the “Hyder" to “Islam" in the
// word “Hyderabad" and display the result in your browser.

// let city = "Hyderabad";
// let afterReplace = city.replace("Hyder", "Islam")
// document.write(`
// <h2>
// City : ${city}
// <br>
// After Replacement : ${afterReplace}
// </h2>
// `);



//  QUESTION:08
// Write a program to replace all occurrences of “and" in the
// string with “&" and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.";

// var message = "Tania and Hina are best friends. They play ludostar together .";
// var r = message.replace(/and/g, "&");
// document.write(`
// <h5>
// Original Message : ${message}
// <br>
// After Replacement : ${r}
// </h5>
// `);


//  QUESTION:09
// Write a program that converts a string “472" to a number
// 472. Display the values & types in your browser.

// var v1 = 472;
// document.write(`
// Value : ${v1}
// <br>
// Type : ${typeof v1}
// <br>
// `)

// // Now convert to string
// s1 = String(v1)
// document.write(`
//     Value : ${s1}
//     <br>
// Type : ${typeof s1}
    
// `)


//  QUESTION:10
// Write a program that takes user input. Convert and
// show the input in capital letters.

// const inp = prompt("Enter a input");
// const upper = inp.toUpperCase();
// document.write(`
// <h4>
// User input :${inp}
// <br>
// Upper Case : ${upper}
// </h4>
// `);


//  QUESTION:11
// Write a program that takes user input. Convert and
// show the input in title case.

// var text = prompt("Enter ur name");
// var title = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
// document.write(`
//  User input :${text}
//  <br>
//  Upper Case : ${title}
//  </h4>
// `)



//  QUESTION:12
// Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536" display in your browser.


// var num = 35.36;
// var without = num.toString().replace(".", "");
// document.write(`
// <h4>
// Number :${num}
// <br>
// Result:  ${without}
// </h4>
// `)


//  QUESTION:13
// Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64


// let username=prompt("Enter a username");

// let a = /^[0-9A-Za-z]+$/;

//  if (username.mathes(a)){
//      confirm("success");
//  }
//  else{
//      confirm("please enter a valid username")
//  }


//  QUESTION:14
// You have an array
// A = [cake", “apple pie", “cookie", “chips", “patties"]
// Write a program to enable “search by user input" in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:


// let A = ["cake", "apple pie", "cookie", "chips", "patties"];
// confirm(`
// Welcome to ABC bakery. What do you want to order sir/ma'am?
//  ${ searchIndex = prompt("")}
// `);

// let found= false;
// for (var i = 0; i < A.length; i++) {

//     if (A[i] === searchIndex.toLowerCase()) {

//         document.write(`
        
//         ${A[i]} is <b> available </b> at index ${i} in our bakery
//         `)

//         found = true;
//         break;
//     }
// }
// if (!found) {
//     document.write(`
         
//         We are sorry. ${searchIndex} is <b> not available </b> in our bakery
//         <br>
//         `)
// }


//  QUESTION:16
// Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.


// var university = 'Dawood University of Engineering and Technology';
// var arr= Array.from(university);
// for (var i = 0; i < arr.length; i++) {

//     document.write(` <b> ${arr[i]} <br>`);
// }



//  QUESTION:17
// Write a program to display the last character of a user
// input.

// let txt= "Tania";
// let end=txt.substring(4)
// document.write(`
// <h4>
// User input: ${txt}
//     <br>
//     Last character of input : ${end}
// </h4>
// `);



//  QUESTION:18
// You have a string “The quick brown fox jumps over the lazy dog”.
//  Write a program to count number of occurrences of word “the” in given string. 
 

// function count(main_str, sub_str) 
//     {
//     main_str += '';
//     sub_str += '';
//     if (sub_str.length <= 0) 
//     {
//         return main_str.length + 1;
//     }
//        subStr = sub_str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
//        return (main_str.match(new RegExp(subStr, 'gi')) || []).length;
//     }
//     document.write(`
//     <h4>
//     Text : The quick brown fox jumps over the lazy dog
//     <br>
//     </h4> There are ${count("The quick brown fox jumps over the lazy dog", 'the')}
//     occurance(s) of the word 'the'
//     `)
 

// ______________ CHAPTER # 26-30________________


// QUESTION:01
// Write a program that takes a positive integer from user & display the following in your browser. 
// a. number
//  b. round off value of the number
//   c. floor value of the number
//    d. ceil value of the number 

// const int= +prompt("Enter a positive integres");
// document.write(`
// <h4>
// Number: ${int}
//     <br>
// Round off value: ${Math.round(int)}
//     <br>
// floor value:  ${Math.floor(int)}
//     <br>
// Ceil value: ${Math.ceil(int)}
// </h4>
// <br>
// `);


// QUESTION:02
// Write a program that takes a negative floating point number from user & display the following in your browser. 
// a. number
//  b. round off value of the number 
//  c. floor value of the number
//   d. ceil value of the number 

// const a= parseFloat(prompt("Enter a negative floating point"));
// document.write(`
// <h4>
// Number: ${a}
//     <br>
// Round off value: ${Math.round(a)}
//     <br>
// floor value:  ${Math.floor(a)}
//     <br>
// Ceil value: ${Math.ceil(a)}
// </h4>
// <br>
// `);


// QUESTION:03
// Write a program that displays the absolute value of a number.
//  E.g. absolute value of -4 is 4 & absolute value of 5 is 5 

// const abso= +prompt("Enter a value to display absolute value");
// document.write(`
// <h4>
//     The absolute value of ${abso} is ${Math.abs(abso)}
// </h4>
// `)



// QUESTION:04
// Write a program that simulates a dice using random() 
// method of JS Math class. Display the value of dice in your browser.: 


// var num= Math.random();
// var num1= (num*6)+1;
// var dice= Math.floor(num1);
// document.write(`
// <h4>
// random dice value  ${dice}:
// <br>
// `)
// document.write(`
// <h4>
// random dice value  ${dice}:
// <br>
// <br>
// <br>
// `)


// QUESTION:05
// Write a program that simulates a coin toss using random() 
// method of JS Math class. Display the value of coin in your browser 


// var coin= Math.random();
// var coin1= (coin*2)+1;

// var coin2= Math.floor(coin1);
//  if (coin2===2){
//      document.write(`
//      ${coin2}
//      <br>
//      Random coin value: Heads
//      `)
 
//  }
//  else{
//     document.write(`
//     ${coin2}
//     <br>
//     Random coin value: Tails
//     `)
//  }
 


// QUESTION:06
// Write a program that shows a random number between 1 and 100 in your browse

// var ran= (100 * Math.random()+1);
// ran1=Math.floor(ran);
// document.write(`
// <h4>
// random number between 1 and 100 : ${ran1}
// </h4>
// `)


// QUESTION:07
// Write a program that asks the user about his weight. Parse the user input and display his weight in your browser.
//  Possible user inputs can be: a. 50 b. 50kgs c. 50.2kgs d. 50.2kilograms 



// let input= prompt("Enter your weight");
// document.write(`
// <h3>
// The weight of user is ${input} 
// </h3>
// `)




// QUESTION:08
// Write a program that stores a random secret number from 1 to 10 in a variable.
//  Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user. 
 

// var y = Math.floor(Math.random() * 10 + 1); 
      
//  // counting the number of guesses 
//  // made for correct Guess 
//  var guess = 1; 

//  var x= prompt("Enter a number between 1 to 10")
   

// if(x == y) 
// {     
//     confirm("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
//             + guess + " GUESS "); 
// } 
// else if(x > y) /* if guessed number is greater 
//                 than actual number*/ 
// {     
//     guess++; 
//     confirm("OOPS SORRY!! TRY A SMALLER NUMBER"); 
// } 
// else
// { 
//     guess++; 
//     confirm("OOPS SORRY!! TRY A GREATER NUMBER") 
// } 
 


// ______________ CHAPTER # 31-34________________


// QUESTION:01
// Write a program that displays current date and time in your browser. 

// let date = new Date();

// document.write(`
// <h3>
// ${date}
// </>
// `)
 

// QUESTION:02
// Write a program that alerts the current month in words. For example December. 

// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// document.write(`
// <h3>
// Current Month : 
// ${months[date.getMonth()]}
// </>`);


// // QUESTION:03
// Write a program that alerts the first 3 letters of the current day,
//  for example if today is Sunday then alert will show Sun. 


// var Day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
// document.write(`
// <h3>
// Current Day : 
// ${Day[date.getDay()]}
// </>`);


// QUESTION:04
// Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today. 


// var Day1 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
// var d = Day1[date.getDay()]

// if (d == "Sun" || d == "Sat") {
//     document.write(`
//     <h3>
//     Its Fun day
//     </h3>
//     `)
// }
// else {
//     document.write(`
//     <h3>
//     Its  not a Fun day
//     </h3>
//     `)

// }


// QUESTION:05
// Write a program that shows the message “First fifteen days of the month”
//  if the date is less than 16th of the month else shows “Last days of the month”. 

// let c = date.getDate();

// if (c < 16) {
//     document.write(`
//     <h3>
//     First fifteen days of month
//     </h3>
//     `);

// }
// else if (c > 16) {
//     document.write(`
//     <h3>
//     Last fifteen days of month
//     </h3>
//     `);

// };


// QUESTION:06
// Write a program that determines the minutes since midnight, 
// Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand.
//  Use any variable you like to represent the Date object. 

// var d1= new Date("January 1 1970 18:29:25");
// // var d2=d1.getTime();
// document.write(`
// Current Date: ${date}
// <br>
// Elapsed millisecond since january 1, 1970 : ${d1.getTime()}
// <br>
// Elapsed minutes since january 1, 1970: ${d1.getTime()/(1000*60)}
// `)
 
 
// QUESTION:07
// Write a program that tests whether it's before noon and alert “Its AM” else “its PM”. 



// var hours = new Date().getHours();
// var hours = (hours+24-2)%24; 
// var mid='AM';
// if(hours==0){ //At 00 hours we need to show 12 am
// hours=12;
// }
// else if(hours>12)
// {
// hours=hours%12;
// mid='PM';
// }
// // alert ('Toronto time: ' + hours + mid);

// document.write(`
// <h3>
// Its ${mid}
// </h3>
// `);


// QUESTION:08
// Write a program that creates a Date object for the last day of the last month of 2020
//  and assigns it to variable named laterDate

// var laterDate= new Date("dec 31 2020")
// document.write(`
  
// Later date: ${laterDate}
// `)


// QUESTION:09
// Create a date object of the starting date of this Ramadan and 
// alert the number of days past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015 

// var d2= new Date("june 18 2015");

// var d3= new Date("june 19 2020");
// var diffTime= d2.getTime()-d3.getTime();
// var days= diffTime / (1000*60*60*24);
// document.write(`
// <h4>
// ${days} day have passed since 1st Ramadan, 2015 to 2020
// </h4>
// `)
 


// QUESTION:10
// Write a program that displays in your browser
//  the seconds that elapsed between the reference date and the beginning of 2015. 


// var d4= new Date("jan 1 2015 00:00:00");
// var d5= new Date("dec 5 2015 22:50:16 ");
// var Timediff= d5.getTime()-d4.getTime();
// var seconds= diffTime /(1000*60);
// document.write(`
// <h4>
// on refernce date ${d5}, 
// <br>
// ${seconds} seconds had passed away since begining of 2015
// </h4>
// `)



// ______________ CHAPTER # 35-38________________


// QUESTION:01
// Write a function that displays current date & time in your browser. 

// var a = new Date();
// alert (a)


// QUESTION:02
// Write a function that takes first & last name and then it greets the user using his full name. 


// function person(){
//  var firstName = prompt("Enter your first name")
// var lastName = prompt("Enter your last name")
// fullName= firstName+ " "+ lastName
// if(fullName){
//     alert("It is good to meet you" + " " +fullName)
// }

// }
// person();

// QUESTION:03
// Write a function that adds two numbers (input by user) and returns the sum of two numbers.

// function sum(){
//     var num1= +prompt("Enter a number");
//     var num2=+prompt("Enter another number");
//     var num =num1+num2
//     if(num){
//         alert("The sum of these two numbers is" +" "+num)    }
// }
// sum();


// QUESTION:04
// Calculator:  Write a function that takes three arguments num1, num2 & operator & compute the desired operation. 
// Return and show the desired result in your browser. 

// var myMultiplier = function(num1, num2){
//     return num1*num2
// }
// var result=myMultiplier(10,38)
// document.write(result);


// QUESTION:05
// Write a function that squares its argument. 

// var result=function(a){
//     var num=a*a
//     return num
// }
// var square=result(10)
// document.write(square);


// QUESTION:06
// Write a function that computes factorial of a number. 

// var factorial = function(n) {
//     var answer = 1;
//     if (n == 0 || n == 1) {
//         return answer;
//     } else {
//         for (var i = n; i >= 1; i--) {
//             answer = answer * i;
//         }
//         return answer;
//     }
// }
// var n = 10;
// answer = factorial(n)
// document.write("The factorial of " + n + " is " + answer);


// QUESTION:07
// Write a function that take start and end number as inputs & display counting in your browser. 

// function counting(firstNumber,lastNumber){
//     var firstNumber=+prompt("Enter first number")
//     var lastNumber=+prompt("Enter last number")
//     var result=0;
//    for(var i=firstNumber; i<lastNumber; i++){
//        result= result+1;
//    }
//    return result;
// }
// var g=counting()
// document.write(g)



// QUESTION:08
// Write a nested function that computes hypotenuse of a right angle triangle. 
//  Hypotenuse2 = Base2 + Perpendicular2 
//  Take base and perpendicular as inputs. Outer function :
//   calculateHypotenuse() Inner function: calculateSquare() 








 
 
// QUESTION:09
// Write a function that calculates the area of a rectangle.    
//   A = width * height    
//    Pass width and height in following manner: 
//    i. Arguments as value ii. Arguments as variables 

// i. Arguments as value
// function area(width,height){
//     alert(width*height)
// }
// area(5,5)

// ii. Arguments as variables 

// function area(width,height){
//     var width=10;
//     var height=5;
// alert(width*height)
// }
// area();

 
// QUESTION:10
// Write a JavaScript function that checks whether a passed string is palindrome or not? 










// QUESTION:11
// Write a JavaScript function that accepts a string as a parameter and converts 
// the first letter of each word of the string in upper case.  
// EXAMPLE STRING : 'the quick brown fox'  EXPECTED OUTPUT : 'The Quick Brown Fox' 

// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];

//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// document.write(uppercase("the quick brown fox"));






// QUESTION:12
// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
//  EXAMPLE STRING : 'Web Development Tutorial'  EXPECTED OUTPUT : 'Development' 


// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// document.write(find_longest_word('Web Development Tutorial'));


// QUESTION:13
// Write a JavaScript function that accepts two arguments,
//  a string and a letter and the function will count the number of 
// occurrences of the specified letter within the string.  Sample arguments : 'JSResourceS.com', 'o'  

// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// document.write(char_count('JSResourceS.com', 'o'));




// QUESTION:14
// The Geometrizer Create 2 functions that calculate properties of a circle, 
// using the definitions here. Create a function called calcCircumference:
//  • Pass the radius to the function. • Calculate the circumference based on the radius,
//   and output "The circumference is NN". Create a function called calcArea: • Pass the radius to the function.
//    • Calculate the area based on the radius, and output "The area is NN". 
 
// Circumference of circle    =     2πr 
// Area of circle       =     πr2 
 

//  function calcCircumference(radius){
//  pi=3.142;
//  alert("The circumference is"+ " "+2*pi*radius)
//  }
//  calcCircumference(10)

//  function calcArea(radius){
//      pi=3.142;
//      alert("The area is"+ " "+pi*(radius**2))
//  }
//  calcArea(10)