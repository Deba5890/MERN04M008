//1.Write a program to check whether a number is even or odd.
let num=10;
if(num % 2 === 0){
    console.log("the num is even ")
}else{
    console.log("the num is odd")
}

//2.### Positive, Negative, or Zero
// Take a number and print:
// - "Positive"
// - "Negative"
// - "Zero"
let number= -5;
if (number > 0) {
    console.log("Positive");
} else if (number < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

// 3.Check if a person is eligible to vote (age ≥ 18).
let age = 20;
if (age >= 18){
    console.log("voting for eligible")
}else{
    console.log("voting for ineligible")
}

// 4.Find the largest between two numbers.
let Number1=23;
let Number2=26;
if(Number1>Number2){
    console.log("number1 is greater")
}else if(Number2>Number1){
    console.log("number2 is greater")

} else {
    console.log("Both numbers are equal");
}

//5.Check whether a number is divisible by 5 or not.
let No=25;
if(num % 5===0){
    console.log("it is divisible by 5")
}else{
    console.log("it is not divisible by 5")
}

 //6. ### Grade Calculator

// Given marks:

// - 90+ → A
// - 75–89 → B
// - 50–74 → C
// - Below 50 → Fail

let marks = 82;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75 && marks <= 89) {
    console.log("Grade B");
} else if (marks >= 50 && marks <= 74) {
    console.log("Grade C");
} else {
    console.log("Fail");
}