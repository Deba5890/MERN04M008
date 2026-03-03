//Print numbers from 1 to 100 using a for loop. *
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

//2.Find the sum of numbers from 1 to 10. * 
let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i;
}

console.log("Sum =", sum);

//3.Print multiplication table of 7. *
for (let i = 1; i <= 10; i++) {
    console.log("7 x " + i + " = " + (7 * i));
}

//4.find the factorial of a number
let num = 5; 
let factorial = 1;

for (let i = 1; i <= num; i++) {
    factorial *= i;
}

console.log("Factorial =", factorial);

//5.reverse an array using loop
let arr = [1, 2, 3, 4, 5];
let reversed = [];

for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
}

console.log("Reversed Array:", reversed);