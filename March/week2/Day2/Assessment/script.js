//1.Capitalize First Letter of Every Word
function capitalizeWords(str) {
    return str
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

let text = "javascript is very easy to learn";
console.log(capitalizeWords(text));

//3. Group Numbers (Even and Odd)
let arr = [1,2,3,4,5,6,7,8,9];

let result = arr.reduce((acc, num) => {
    if(num % 2 === 0){
        acc.even.push(num);
    } else {
        acc.odd.push(num);
    }
    return acc;
}, {even: [], odd: []});

console.log(result);
//4.From an array of numbers, return only numbers greater than 50 using function
function greaterThan50(arr) {
    return arr.filter(num => num > 50);
}

let numbers = [10, 45, 60, 75, 30, 90];
let result1 = greaterThan50(numbers);

console.log(result1);

//5.Calculate the total price of products in a array using function.
function totalPrice(products){
    let total = 0;

    for(let i = 0; i < products.length; i++){
        total += products[i];
    }

    return total;
}

let prices = [100, 200, 300, 150];
console.log(totalPrice(prices));

//6.Replace all spaces in a sentence with hyphens (-) in a string.
function replaceSpace(str){
    return str.replaceAll(" ", "-");
}

let sentence = "I love JavaScript programming";
console.log(replaceSpace(sentence));

//7.what are the types of function ?
// **Types of Functions in JS is**

// 1. Anonymous function
// 2. Named function
// 3. Function with expression
// 4. Nested function
// 5. Immediate invoking function
// 6. Arrow function
// 7. Higher order function
// 8. Callback function

//8.what is function currying ?
// Function Currying is a technique in JavaScript where a function with multiple arguments is converted into a series of functions that each take one argument.

//9.what is the benefits of a function ?
//the benefit of function is A function can be written once and used many times in the program.
//Functions make code organized, easier to understand, and simpler to debug.

//10.what is the Higher order Function explain any add some example ?
//A function which accepts a function as a parameter is known as HOF It is used to perform multiple operations with different values.
// example
let numbers2 = [1, 2, 3, 4];

let result3 = numbers2.map(function(num){
    return num * 2;
});

console.log(result3);