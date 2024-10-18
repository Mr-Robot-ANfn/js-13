// Question: 1

// console.log(rightNow);

// // Question: 2
// var months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
// console.log(months[rightNow.getMonth()]);

// Question: 3
// var days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
// console.log(days[rightNow.getDay()]);

// Question: 4

// var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
// console.log(rightNow.getDay());
// var a = days[rightNow.getDay()];
// if (a == "Sat" || a == "Sun") {
//     console.log("It's Fun Day");
// }
// else {
//     console.log("It's working Day");
// }

//QUESTION 5
// var a = rightNow.getDay();
// if (a < 15) {
//     console.log("First Fifteen Days Of The month");
// }
// else {
//     console.log("Last Fifteen Days Of The month");
// }

//QUESTION 6

// var currentdate = new Date();
// console.log("Current Date: " + currentdate);
// console.log("Milliseconds since 1 january 1970:" + currentdate.getTime());
// console.log("Milliseconds since 1 january 1970:" + currentdate.getMinutes());


//QUESTION 7

// var currentHour = new Date().getHours();

// if (currentHour < 12) {
//     alert("It's AM");
// } else {
//     alert("It's PM");
// }

//QUESTION 8

// var laterDate = new Date(2020, 11, 31);

// console.log(laterDate);

//QUESTION 9

// var ramadanStartDate = new Date("June 18, 2015");
// var currentDate = new Date();
// var timeDifference = currentDate - ramadanStartDate;
// var daysPast = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

// alert("Number of days past since 1st Ramadan (June 18, 2015): " + daysPast);


//QUESTION 10

// var beginningOf2015 = new Date(2015, 0, 1);
// var referenceDate = new Date('Dec 5, 2015 22:50:16');
// var timeDifference = referenceDate.getTime() - beginningOf2015.getTime();
// var secondsElapsed = Math.floor(timeDifference / 1000);
// alert("On reference date " + referenceDate + ", " + secondsElapsed + " seconds had passed since the beginning of 2015.");


//QUESTION 11

// var currentDate = new Date();

// document.write("Current date: " + currentDate + "<br>");

// currentDate.setHours(currentDate.getHours() + 1);

// document.write("1 hour ago, it was: " + currentDate);


//QUESTION 12

// var currentDate = new Date();

// document.write("Current date: " + currentDate + "<br>");

// currentDate.setFullYear(currentDate.getFullYear() - 100);

// document.write("100 years back, it was: " + currentDate);

//QUESTION 13

// var userAge = prompt("Enter your age:");
// var currentYear = new Date().getFullYear();
// var birthYear = currentYear - userAge;

// document.write("Your age is " + userAge + "<br>");
// document.write("Your birth year is " + birthYear);

//QUESTION 14

var customerName = "ABC Customer";
var currentMonth = "February";
var numberOfUnits = 410;
var chargesPerUnit = 16;

var netAmountPayable = numberOfUnits * chargesPerUnit;

var latePaymentSurcharge = 350;

var grossAmountPayable = netAmountPayable + latePaymentSurcharge;

netAmountPayable = netAmountPayable.toFixed(2);
grossAmountPayable = grossAmountPayable.toFixed(2);

document.write("<h2>K-Electric Bill</h2>");
document.write("Customer Name: <strong>" + customerName + "</strong><br>");
document.write("Month: <strong>" + currentMonth + "</strong><br>");
document.write("Number of units: <strong>" + numberOfUnits + "</strong><br>");
document.write("Charges per unit: <strong>" + chargesPerUnit + "</strong><br><br>");
document.write("Net Amount Payable (within Due Date): <strong>" + netAmountPayable + "</strong><br>");
document.write("Late payment surcharge: <strong>" + latePaymentSurcharge + "</strong><br>");
document.write("Gross Amount Payable (after Due Date): <strong>" + grossAmountPayable + "</strong>");
