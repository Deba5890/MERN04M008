//1.Print each number multiplied by 2.
let arr = [2,3,4,5];
let result = arr.map(num => num * 2);
console.log(result);

//2.Print all words in uppercase from an array of strings.
let arr2 = ["apple", "banana", "mango", "grape"];
let upper = arr2.map(word => word.toUpperCase());
console.log(upper);

//3.Create a new array with the square of each number.
let arr3 = [1, 2, 3, 4, 5];
let square = arr3.map(num => num * num);
console.log(square);

//4.Convert an array of numbers into strings.
let arr4 = [1, 2, 3, 4, 5];
let strArr = arr4.map(num => num.toString());
console.log(strArr);

//5.Create a new array that contains the length of each word.
let words = ["React", "Node", "MongoDB"];
let lengths = words.map(word => word.length);
console.log(lengths);

//6.Get all positive numbers from an array.
let arr5 = [-3, 5, -1, 7, 0, 9, -2];
let positive = arr5.filter(num => num > 0);
console.log(positive);

//7.Get all even numbers from an array
let arr6 = [1, 2, 3, 4, 5, 6, 7, 8];
let evenNumbers = arr6.filter(num => num % 2 === 0);
console.log(evenNumbers);

//8.Concatenate all strings in an array into one string.
let arr7 = ["Hello", "World", "JavaScript"];
let result7 = arr.reduce((acc, curr) => acc + " " + curr);
console.log(result7);

//9.Find the minimum number in an array.
let arr8 = [10, 5, 8, 2, 15];
let min = arr8.reduce((acc, curr) => {
  return curr < acc ? curr : acc;
});
console.log(min);

//10.Check if all words have more than 3 characters.
let words3 = ["apple", "mango", "grape", "kiwi"];
let result3 = words3.every(word => word.length > 3);
console.log(result3);

//11.Check if any word starts with the letter "a".

let words6 = ["banana", "apple", "grape", "mango"];
let result6 = words6.some(word => word.startsWith("a"));
console.log(result6);