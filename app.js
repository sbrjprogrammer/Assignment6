    // Assignment6 chapter 21 to 25
        // SRINGS 
//  TASK1
// var firstName= prompt("enter your first name");
// var lastName= prompt("enter your second number");
// var fullName= firstName.concat(lastName);
// alert(fullName)

// TASk2
// var input =prompt("enter your favourite mobile model");
// document.write( input+"<br>");
// "</br>"
// document.write("the length is" + input.length);


// TASK3
// var a = "paksitan"
// var b = a.indexOf("n");
// alert("index of n is "+b)


// TASK4
// var a = "hello world";
// var b =a.lastIndexOf("l");
// alert("last index of 'i' "+b)

// TASK5
// var a ="pakistan"
// var b =a.charAt(3);
// alert("character at index 3 "+b);


// TASK6
// var city ="Hyderabad"
// var b= city.replace("hyderabad","islamabad");
// alert(b);

// // TASK7
// var message =  "Ali and Sami are best friends They play cricket and football together"
// var b = message.replace(/and/g, "&");
// alert(b)


// ?????TASK8????


// TASK9
// var a= prompt("enter word");
// var b= a.toUpperCase()
// alert(b);


// TASK10
// var a =prompt("enter your answer")
// var b = a.toUpperCase();
// alert(b); 

// TASK11?????/


// TASk12????????


// TASK14
// var a = ["cake","apple pie","cookie","chips","panties"];
// var b =prompt ("write the name of bakery item you want to buy");
// var c =b.toLocaleLowerCase();

// for(i=0; i<a.length; i++){
//     if(a[i]===c){alert(b+"is available" +"at our store");}
//     else{
//         alert("sorry item is not available")
//         break;
//     }
// }

// CHAPTER26TO30
// MATH FUNCTION
// TASK1
//  var positiveInt =+prompt("enter value");
//  var round =Math.round(positiveInt);
//  var floor=Math.floor(positiveInt);
//  var ceil= Math.ceil(positiveInt);
//  document.write("number "+ positiveInt+"<br/>")     
//  document.write("roundoff value "+ round+ "<br/>")     
//  document.write("floor value "+ floor +"<br/>")    
//  document.write("ceil value " +ceil+"<br/>")       

// TASK2
//  var negativeint =+prompt("enter value");
//  var round =Math.round(negativeint);
//  var floor=Math.floor(negativeint);
//  var ceil= Math.ceil(negativeint);
//  document.write("number "+ negativeint+"<br/>")     
//  document.write("roundoff value "+ round+ "<br/>")     
//  document.write("floor value "+ floor +"<br/>")    
//  document.write("ceil value " +ceil+"<br/>")       

// TASK3
// var a = +prompt("enter your value");
// var b =Math.abs(a);
// document.write("The absolute value of "+a+" is "+b)

// TASK4
// var num =Math.random();
// var num2 = (num*6)+1;
// var dice = Math.floor(num2);
// alert(dice)

// TASK5
// var num =Math.random();
// var num2 = (num*2)+1;
// var coin = Math.floor(num2);

// if ( coin=="2" ){
//         alert("head")
// }
// else{
//         alert("tail")
// }

// Task6
// var num =Math.random();
// var num2 = (num*100)+1;
// var num3 = Math.floor(num2);
// alert(num3);


// TASK7
// ??????????????

// TASK8
// var input=+prompt("enter a number between 1 to 10")
// var num =Math.random(input);
// var num2 = (num*10)+1;
// var num3 = Math.floor(num2);
// // alert(num3);
// if (num3="7"){
//         alert(" congratulate the user")
// }
// else{
//         alert("try again")
// }


// CHAPTER 31 TO 34
//  DATE
//  TASK1

// var date= new Date();
// document.write(date);



// Task2


// var a = new Date();
// var b = a.toString();
// var c = b.slice(4,8);
// document.write('Current month: ' + c);

// // Task3

// var a = new Date();
// var b = a.toString();
// var c = b.slice(0,3);
// document.write('Today is ' + c);


// // Task4

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var nameOfToday = dayNames[theDay];
// var x = 'sun';
// var y = 'sat';
// if (nameOfToday === x){
//     document.write('its fun day')
// }
// else if(nameOfToday === y){
//     document.write('its fun day')
// }
// else{
//     document.write('Its not fun day'+nameOfToday);
// }

// // Task5

// var d =new Date();
// var e =d.getDate();
// if (e > 16  ){
//     document.write('Last days of the month');
// }
// else{
//     document.write('first fiften days of the month'+ e);
// }

// // Task6
// var current = new Date();
// document.write('Current date: '+ current +'<br>');

// var miliSecond = current.getTime();
// document.write('Elapsed miliseconds since january 1, 1970: '+" "+ miliSecond);
// var min = current.getSeconds();
// document.write(min);


// Task7

// var date_new = new Date();
// var hour = date_new.getHours();

// if (h == 12) {
//   time = h + ":" + m + " PM";
// } else {
//   time = h > 12 ? h - 12 + ":" + m + " PM" : h + ":" + m + " AM";
// }


// Task8


// var late_date = new Date("dec 31, 2020");
// document.write('Later date:'+ " "+ late_date);


// Task9

// var date_ramdan = new Date( "June 18, 2015");
// var change_days = date_ramdan / (1000 * 60 * 60 * 24);
// var round_off = Math.floor(change_days);
// document.write(round_off + " " + 'days have passed since 1st Ramdan, 2015 ');

// Task10
// var ref = new Date("dec 05, 2015");
// document.write('On reference date '+ ref);

// var currSecs = ref.getSeconds();
// document.write(currSecs + ' ' + 'seconds had passed since beginning of 2015');




// Task11
// var current_date = new Date();
// document.write('current date: ' + current_date);

// var new_day = new Date("Jun 18 2020 10:41:51");
// var diff = current_date - new_day;
// document.write(diff + " hours ago, it was sat" + current_date);

// Task12
// var current_date = new Date("dec 05 2015");
// document.write('current date: ' + current_date);

// var new_day = new Date("dec 05 1915");
// var diff = current_date - new_day;
// document.write(diff + " years back, it was " + current_date);

// // Task13
// var dob = new Date (prompt("Enter your date of birth" , "jan 1 1980"));
// var dobmili = dob.getTime();
// var today  = new Date();
// var todaymili = today.getTime();
// var diff = todaymili - dobmili;
// var accuage = math.floor(diff/ (1000*60*60*24*30*12))
// document.write(accuage);

// Task14

// var Customer_Name = "ABC Customer";

// var d = new Date();
// var currentMonth = d.getMonth();
// document.write("customer name: " + Customer_Name +"<br>" +"month: " + currentMonth +"<br>");

// var unit = "Number of units: ";
// var unit_num = 410;
// document.write(unit + unit_num +"<br>") ;

// var chrg = "Charge per units: ";
// var charges_unit = 16;
// document.write(chrg + charges_unit+ "<br>");

// var net_amount = "Net Amount Payable (within due Date): ";
// var sum = unit_num * charges_unit;
// document.write(net_amount +' ' + sum + "<br>");

// var late = "Late payment surcharge: ";
// var late_charges = 350;
// document.write(late + late_charges + "<br>");

// var gross_amount = "Gross Amount payable(After Dua Date): ";
// var amount_payable =sum + late_charges;
// document.write(gross_amount + amount_payable);










//         CHAPTER 35 TO 38
//         FUNCTION
// // TASK1

// function date(){

//         var date = new Date();
//         return date;
// }
// var a = date();
// alert(a)

// TASK2

// function name(){
//         var first=prompt("enter your first name");
//         var last = prompt("enter your second name")
//         var full= first+last;
//         document.write(full)
// }

// name();

// // TASK3
// function sum (){

//         var a = +prompt("enter first number");
//         var b = +prompt("enter second number");
//         var c = a+b;
//         alert(c)
// }
// sum();

// TASK4

// function calculator(){
//         var num1=+prompt("enter number");
//         var oper=prompt("enter operator");
//         var num2 =+prompt("enter second number")

//         var sum = num1+num2;
//         var mult = num1*num2;
//         var sub = num1-num2;
//         var div = num1/num2;

//         if( oper ==="+"){
//                 alert(sum)
//         }
//         else if (oper==="-"){
//                 alert(sub)
//         }
//         else if (oper==="*"){
//                 alert(mult)
//         }
//         else{
//                 alert(div)
//         }


// }
// calculator();

// TASK5
// function square(num){
//         var a= num*num;
//         alert(a)

// }
// square(prompt());

// TASK6
// function factorial(n){
//         let answer = 1;
//         if (n == 0 || n == 1){
//           return answer;
//         }else{
//           for(var i = n; i >= 1; i--){
//             answer = answer * i;
//           }
//           return answer;
//         }  
//       }
//       let n =prompt();
//       answer = factorial(n)
//       console.log("The factorial of " + n + " is " + answer);

// TASK7
// function sum() {
//         var FirstNumber = +prompt();
//         var SecondNumber = +prompt();



//         for (var i = FirstNumber; i <= SecondNumber; i++) {

//         }


//     }

//    sum();

// TASK8
// function hypotenuse(a, b) {
//     function square(x) { return x*x; }
//     return Math.sqrt(square(a) + square(b));
//  }
//  function secondFunction() {
//     var result;
//     result = hypotenuse(1,2);
//     document.write ( result );
//  }


// TASK9
// function area (width ,height){
//         var  rectangle = width*height;
//         alert(rectangle);

// }
// area(2,3);


// TASK10



// function palindrome(str) {
//     return true;
//   }
//   palindrome("madam");


// Task11

// function capital_letter(str) 
// {
//     str = str.split(" ");

//     for (var i = 0, x = str.length; i < x; i++) {
//         str[i] = str[i][0].toUpperCase() + str[i].substr(1);
//     }

//     return str.join(" ");
// }

// console.log(capital_letter("'the quick brown fox"));


// // Task12

// function longest_string(str)
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
// console.log(longest_string('Web Development Tutorial'));

// Task13

// function count(str, letter) 
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

// console.log(count('w3resource.com', 'o'));













// TASK14
// function calcCircumference() {
//         var rad = 23;
//         var cicumference= 2*3.142*rad   
//         alert(cicumference)

// }
// calcCircumference();

// // TASK14.B
// function calcArea(){
//         var rad = 23;
//          var area= 3.142*rad*rad  
//          alert(area)
        
// }
// calcArea();
