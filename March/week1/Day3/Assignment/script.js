//1.Create an array [10, 20, 30]. Add 40 at the end of the array.
let arr = [10,20,30]
arr.push(40);
console.log(arr);

//2.Given the array ["red", "blue", "green"], remove the first element.
let arr1=["red", "blue", "green"]
arr1.shift("red");
console.log(arr1);

//3.Combine the arrays [1, 2, 3] and [4, 5, 6] into a single array.
console.log([1,2,3].concat([4,5,6]));

//4.From the array [10, 20, 30, 40, 50], create a new array containing the first three elements.
let arr2=[10, 20, 30, 40, 50]
let newArr = arr2.slice(0, 3);
console.log(newArr);

//5.From ["HTML", "CSS", "JS", "React"], remove "JS".
let arr3=["HTML", "CSS", "JS", "React"]
arr3.splice(2,1)
console.log(arr3)

//6.In ["apple", "banana", "mango"], replace "banana" with "grape".
let arr4=["apple", "banana", "mango"]
arr4.splice(1,1,"grape")
console.log(arr4)

//7.Convert the array ["Hello", "World", "JS"] into a string.
let arr5=["Hello", "World", "JS"]
console.log(arr5.toString());

//8.Create an array with 5 elements where all elements are 0.
let arr6 = new Array(5).fill(0);
console.log(arr6);

//9.From [1, 2, 3, 4, 5], create a new array containing the last two elements.

//10.Extract elements from index 1 to 3 from [10, 20, 30, 40, 50].
let arr7 = [10, 20, 30, 40, 50];
let newArr1 = arr7.slice(1, 4);
console.log(newArr1);