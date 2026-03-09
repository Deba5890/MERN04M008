//1. Create an array of 5 fruits.
// Print the **first** and **last** elements using indexing.
let arr =["mango", "orange", "banana", "apple","lichi"];
console.log(arr[0]);              // First element
console.log(arr[arr.length-1]);   // Last element

//2.Add "Mango" to the end of the array using push() and "Kiwi" to the start using unshift()
let arr1=["papaya", "orange", "banana", "apple","lichi"];
arr1.push("mango");
arr1.unshift("kiwi");
console.log(arr1);

//3.Use indexOf() to find the position of "Banana" in an array.
let arr2=["papaya", "orange", "banana", "apple","lichi"];
console.log(arr2.indexOf("banana"));

//4.Use includes() to check if "Orange" exists in the array.
let arr3=["papaya", "orange", "banana", "apple","lichi"];
console.log(arr3.includes("orange"));

//5.Convert an array of numbers [1,2,3,4,5] into a string separated by “-” using join().
let numArr=[1,2,3,4,5]
console.log(numArr.join("-"));

//6.Given an array [1, 2, 3, 2, 1, 4, 5], remove duplicates.

//7.Given an array of strings, return the one with the longest length.
let arr4 = ["apple", "banana", "kiwi", "watermelon"];

let longest = arr4[0];

for (let i = 1; i < arr4.length; i++) {
    if (arr4[i].length > longest.length) {
        longest = arr4[i];
    }
}

console.log(longest);

//8.Reverse a string using array methods (split(), reverse(), join()).
let str="apple";
let reversed = str.split("").reverse().join("");
console.log(reversed);

//9.Count how many even numbers exist in [2, 5, 8, 11, 14, 17, 20].
let arr5 = [2, 5, 8, 11, 14, 17, 20];
let count = 0;
for (let i = 0; i < arr5.length; i++) {
    if (arr5[i] % 2 === 0) {
        count++;
    }
}
console.log(count);

//10.Create a new array that contains the length of each string from ["React", "Node", "MongoDB"].

//11.